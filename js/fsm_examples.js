var fsm_examples = {
  "DFA of AB": { "type": "DFA", "dfa": { "transitions": { "start": { "A": "s0" }, "s0": { "B": "s1" }, "s1": { "A": "s2" }, "s2": { "B": "s1" } }, "startState": "start", "acceptStates": ["s1"] }, "states": { "start": {}, "s0": { "top": 186, "left": 208 }, "s1": { "isAccept": true, "top": 296, "left": 231 }, "s2": { "top": 372, "left": 70 } }, "transitions": [{ "stateA": "start", "label": "A", "stateB": "s0" }, { "stateA": "s0", "label": "B", "stateB": "s1" }, { "stateA": "s1", "label": "A", "stateB": "s2" }, { "stateA": "s2", "label": "B", "stateB": "s1" }], "bulkTests": { "accept": "AB\nABAB\nABABAB", "reject": "\nA\nB\nABA\nBA\nBB\nABABB" } },

    "DFA_complex_example": {
      "type": "DFA",
      "dfa": {
        "transitions": {
          "start": {
            "0": "s0",
            "1": "s1"
          },
          "s0": {
            "0": "s2",
            "1": "s1"
          },
          "s1": {
            "0": "s0",
            "1": "s3"
          },
          "s2": {
            "0": "s4",
            "1": "s1"
          },
          "s3": {
            "0": "s2",
            "1": "s3"
          },
          "s4": {
            "0": "s4",
            "1": "s3"
          }
        },
        "startState": "start",
        "acceptStates": ["s3"]
      },
      "states": {
        "start": {},
        "s0": { "top": 100, "left": 100 },
        "s1": { "top": 100, "left": 300 },
        "s2": { "top": 300, "left": 100 },
        "s3": { "isAccept": true, "top": 300, "left": 300 },
        "s4": { "top": 200, "left": 200 }
      },
      "transitions": [
        { "stateA": "start", "label": "0", "stateB": "s0" },
        { "stateA": "start", "label": "1", "stateB": "s1" },
        { "stateA": "s0", "label": "0", "stateB": "s2" },
        { "stateA": "s0", "label": "1", "stateB": "s1" },
        { "stateA": "s1", "label": "0", "stateB": "s0" },
        { "stateA": "s1", "label": "1", "stateB": "s3" },
        { "stateA": "s2", "label": "0", "stateB": "s4" },
        { "stateA": "s2", "label": "1", "stateB": "s1" },
        { "stateA": "s3", "label": "0", "stateB": "s2" },
        { "stateA": "s3", "label": "1", "stateB": "s3" },
        { "stateA": "s4", "label": "0", "stateB": "s4" },
        { "stateA": "s4", "label": "1", "stateB": "s3" }
      ],
      "bulkTests": {
        "accept": "0101\n0111\n0000111\n010101010\n101010\n111111",
        "reject": "0\n1\n0001\n0110\n101\n110\n011\n100"
      }
    }
  
  





};
