/******************************* 
 * Prp Memory Experiment  *
 *******************************/


// store info about the experiment session:
let expName = 'PRP Memory Experiment ';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(WelcomeScreenRoutineBegin());
flowScheduler.add(WelcomeScreenRoutineEachFrame());
flowScheduler.add(WelcomeScreenRoutineEnd());
flowScheduler.add(consnetRoutineBegin());
flowScheduler.add(consnetRoutineEachFrame());
flowScheduler.add(consnetRoutineEnd());
flowScheduler.add(consent_2RoutineBegin());
flowScheduler.add(consent_2RoutineEachFrame());
flowScheduler.add(consent_2RoutineEnd());
flowScheduler.add(consent_3RoutineBegin());
flowScheduler.add(consent_3RoutineEachFrame());
flowScheduler.add(consent_3RoutineEnd());
flowScheduler.add(consent_4RoutineBegin());
flowScheduler.add(consent_4RoutineEachFrame());
flowScheduler.add(consent_4RoutineEnd());
flowScheduler.add(BlanksScreenRoutineBegin());
flowScheduler.add(BlanksScreenRoutineEachFrame());
flowScheduler.add(BlanksScreenRoutineEnd());
flowScheduler.add(InstructionsRoutineBegin());
flowScheduler.add(InstructionsRoutineEachFrame());
flowScheduler.add(InstructionsRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);



flowScheduler.add(math_instructionRoutineBegin());
flowScheduler.add(math_instructionRoutineEachFrame());
flowScheduler.add(math_instructionRoutineEnd());
const trials_4LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_4LoopBegin(trials_4LoopScheduler));
flowScheduler.add(trials_4LoopScheduler);
flowScheduler.add(trials_4LoopEnd);



flowScheduler.add(WaitScreenRoutineBegin());
flowScheduler.add(WaitScreenRoutineEachFrame());
flowScheduler.add(WaitScreenRoutineEnd());
flowScheduler.add(BlanksScreenRoutineBegin());
flowScheduler.add(BlanksScreenRoutineEachFrame());
flowScheduler.add(BlanksScreenRoutineEnd());
flowScheduler.add(Y_NScreenRoutineBegin());
flowScheduler.add(Y_NScreenRoutineEachFrame());
flowScheduler.add(Y_NScreenRoutineEnd());
flowScheduler.add(BlanksScreenRoutineBegin());
flowScheduler.add(BlanksScreenRoutineEachFrame());
flowScheduler.add(BlanksScreenRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);



flowScheduler.add(LSQInstructionsRoutineBegin());
flowScheduler.add(LSQInstructionsRoutineEachFrame());
flowScheduler.add(LSQInstructionsRoutineEnd());
const trials_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_3LoopBegin(trials_3LoopScheduler));
flowScheduler.add(trials_3LoopScheduler);
flowScheduler.add(trials_3LoopEnd);



flowScheduler.add(end_expRoutineBegin());
flowScheduler.add(end_expRoutineEachFrame());
flowScheduler.add(end_expRoutineEnd());
flowScheduler.add(debriefRoutineBegin());
flowScheduler.add(debriefRoutineEachFrame());
flowScheduler.add(debriefRoutineEnd());
flowScheduler.add(EndScreenRoutineBegin());
flowScheduler.add(EndScreenRoutineEachFrame());
flowScheduler.add(EndScreenRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'PRP Study Trial Word List.xlsx', 'path': 'PRP Study Trial Word List.xlsx'},
    {'name': 'MathProblemDatasheetPRPPsychopy.xlsx', 'path': 'MathProblemDatasheetPRPPsychopy.xlsx'},
    {'name': 'PRP Study Trial Word List.xlsx', 'path': 'PRP Study Trial Word List.xlsx'},
    {'name': 'LonlinessScaleQuestionairePsychopy4.xlsx', 'path': 'LonlinessScaleQuestionairePsychopy4.xlsx'},
    {'name': 'Debrief.png', 'path': 'Debrief.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var WelcomeScreenClock;
var TextWelcome;
var keyWelcome;
var consnetClock;
var text;
var key_resp_3;
var consent_2Clock;
var text_3;
var key_resp_4;
var consent_3Clock;
var text_4;
var key_resp_5;
var consent_4Clock;
var text_5;
var key_resp_6;
var BlanksScreenClock;
var textBlank;
var InstructionsClock;
var textInstructions;
var keyInstructions;
var StudyTrialsClock;
var textStudyTrial;
var math_instructionClock;
var text_9;
var key_resp_11;
var mathClock;
var text_2;
var math_key_resp;
var WaitScreenClock;
var textWaitScreen;
var keyWaitScreen;
var Y_NScreenClock;
var textY_NScreen;
var key_Y_NScreen;
var TestTrialsClock;
var textTestTrials;
var memory_test_key_resp;
var LSQInstructionsClock;
var TestInstruction;
var TestInstructionKey;
var LonlinessScaleQuestionsClock;
var LonlinessScaleQuestionsText;
var LonlinessQuestionsKeyResp;
var end_expClock;
var text_7;
var key_resp_9;
var debriefClock;
var image;
var text_6;
var key_resp_7;
var EndScreenClock;
var textEndScreen;
var key_resp_8;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "WelcomeScreen"
  WelcomeScreenClock = new util.Clock();
  TextWelcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'TextWelcome',
    text: 'Welcome to the Short-Term Memory Experiment\n\n[Press the space bar to continue.]',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  keyWelcome = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "consnet"
  consnetClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Consent Form.\n\nYou will be taking part in the experiment conducted by the Peer Research Project team at Mcgill Chinese Psychology Student Association. Please be advised that no part of this experiment is going to be published or distributed. Thank you for considering participating in this experiment. \n\nThe collection of the data for this research is used for educational purposes only.\n\n[Press the space bar to continue.]',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "consent_2"
  consent_2Clock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '\nThe experiment is going to study how personality is connected to long-term memory. You will be asked to answer a series of multiple-choice survey questions and perform a computer task using keyboard and mouse.\n\n\nRisks. This study involves no greater than minimal risk: you may become uncomfortable or tired from long sitting in front of a computer.  This study may involve risks that are unknown at this time.\n\n[Press the space bar to continue.]',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "consent_3"
  consent_3Clock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: "\nBenefit. You gain no direct benefits from participating. However, the researchers hope to learn how memory affects daily life. \n\nWithdrawal from the Study: You can stop participating in the study at any time, for any reason, if you so decide. You can do so by pressing 'ESC' key, and the study will be terminated. \n\n[Press the space bar to continue.]",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "consent_4"
  consent_4Clock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'Alternatives. Participation is voluntary and the only alternative is to not participate.\n\nConfidentiality:\nAll information you supply during the research will be held in confidence and your name will not appear in any report or publication or during data analysis performed by the research team.\n\nIf you consent to participate in this research, please type "Y" to continue to experiment.\n\nIf you do not consent to participate in the experiment, please type ESC (escape) key to terminate the experiment. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "BlanksScreen"
  BlanksScreenClock = new util.Clock();
  textBlank = new visual.TextStim({
    win: psychoJS.window,
    name: 'textBlank',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  textInstructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'textInstructions',
    text: '\n[Experiment Start] \n[Please read the instructions carefully] \n\nA series of words will appear, each word lasting for a short viewing time. Try to remember each word that is presented to you. You do not need to press any key. \n\n[Press the space bar to continue.]',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  keyInstructions = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "StudyTrials"
  StudyTrialsClock = new util.Clock();
  textStudyTrial = new visual.TextStim({
    win: psychoJS.window,
    name: 'textStudyTrial',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('White'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "math_instruction"
  math_instructionClock = new util.Clock();
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: 'You will see two math questions next. \nFor each question, please press the key corresponding with the correct answer. \n\n[Please press space bar when you are ready to start.] ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_11 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "math"
  mathClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  math_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "WaitScreen"
  WaitScreenClock = new util.Clock();
  textWaitScreen = new visual.TextStim({
    win: psychoJS.window,
    name: 'textWaitScreen',
    text: '[Press the space bar to continue.]',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  keyWaitScreen = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Y_NScreen"
  Y_NScreenClock = new util.Clock();
  textY_NScreen = new visual.TextStim({
    win: psychoJS.window,
    name: 'textY_NScreen',
    text: "The following words are testing your recall.\n\nPress 'Y' if you saw the word on the screen in the previous list. \n\nPress 'N' if you have NOT seen the word on the previous list.  \n\n[Press the space bar when you are ready to start.]",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_Y_NScreen = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TestTrials"
  TestTrialsClock = new util.Clock();
  textTestTrials = new visual.TextStim({
    win: psychoJS.window,
    name: 'textTestTrials',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  memory_test_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "LSQInstructions"
  LSQInstructionsClock = new util.Clock();
  TestInstruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'TestInstruction',
    text: 'For the following part of the experiment, you will be asked to answer a series of questions.\n\nPlease evaluate your answer on a scale of 1 (never) to 4 (often) and press the corresponding keys.\n\n\n[Please press "space" when ready to start.]',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  TestInstructionKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "LonlinessScaleQuestions"
  LonlinessScaleQuestionsClock = new util.Clock();
  LonlinessScaleQuestionsText = new visual.TextStim({
    win: psychoJS.window,
    name: 'LonlinessScaleQuestionsText',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  LonlinessQuestionsKeyResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end_exp"
  end_expClock = new util.Clock();
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: '[Please press the space bar to see the debrief form and contact information]. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "debrief"
  debriefClock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'Debrief.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1, 0.6],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'Please press space bar to continue. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "EndScreen"
  EndScreenClock = new util.Clock();
  textEndScreen = new visual.TextStim({
    win: psychoJS.window,
    name: 'textEndScreen',
    text: 'Thank you for your participation in this study.\n[Please press the space bar to exit. ]',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _keyWelcome_allKeys;
var WelcomeScreenComponents;
function WelcomeScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'WelcomeScreen' ---
    t = 0;
    WelcomeScreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('WelcomeScreen.started', globalClock.getTime());
    keyWelcome.keys = undefined;
    keyWelcome.rt = undefined;
    _keyWelcome_allKeys = [];
    // keep track of which components have finished
    WelcomeScreenComponents = [];
    WelcomeScreenComponents.push(TextWelcome);
    WelcomeScreenComponents.push(keyWelcome);
    
    WelcomeScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function WelcomeScreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'WelcomeScreen' ---
    // get current time
    t = WelcomeScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *TextWelcome* updates
    if (t >= 0.0 && TextWelcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TextWelcome.tStart = t;  // (not accounting for frame time here)
      TextWelcome.frameNStart = frameN;  // exact frame index
      
      TextWelcome.setAutoDraw(true);
    }
    
    
    // *keyWelcome* updates
    if (t >= 0.0 && keyWelcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyWelcome.tStart = t;  // (not accounting for frame time here)
      keyWelcome.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      keyWelcome.clock.reset();
      keyWelcome.start();
      keyWelcome.clearEvents();
    }
    
    if (keyWelcome.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyWelcome.getKeys({keyList: ['space'], waitRelease: false});
      _keyWelcome_allKeys = _keyWelcome_allKeys.concat(theseKeys);
      if (_keyWelcome_allKeys.length > 0) {
        keyWelcome.keys = _keyWelcome_allKeys[_keyWelcome_allKeys.length - 1].name;  // just the last key pressed
        keyWelcome.rt = _keyWelcome_allKeys[_keyWelcome_allKeys.length - 1].rt;
        keyWelcome.duration = _keyWelcome_allKeys[_keyWelcome_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    WelcomeScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WelcomeScreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'WelcomeScreen' ---
    WelcomeScreenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('WelcomeScreen.stopped', globalClock.getTime());
    keyWelcome.stop();
    // the Routine "WelcomeScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_3_allKeys;
var consnetComponents;
function consnetRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consnet' ---
    t = 0;
    consnetClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('consnet.started', globalClock.getTime());
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    consnetComponents = [];
    consnetComponents.push(text);
    consnetComponents.push(key_resp_3);
    
    consnetComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function consnetRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consnet' ---
    // get current time
    t = consnetClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_3.clock.reset();
      key_resp_3.start();
    }
    
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    consnetComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consnetRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consnet' ---
    consnetComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('consnet.stopped', globalClock.getTime());
    key_resp_3.stop();
    // the Routine "consnet" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_4_allKeys;
var consent_2Components;
function consent_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent_2' ---
    t = 0;
    consent_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('consent_2.started', globalClock.getTime());
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    consent_2Components = [];
    consent_2Components.push(text_3);
    consent_2Components.push(key_resp_4);
    
    consent_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function consent_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent_2' ---
    // get current time
    t = consent_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }
    
    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        key_resp_4.duration = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    consent_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consent_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent_2' ---
    consent_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('consent_2.stopped', globalClock.getTime());
    key_resp_4.stop();
    // the Routine "consent_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_5_allKeys;
var consent_3Components;
function consent_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent_3' ---
    t = 0;
    consent_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('consent_3.started', globalClock.getTime());
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    consent_3Components = [];
    consent_3Components.push(text_4);
    consent_3Components.push(key_resp_5);
    
    consent_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function consent_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent_3' ---
    // get current time
    t = consent_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }
    
    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        key_resp_5.duration = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    consent_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consent_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent_3' ---
    consent_3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('consent_3.stopped', globalClock.getTime());
    key_resp_5.stop();
    // the Routine "consent_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_6_allKeys;
var consent_4Components;
function consent_4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent_4' ---
    t = 0;
    consent_4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('consent_4.started', globalClock.getTime());
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    // keep track of which components have finished
    consent_4Components = [];
    consent_4Components.push(text_5);
    consent_4Components.push(key_resp_6);
    
    consent_4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function consent_4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent_4' ---
    // get current time
    t = consent_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }
    
    
    // *key_resp_6* updates
    if (t >= 0.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }
    
    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        key_resp_6.duration = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    consent_4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consent_4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent_4' ---
    consent_4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('consent_4.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_6.corr, level);
    }
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        psychoJS.experiment.addData('key_resp_6.duration', key_resp_6.duration);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    // the Routine "consent_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var BlanksScreenComponents;
function BlanksScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'BlanksScreen' ---
    t = 0;
    BlanksScreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('BlanksScreen.started', globalClock.getTime());
    // keep track of which components have finished
    BlanksScreenComponents = [];
    BlanksScreenComponents.push(textBlank);
    
    BlanksScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function BlanksScreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'BlanksScreen' ---
    // get current time
    t = BlanksScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textBlank* updates
    if (t >= 0.0 && textBlank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textBlank.tStart = t;  // (not accounting for frame time here)
      textBlank.frameNStart = frameN;  // exact frame index
      
      textBlank.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textBlank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textBlank.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    BlanksScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BlanksScreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'BlanksScreen' ---
    BlanksScreenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('BlanksScreen.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _keyInstructions_allKeys;
var InstructionsComponents;
function InstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions' ---
    t = 0;
    InstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instructions.started', globalClock.getTime());
    keyInstructions.keys = undefined;
    keyInstructions.rt = undefined;
    _keyInstructions_allKeys = [];
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(textInstructions);
    InstructionsComponents.push(keyInstructions);
    
    InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function InstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions' ---
    // get current time
    t = InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textInstructions* updates
    if (t >= 0.0 && textInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textInstructions.tStart = t;  // (not accounting for frame time here)
      textInstructions.frameNStart = frameN;  // exact frame index
      
      textInstructions.setAutoDraw(true);
    }
    
    
    // *keyInstructions* updates
    if (t >= 0.0 && keyInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyInstructions.tStart = t;  // (not accounting for frame time here)
      keyInstructions.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyInstructions.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyInstructions.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyInstructions.clearEvents(); });
    }
    
    if (keyInstructions.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyInstructions.getKeys({keyList: ['space'], waitRelease: false});
      _keyInstructions_allKeys = _keyInstructions_allKeys.concat(theseKeys);
      if (_keyInstructions_allKeys.length > 0) {
        keyInstructions.keys = _keyInstructions_allKeys[_keyInstructions_allKeys.length - 1].name;  // just the last key pressed
        keyInstructions.rt = _keyInstructions_allKeys[_keyInstructions_allKeys.length - 1].rt;
        keyInstructions.duration = _keyInstructions_allKeys[_keyInstructions_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions' ---
    InstructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(keyInstructions.corr, level);
    }
    psychoJS.experiment.addData('keyInstructions.keys', keyInstructions.keys);
    if (typeof keyInstructions.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyInstructions.rt', keyInstructions.rt);
        psychoJS.experiment.addData('keyInstructions.duration', keyInstructions.duration);
        routineTimer.reset();
        }
    
    keyInstructions.stop();
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'PRP Study Trial Word List.xlsx', '0:6'),
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(StudyTrialsRoutineBegin(snapshot));
      trialsLoopScheduler.add(StudyTrialsRoutineEachFrame());
      trialsLoopScheduler.add(StudyTrialsRoutineEnd(snapshot));
      trialsLoopScheduler.add(BlanksScreenRoutineBegin(snapshot));
      trialsLoopScheduler.add(BlanksScreenRoutineEachFrame());
      trialsLoopScheduler.add(BlanksScreenRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_4;
function trials_4LoopBegin(trials_4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'MathProblemDatasheetPRPPsychopy.xlsx',
      seed: undefined, name: 'trials_4'
    });
    psychoJS.experiment.addLoop(trials_4); // add the loop to the experiment
    currentLoop = trials_4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_4.forEach(function() {
      snapshot = trials_4.getSnapshot();
    
      trials_4LoopScheduler.add(importConditions(snapshot));
      trials_4LoopScheduler.add(mathRoutineBegin(snapshot));
      trials_4LoopScheduler.add(mathRoutineEachFrame());
      trials_4LoopScheduler.add(mathRoutineEnd(snapshot));
      trials_4LoopScheduler.add(BlanksScreenRoutineBegin(snapshot));
      trials_4LoopScheduler.add(BlanksScreenRoutineEachFrame());
      trials_4LoopScheduler.add(BlanksScreenRoutineEnd(snapshot));
      trials_4LoopScheduler.add(trials_4LoopEndIteration(trials_4LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_4LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_4);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_4LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'PRP Study Trial Word List.xlsx',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_2.forEach(function() {
      snapshot = trials_2.getSnapshot();
    
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(TestTrialsRoutineBegin(snapshot));
      trials_2LoopScheduler.add(TestTrialsRoutineEachFrame());
      trials_2LoopScheduler.add(TestTrialsRoutineEnd(snapshot));
      trials_2LoopScheduler.add(BlanksScreenRoutineBegin(snapshot));
      trials_2LoopScheduler.add(BlanksScreenRoutineEachFrame());
      trials_2LoopScheduler.add(BlanksScreenRoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_3;
function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'LonlinessScaleQuestionairePsychopy4.xlsx',
      seed: undefined, name: 'trials_3'
    });
    psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
    currentLoop = trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_3.forEach(function() {
      snapshot = trials_3.getSnapshot();
    
      trials_3LoopScheduler.add(importConditions(snapshot));
      trials_3LoopScheduler.add(BlanksScreenRoutineBegin(snapshot));
      trials_3LoopScheduler.add(BlanksScreenRoutineEachFrame());
      trials_3LoopScheduler.add(BlanksScreenRoutineEnd(snapshot));
      trials_3LoopScheduler.add(LonlinessScaleQuestionsRoutineBegin(snapshot));
      trials_3LoopScheduler.add(LonlinessScaleQuestionsRoutineEachFrame());
      trials_3LoopScheduler.add(LonlinessScaleQuestionsRoutineEnd(snapshot));
      trials_3LoopScheduler.add(trials_3LoopEndIteration(trials_3LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var StudyTrialsComponents;
function StudyTrialsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'StudyTrials' ---
    t = 0;
    StudyTrialsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('StudyTrials.started', globalClock.getTime());
    textStudyTrial.setText(WordItem);
    // keep track of which components have finished
    StudyTrialsComponents = [];
    StudyTrialsComponents.push(textStudyTrial);
    
    StudyTrialsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function StudyTrialsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'StudyTrials' ---
    // get current time
    t = StudyTrialsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textStudyTrial* updates
    if (t >= 0.0 && textStudyTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textStudyTrial.tStart = t;  // (not accounting for frame time here)
      textStudyTrial.frameNStart = frameN;  // exact frame index
      
      textStudyTrial.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textStudyTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textStudyTrial.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    StudyTrialsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function StudyTrialsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'StudyTrials' ---
    StudyTrialsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('StudyTrials.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_11_allKeys;
var math_instructionComponents;
function math_instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'math_instruction' ---
    t = 0;
    math_instructionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('math_instruction.started', globalClock.getTime());
    key_resp_11.keys = undefined;
    key_resp_11.rt = undefined;
    _key_resp_11_allKeys = [];
    // keep track of which components have finished
    math_instructionComponents = [];
    math_instructionComponents.push(text_9);
    math_instructionComponents.push(key_resp_11);
    
    math_instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function math_instructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'math_instruction' ---
    // get current time
    t = math_instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_9* updates
    if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }
    
    
    // *key_resp_11* updates
    if (t >= 0.0 && key_resp_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_11.tStart = t;  // (not accounting for frame time here)
      key_resp_11.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_11.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.clearEvents(); });
    }
    
    if (key_resp_11.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_11.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_11_allKeys = _key_resp_11_allKeys.concat(theseKeys);
      if (_key_resp_11_allKeys.length > 0) {
        key_resp_11.keys = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].name;  // just the last key pressed
        key_resp_11.rt = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].rt;
        key_resp_11.duration = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    math_instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function math_instructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'math_instruction' ---
    math_instructionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('math_instruction.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_11.corr, level);
    }
    psychoJS.experiment.addData('key_resp_11.keys', key_resp_11.keys);
    if (typeof key_resp_11.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_11.rt', key_resp_11.rt);
        psychoJS.experiment.addData('key_resp_11.duration', key_resp_11.duration);
        routineTimer.reset();
        }
    
    key_resp_11.stop();
    // the Routine "math_instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _math_key_resp_allKeys;
var mathComponents;
function mathRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'math' ---
    t = 0;
    mathClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('math.started', globalClock.getTime());
    text_2.setText(MathProblem);
    math_key_resp.keys = undefined;
    math_key_resp.rt = undefined;
    _math_key_resp_allKeys = [];
    // keep track of which components have finished
    mathComponents = [];
    mathComponents.push(text_2);
    mathComponents.push(math_key_resp);
    
    mathComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function mathRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'math' ---
    // get current time
    t = mathClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // *math_key_resp* updates
    if (t >= 0.0 && math_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      math_key_resp.tStart = t;  // (not accounting for frame time here)
      math_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { math_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { math_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { math_key_resp.clearEvents(); });
    }
    
    if (math_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = math_key_resp.getKeys({keyList: ['t', 'f'], waitRelease: false});
      _math_key_resp_allKeys = _math_key_resp_allKeys.concat(theseKeys);
      if (_math_key_resp_allKeys.length > 0) {
        math_key_resp.keys = _math_key_resp_allKeys[_math_key_resp_allKeys.length - 1].name;  // just the last key pressed
        math_key_resp.rt = _math_key_resp_allKeys[_math_key_resp_allKeys.length - 1].rt;
        math_key_resp.duration = _math_key_resp_allKeys[_math_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    mathComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function mathRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'math' ---
    mathComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('math.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(math_key_resp.corr, level);
    }
    psychoJS.experiment.addData('math_key_resp.keys', math_key_resp.keys);
    if (typeof math_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('math_key_resp.rt', math_key_resp.rt);
        psychoJS.experiment.addData('math_key_resp.duration', math_key_resp.duration);
        routineTimer.reset();
        }
    
    math_key_resp.stop();
    // the Routine "math" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _keyWaitScreen_allKeys;
var WaitScreenComponents;
function WaitScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'WaitScreen' ---
    t = 0;
    WaitScreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('WaitScreen.started', globalClock.getTime());
    keyWaitScreen.keys = undefined;
    keyWaitScreen.rt = undefined;
    _keyWaitScreen_allKeys = [];
    // keep track of which components have finished
    WaitScreenComponents = [];
    WaitScreenComponents.push(textWaitScreen);
    WaitScreenComponents.push(keyWaitScreen);
    
    WaitScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function WaitScreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'WaitScreen' ---
    // get current time
    t = WaitScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textWaitScreen* updates
    if (t >= 0.0 && textWaitScreen.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textWaitScreen.tStart = t;  // (not accounting for frame time here)
      textWaitScreen.frameNStart = frameN;  // exact frame index
      
      textWaitScreen.setAutoDraw(true);
    }
    
    
    // *keyWaitScreen* updates
    if (t >= 0.0 && keyWaitScreen.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyWaitScreen.tStart = t;  // (not accounting for frame time here)
      keyWaitScreen.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyWaitScreen.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyWaitScreen.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyWaitScreen.clearEvents(); });
    }
    
    if (keyWaitScreen.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyWaitScreen.getKeys({keyList: ['space'], waitRelease: false});
      _keyWaitScreen_allKeys = _keyWaitScreen_allKeys.concat(theseKeys);
      if (_keyWaitScreen_allKeys.length > 0) {
        keyWaitScreen.keys = _keyWaitScreen_allKeys[_keyWaitScreen_allKeys.length - 1].name;  // just the last key pressed
        keyWaitScreen.rt = _keyWaitScreen_allKeys[_keyWaitScreen_allKeys.length - 1].rt;
        keyWaitScreen.duration = _keyWaitScreen_allKeys[_keyWaitScreen_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    WaitScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WaitScreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'WaitScreen' ---
    WaitScreenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('WaitScreen.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(keyWaitScreen.corr, level);
    }
    psychoJS.experiment.addData('keyWaitScreen.keys', keyWaitScreen.keys);
    if (typeof keyWaitScreen.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyWaitScreen.rt', keyWaitScreen.rt);
        psychoJS.experiment.addData('keyWaitScreen.duration', keyWaitScreen.duration);
        routineTimer.reset();
        }
    
    keyWaitScreen.stop();
    // the Routine "WaitScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_Y_NScreen_allKeys;
var Y_NScreenComponents;
function Y_NScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Y_NScreen' ---
    t = 0;
    Y_NScreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Y_NScreen.started', globalClock.getTime());
    key_Y_NScreen.keys = undefined;
    key_Y_NScreen.rt = undefined;
    _key_Y_NScreen_allKeys = [];
    // keep track of which components have finished
    Y_NScreenComponents = [];
    Y_NScreenComponents.push(textY_NScreen);
    Y_NScreenComponents.push(key_Y_NScreen);
    
    Y_NScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Y_NScreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Y_NScreen' ---
    // get current time
    t = Y_NScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textY_NScreen* updates
    if (t >= 0.0 && textY_NScreen.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textY_NScreen.tStart = t;  // (not accounting for frame time here)
      textY_NScreen.frameNStart = frameN;  // exact frame index
      
      textY_NScreen.setAutoDraw(true);
    }
    
    
    // *key_Y_NScreen* updates
    if (t >= 0.0 && key_Y_NScreen.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_Y_NScreen.tStart = t;  // (not accounting for frame time here)
      key_Y_NScreen.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_Y_NScreen.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_Y_NScreen.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_Y_NScreen.clearEvents(); });
    }
    
    if (key_Y_NScreen.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_Y_NScreen.getKeys({keyList: ['space'], waitRelease: false});
      _key_Y_NScreen_allKeys = _key_Y_NScreen_allKeys.concat(theseKeys);
      if (_key_Y_NScreen_allKeys.length > 0) {
        key_Y_NScreen.keys = _key_Y_NScreen_allKeys[_key_Y_NScreen_allKeys.length - 1].name;  // just the last key pressed
        key_Y_NScreen.rt = _key_Y_NScreen_allKeys[_key_Y_NScreen_allKeys.length - 1].rt;
        key_Y_NScreen.duration = _key_Y_NScreen_allKeys[_key_Y_NScreen_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Y_NScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Y_NScreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Y_NScreen' ---
    Y_NScreenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Y_NScreen.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_Y_NScreen.corr, level);
    }
    psychoJS.experiment.addData('key_Y_NScreen.keys', key_Y_NScreen.keys);
    if (typeof key_Y_NScreen.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_Y_NScreen.rt', key_Y_NScreen.rt);
        psychoJS.experiment.addData('key_Y_NScreen.duration', key_Y_NScreen.duration);
        routineTimer.reset();
        }
    
    key_Y_NScreen.stop();
    // the Routine "Y_NScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _memory_test_key_resp_allKeys;
var TestTrialsComponents;
function TestTrialsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TestTrials' ---
    t = 0;
    TestTrialsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('TestTrials.started', globalClock.getTime());
    textTestTrials.setText(WordItem);
    memory_test_key_resp.keys = undefined;
    memory_test_key_resp.rt = undefined;
    _memory_test_key_resp_allKeys = [];
    // keep track of which components have finished
    TestTrialsComponents = [];
    TestTrialsComponents.push(textTestTrials);
    TestTrialsComponents.push(memory_test_key_resp);
    
    TestTrialsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function TestTrialsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TestTrials' ---
    // get current time
    t = TestTrialsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textTestTrials* updates
    if (t >= 0.0 && textTestTrials.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textTestTrials.tStart = t;  // (not accounting for frame time here)
      textTestTrials.frameNStart = frameN;  // exact frame index
      
      textTestTrials.setAutoDraw(true);
    }
    
    
    // *memory_test_key_resp* updates
    if (t >= 0.0 && memory_test_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      memory_test_key_resp.tStart = t;  // (not accounting for frame time here)
      memory_test_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { memory_test_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { memory_test_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { memory_test_key_resp.clearEvents(); });
    }
    
    if (memory_test_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = memory_test_key_resp.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _memory_test_key_resp_allKeys = _memory_test_key_resp_allKeys.concat(theseKeys);
      if (_memory_test_key_resp_allKeys.length > 0) {
        memory_test_key_resp.keys = _memory_test_key_resp_allKeys[_memory_test_key_resp_allKeys.length - 1].name;  // just the last key pressed
        memory_test_key_resp.rt = _memory_test_key_resp_allKeys[_memory_test_key_resp_allKeys.length - 1].rt;
        memory_test_key_resp.duration = _memory_test_key_resp_allKeys[_memory_test_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    TestTrialsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TestTrialsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TestTrials' ---
    TestTrialsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('TestTrials.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(memory_test_key_resp.corr, level);
    }
    psychoJS.experiment.addData('memory_test_key_resp.keys', memory_test_key_resp.keys);
    if (typeof memory_test_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('memory_test_key_resp.rt', memory_test_key_resp.rt);
        psychoJS.experiment.addData('memory_test_key_resp.duration', memory_test_key_resp.duration);
        routineTimer.reset();
        }
    
    memory_test_key_resp.stop();
    // the Routine "TestTrials" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _TestInstructionKey_allKeys;
var LSQInstructionsComponents;
function LSQInstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'LSQInstructions' ---
    t = 0;
    LSQInstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('LSQInstructions.started', globalClock.getTime());
    TestInstructionKey.keys = undefined;
    TestInstructionKey.rt = undefined;
    _TestInstructionKey_allKeys = [];
    // keep track of which components have finished
    LSQInstructionsComponents = [];
    LSQInstructionsComponents.push(TestInstruction);
    LSQInstructionsComponents.push(TestInstructionKey);
    
    LSQInstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function LSQInstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'LSQInstructions' ---
    // get current time
    t = LSQInstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *TestInstruction* updates
    if (t >= 0.0 && TestInstruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TestInstruction.tStart = t;  // (not accounting for frame time here)
      TestInstruction.frameNStart = frameN;  // exact frame index
      
      TestInstruction.setAutoDraw(true);
    }
    
    
    // *TestInstructionKey* updates
    if (t >= 0.0 && TestInstructionKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TestInstructionKey.tStart = t;  // (not accounting for frame time here)
      TestInstructionKey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { TestInstructionKey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { TestInstructionKey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { TestInstructionKey.clearEvents(); });
    }
    
    if (TestInstructionKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = TestInstructionKey.getKeys({keyList: ['space'], waitRelease: false});
      _TestInstructionKey_allKeys = _TestInstructionKey_allKeys.concat(theseKeys);
      if (_TestInstructionKey_allKeys.length > 0) {
        TestInstructionKey.keys = _TestInstructionKey_allKeys[_TestInstructionKey_allKeys.length - 1].name;  // just the last key pressed
        TestInstructionKey.rt = _TestInstructionKey_allKeys[_TestInstructionKey_allKeys.length - 1].rt;
        TestInstructionKey.duration = _TestInstructionKey_allKeys[_TestInstructionKey_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    LSQInstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function LSQInstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'LSQInstructions' ---
    LSQInstructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('LSQInstructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(TestInstructionKey.corr, level);
    }
    psychoJS.experiment.addData('TestInstructionKey.keys', TestInstructionKey.keys);
    if (typeof TestInstructionKey.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('TestInstructionKey.rt', TestInstructionKey.rt);
        psychoJS.experiment.addData('TestInstructionKey.duration', TestInstructionKey.duration);
        routineTimer.reset();
        }
    
    TestInstructionKey.stop();
    // the Routine "LSQInstructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _LonlinessQuestionsKeyResp_allKeys;
var LonlinessScaleQuestionsComponents;
function LonlinessScaleQuestionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'LonlinessScaleQuestions' ---
    t = 0;
    LonlinessScaleQuestionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('LonlinessScaleQuestions.started', globalClock.getTime());
    LonlinessScaleQuestionsText.setText(Questions);
    LonlinessQuestionsKeyResp.keys = undefined;
    LonlinessQuestionsKeyResp.rt = undefined;
    _LonlinessQuestionsKeyResp_allKeys = [];
    // keep track of which components have finished
    LonlinessScaleQuestionsComponents = [];
    LonlinessScaleQuestionsComponents.push(LonlinessScaleQuestionsText);
    LonlinessScaleQuestionsComponents.push(LonlinessQuestionsKeyResp);
    
    LonlinessScaleQuestionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function LonlinessScaleQuestionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'LonlinessScaleQuestions' ---
    // get current time
    t = LonlinessScaleQuestionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *LonlinessScaleQuestionsText* updates
    if (t >= 0.0 && LonlinessScaleQuestionsText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      LonlinessScaleQuestionsText.tStart = t;  // (not accounting for frame time here)
      LonlinessScaleQuestionsText.frameNStart = frameN;  // exact frame index
      
      LonlinessScaleQuestionsText.setAutoDraw(true);
    }
    
    
    // *LonlinessQuestionsKeyResp* updates
    if (t >= 0.0 && LonlinessQuestionsKeyResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      LonlinessQuestionsKeyResp.tStart = t;  // (not accounting for frame time here)
      LonlinessQuestionsKeyResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { LonlinessQuestionsKeyResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { LonlinessQuestionsKeyResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { LonlinessQuestionsKeyResp.clearEvents(); });
    }
    
    if (LonlinessQuestionsKeyResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = LonlinessQuestionsKeyResp.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _LonlinessQuestionsKeyResp_allKeys = _LonlinessQuestionsKeyResp_allKeys.concat(theseKeys);
      if (_LonlinessQuestionsKeyResp_allKeys.length > 0) {
        LonlinessQuestionsKeyResp.keys = _LonlinessQuestionsKeyResp_allKeys[_LonlinessQuestionsKeyResp_allKeys.length - 1].name;  // just the last key pressed
        LonlinessQuestionsKeyResp.rt = _LonlinessQuestionsKeyResp_allKeys[_LonlinessQuestionsKeyResp_allKeys.length - 1].rt;
        LonlinessQuestionsKeyResp.duration = _LonlinessQuestionsKeyResp_allKeys[_LonlinessQuestionsKeyResp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    LonlinessScaleQuestionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function LonlinessScaleQuestionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'LonlinessScaleQuestions' ---
    LonlinessScaleQuestionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('LonlinessScaleQuestions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(LonlinessQuestionsKeyResp.corr, level);
    }
    psychoJS.experiment.addData('LonlinessQuestionsKeyResp.keys', LonlinessQuestionsKeyResp.keys);
    if (typeof LonlinessQuestionsKeyResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('LonlinessQuestionsKeyResp.rt', LonlinessQuestionsKeyResp.rt);
        psychoJS.experiment.addData('LonlinessQuestionsKeyResp.duration', LonlinessQuestionsKeyResp.duration);
        routineTimer.reset();
        }
    
    LonlinessQuestionsKeyResp.stop();
    // the Routine "LonlinessScaleQuestions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_9_allKeys;
var end_expComponents;
function end_expRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end_exp' ---
    t = 0;
    end_expClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('end_exp.started', globalClock.getTime());
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    // keep track of which components have finished
    end_expComponents = [];
    end_expComponents.push(text_7);
    end_expComponents.push(key_resp_9);
    
    end_expComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function end_expRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end_exp' ---
    // get current time
    t = end_expClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }
    
    
    // *key_resp_9* updates
    if (t >= 0.0 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_9.tStart = t;  // (not accounting for frame time here)
      key_resp_9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.clearEvents(); });
    }
    
    if (key_resp_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_9.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
      if (_key_resp_9_allKeys.length > 0) {
        key_resp_9.keys = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].name;  // just the last key pressed
        key_resp_9.rt = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].rt;
        key_resp_9.duration = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    end_expComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_expRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end_exp' ---
    end_expComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('end_exp.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_9.corr, level);
    }
    psychoJS.experiment.addData('key_resp_9.keys', key_resp_9.keys);
    if (typeof key_resp_9.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_9.rt', key_resp_9.rt);
        psychoJS.experiment.addData('key_resp_9.duration', key_resp_9.duration);
        routineTimer.reset();
        }
    
    key_resp_9.stop();
    // the Routine "end_exp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_7_allKeys;
var debriefComponents;
function debriefRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'debrief' ---
    t = 0;
    debriefClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('debrief.started', globalClock.getTime());
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    // keep track of which components have finished
    debriefComponents = [];
    debriefComponents.push(image);
    debriefComponents.push(text_6);
    debriefComponents.push(key_resp_7);
    
    debriefComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function debriefRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'debrief' ---
    // get current time
    t = debriefClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }
    
    
    // *key_resp_7* updates
    if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }
    
    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        key_resp_7.duration = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    debriefComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function debriefRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'debrief' ---
    debriefComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('debrief.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_7.corr, level);
    }
    psychoJS.experiment.addData('key_resp_7.keys', key_resp_7.keys);
    if (typeof key_resp_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_7.rt', key_resp_7.rt);
        psychoJS.experiment.addData('key_resp_7.duration', key_resp_7.duration);
        routineTimer.reset();
        }
    
    key_resp_7.stop();
    // the Routine "debrief" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_8_allKeys;
var EndScreenComponents;
function EndScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'EndScreen' ---
    t = 0;
    EndScreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('EndScreen.started', globalClock.getTime());
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    // keep track of which components have finished
    EndScreenComponents = [];
    EndScreenComponents.push(textEndScreen);
    EndScreenComponents.push(key_resp_8);
    
    EndScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function EndScreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'EndScreen' ---
    // get current time
    t = EndScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textEndScreen* updates
    if (t >= 0.0 && textEndScreen.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textEndScreen.tStart = t;  // (not accounting for frame time here)
      textEndScreen.frameNStart = frameN;  // exact frame index
      
      textEndScreen.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textEndScreen.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textEndScreen.setAutoDraw(false);
    }
    
    // *key_resp_8* updates
    if (t >= 0.0 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_8.tStart = t;  // (not accounting for frame time here)
      key_resp_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
    }
    
    if (key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_8.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
      if (_key_resp_8_allKeys.length > 0) {
        key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
        key_resp_8.duration = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    EndScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndScreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'EndScreen' ---
    EndScreenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('EndScreen.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_8.corr, level);
    }
    psychoJS.experiment.addData('key_resp_8.keys', key_resp_8.keys);
    if (typeof key_resp_8.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_8.rt', key_resp_8.rt);
        psychoJS.experiment.addData('key_resp_8.duration', key_resp_8.duration);
        routineTimer.reset();
        }
    
    key_resp_8.stop();
    // the Routine "EndScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
