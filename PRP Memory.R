# Min Zhang 
# Set up ----
# 
# Clean Global Environment
rm(list = ls())

## Load library ----
## When writing code for others, don't assume they already have the package!
## you can use this to install + load the package
if (!require("dplyr")) {install.packages("dplyr"); require("dplyr")}
if (!require("tidyr")) {install.packages("tidyr"); require("tidyr")}
if (!require("stringr")) {install.packages("stringr"); require("stringr")}
if (!require("ggplot2")) {install.packages("ggplot2"); require("ggplot2")}
if (!require("here")) {install.packages("here"); require("here")}

##########################################################################################-
## read in all data file ----
# Get a list of all CSV files in the directory
csv_files <- list.files("data", pattern = "*.csv")

# Create an empty list to store data frames
dfs <- list()

# Loop through each CSV file, read it into a data frame, and store it in the list
for (file in csv_files) {
  df <- read.csv(here("data", file), stringsAsFactors = FALSE)
  dfs[[file]] <- df
}

# remove incomplete participant 
dfs <- dfs[-which(names(dfs) == '903339_PRP_Memory_Experiment__2024-03-16_13h53.10.431.csv')]

# Combine all data frames into one
raw_df <- do.call(rbind, dfs)

# Reset row names
rownames(raw_df) <- NULL


# Read in single data 
# raw_df <- read.csv("~/Downloads/PRP_Experiment/data/246831_PRP_Memory_Experiment__2024-03-09_01h13.00.048.csv")

# Select reverent columns 
df_complete <- raw_df %>%
  select(participant, WordItem, math_key_resp.keys, MathProblem,
         memory_test_key_resp.keys, Questions, LonlinessQuestionsKeyResp.keys)


##########################################################################################-
# math ----
# create df for math problem, we use the only to see if participant are actually doing the task
math <- df_complete %>%
  #filter math that are not empty 
  filter(MathProblem != "") %>%
  #select relevant columns: participant; math_key_resp.keys; MathProblem
  select(participant, math_key_resp.keys, MathProblem) %>%
  # if they get question 2+3 =10 and they answered "t" then theyare wrong (0)
  mutate(math_result = ifelse(grepl("2\\+3=10", MathProblem) & math_key_resp.keys == "t", 0,  "" ) ) %>%
  # if they get question 2+3 =10 and they answered "f" then they are right (1)
  mutate(math_result = ifelse(grepl("2\\+3=10", MathProblem) & math_key_resp.keys == "f", 1,  math_result) ) %>%
  # if they get question 7-4=3 and they answered "t" then they are right(1)
  mutate(math_result = ifelse(grepl("7\\-4=3", MathProblem) & math_key_resp.keys == "t", 1,  math_result) ) %>%
  # if they get question 7-4=3 and they answered "f" then they are right(0)
  mutate(math_result = ifelse(grepl("7\\-4=3", MathProblem) & math_key_resp.keys == "f", 0,  math_result) ) %>%

  # calculate % of math accuracy 
  # groups the data by the participant column.
  group_by(participant) %>%
  # calculates the proportion of rows.
  summarize(math_acc = mean(as.numeric(math_result), na.rm = TRUE) * 100)

# filter people get 0%
remove <- math %>%
  filter(math_acc == 0) 
##########################################################################################-
# memory ----
# display word 
WordDisplay <- c("Silk", "Pipe", "Elephant", "Cabin", "Theater", "Chest")
memory <- df_complete %>%
  # filter WordItem is not empty
  filter(WordItem != "") %>%
  # filter memory_test_key_resp.keys is not empty
  filter(memory_test_key_resp.keys != "") %>%
  # select relevant column
  select(participant, WordItem, memory_test_key_resp.keys) %>%
  # create column for correct answer 
  mutate(word_correct = ifelse(WordItem %in% WordDisplay, "y", "n")) %>%
  # score participant's answer 1 == Right, 0 == wrong 
  mutate(word_answer = ifelse(word_correct == memory_test_key_resp.keys, 1, 0)) %>%
  group_by(participant) %>%
  summarize(memory_acc = mean(word_answer, na.rm = TRUE) *100)
  

# Loneliness ----
# Researchers later reverse-code the positively worded items so that high values mean more 
# loneliness, and then calculate a score for each respondent by averaging their ratings.
# The UCLA loneliness scale is a widely used unidimensional measure of loneliness showing 
# significant correlation with other measures of loneliness (10). The UCLA loneliness scale 
# is scored with a 4-point Likert type scale with possible scores that range from 20 to 80. 
# Higher scores indicate higher levels of loneliness.

# Deol ES, Yamashita K, Elliott S, Malmstorm TK, Morley JE. Validation of the ALONE Scale: 
# A Clinical Measure of Loneliness. J Nutr Health Aging. 2022;26(5):421-424. 
# doi: 10.1007/s12603-022-1794-8. PMID: 35587752; PMCID: PMC9098380.

Loneliness <- df_complete %>%
  # filter Question is not empty
  filter(Questions != "") %>%
  # select relevant column
  select(participant, Questions, LonlinessQuestionsKeyResp.keys) %>%
  mutate(Questions = str_replace(Questions, "1-Never", ""), 
         Questions = str_replace(Questions, "2-Rarely", ""),
         Questions = str_replace(Questions, "3-Sometimes", ""),
         Questions = str_replace(Questions, "4-Often", ""))

# Reverse coding function
reverse_code <- function(value) {
  ifelse(value == 1, 4,
         ifelse(value == 2, 3,
                ifelse(value == 3, 2,
                       ifelse(value == 4, 1, NA))))
}

Loneliness <- Loneliness %>%
  mutate(Loneliness_r = reverse_code(LonlinessQuestionsKeyResp.keys))

# reverse coding 
Loneliness <- Loneliness %>%
  mutate(
    Loneliness_r = case_when(
      grepl("with the people around you\\?", Questions) ~ reverse_code(LonlinessQuestionsKeyResp.keys),
      grepl("a group of friends\\?", Questions) ~ reverse_code(Loneliness_r),
      grepl("in common with the people around you\\?", Questions) ~ reverse_code(Loneliness_r),
      grepl("feel outgoing and friendly\\?", Questions) ~ reverse_code(Loneliness_r),
      grepl("companionship when you want it\\?", Questions) ~ reverse_code(Loneliness_r),
      grepl("who really understand you\\?", Questions) ~ reverse_code(Loneliness_r),
      grepl("can talk to\\?", Questions) ~ reverse_code(Loneliness_r),
      grepl("you can turn to??", Questions) ~ reverse_code(Loneliness_r),
      TRUE ~ Loneliness_r
    )
  )
                         
# Calculate individual score
Loneliness_Score_df <- Loneliness %>%
  group_by(participant) %>%
  # Calculate individual score (sum)
  summarize(Loneliness_Score = sum(Loneliness_r, na.rm = TRUE))


final_df <- Loneliness_Score_df %>%
  merge(memory, by = "participant")

# Memory and loneliness correlation 
cor.test(final_df$memory_acc, final_df$Loneliness_Score)

ggplot(final_df, aes(x = Loneliness_Score,y =  memory_acc)) +
  #coord_cartesian(ylim = c(0.91, 0.98)) +
  geom_line(stat = "identity", size = 2) +  # line thickness
  geom_point(size = 5) 
labs(x = "Loneliness Score ", y = "Memory acc") +
  theme(panel.grid.major = element_blank(),panel.grid.minor = element_blank(), 
        panel.background = element_blank(), axis.line = element_line(colour = "black",size = .8),
        axis.text = element_text(size = 25), axis.title = element_text(size = 25),
        legend.text = element_text(size = 25))


# Randome fake number 

# Set the number of rows
num_rows <- 10

# Generate random participant IDs
participant_ids <- sample(10000:99999, num_rows, replace = TRUE)

# Generate Loneliness Scores
loneliness_scores <- sample(20:80, num_rows, replace = TRUE)

# Generate Memory Accuracy scores
memory_accuracy <- sample(0:100, num_rows, replace = TRUE)

# Create DataFrame
df <- data.frame(
  participant = participant_ids,
  Loneliness_Score = loneliness_scores,
  memory_acc = memory_accuracy
)

cor.test(df$memory_acc, df$Loneliness_Score)

ggplot(df, aes(x = Loneliness_Score,y =  memory_acc)) +
  #coord_cartesian(ylim = c(0.91, 0.98)) +
  geom_line(stat = "identity", size = 2) +  # line thickness
  geom_point(size = 5) 
labs(x = "Loneliness Score ", y = "Memory acc") +
  theme(panel.grid.major = element_blank(),panel.grid.minor = element_blank(), 
        panel.background = element_blank(), axis.line = element_line(colour = "black",size = .8),
        axis.text = element_text(size = 25), axis.title = element_text(size = 25),
        legend.text = element_text(size = 25))