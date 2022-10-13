var storyContent = {
    "inkVersion": 19,
    "root": [
        [{
                "->": "character_select"
            },
            ["done", {
                "#f": 5,
                "#n": "g-0"
            }], null
        ], "done", {
            "reset_game": [{
                "#": "CLEAR"
            }, {
                "#f": 1
            }],
            "character_select": [
                ["ev", {
                    "f()": "reset_game"
                }, "out", "/ev", "\n", {
                    "#": "IMAGE: images/collage/choose_character.jpg"
                }, "^Your character is a traveler passionate about finding special and hidden places from the eyes of the majority. Select a character to progress through the story.", "\n", "ev", "str", "^Male", "/str", "/ev", {
                    "*": ".^.c-0",
                    "flg": 4
                }, "ev", "str", "^Female", "/str", "/ev", {
                    "*": ".^.c-1",
                    "flg": 4
                }, {
                    "c-0": ["\n", "ev", 1, "/ev", {
                        "VAR=": "sex",
                        "re": true
                    }, "ev", "str", "^her", "/str", "/ev", {
                        "VAR=": "Pronoun_1",
                        "re": true
                    }, "ev", "str", "^she", "/str", "/ev", {
                        "VAR=": "Pronoun_2",
                        "re": true
                    }, "ev", {
                        "VAR?": "Pronoun_1"
                    }, "/ev", {
                        "VAR=": "Pronoun_3",
                        "re": true
                    }, {
                        "->": ".^.^.g-0"
                    }, {
                        "#f": 5
                    }],
                    "c-1": ["\n", "ev", "str", "^Young Man", "/str", "/ev", {
                        "VAR=": "Mayor_Child",
                        "re": true
                    }, {
                        "->": ".^.^.g-0"
                    }, {
                        "#f": 5
                    }],
                    "g-0": [{
                        "->": "cave"
                    }, {
                        "#f": 5
                    }]
                }], {
                    "#f": 1
                }
            ],
            "cave": [
                ["ev", {
                        "VAR?": "sex"
                    }, "/ev", [{
                        "->": ".^.b",
                        "c": true
                    }, {
                        "b": ["\n", {
                            "#": "IMAGE: images/your_character_m.jpg"
                        }, {
                            "->": "cave.0.5"
                        }, null]
                    }],
                    [{
                        "->": ".^.b"
                    }, {
                        "b": ["\n", {
                            "#": "IMAGE: images/your_character_w.jpg"
                        }, {
                            "->": "cave.0.5"
                        }, null]
                    }], "nop", "\n", "^It’s a sunny spring morning. You woke up in a good mood and with a lot of energy, because today is the day when you will roam the mountains to find something special. Who knows, maybe luck will be on your side today.", "\n", "^You have arrived at your destination and started wandering around. After some time, you decided to go higher and finally began to see something unusual. There was a contrasting spot in the snow-white landscape of the mountains, so you went there.", "\n", {
                        "#": "IMAGE: images/collage/enter_yes_no.jpg"
                    }, "^You found a cave, but it doesn't look like a normal one, at its end you could see a light, as if it was passing through another part of the mountain.", "\n", "^Enter the cave ?", "\n", "ev", "str", "^Yes", "/str", "/ev", {
                        "*": ".^.c-0",
                        "flg": 4
                    }, "ev", "str", "^No", "/str", "/ev", {
                        "*": ".^.c-1",
                        "flg": 4
                    }, {
                        "c-0": ["\n", {
                            "#": "IMAGE: images/cave.jpg"
                        }, "^You took the risk, entered the cave, and proceeded to move to the light. Reaching the end of the cave you expected to see the source of the brightness, a hole in the mountain, or maybe someone who settled there and decided to make a bonfire, but you did not foresee e a magnificent view.In front of your eyes has been a city of majestic beauty.", "\n", {
                            "#": "IMAGE: images/collage/city_poppy.jpg"
                        }, "^It was surrounded by the mountains with red poppies laid at its feet and above it a blue sky looked down on all this beauty. The flowers joined in a field between you and the path to this city. You couldn't believe your eyes, on the other side of the cave where you came from are snowy mountains and the weather is quite cold, but here is the embodiment of summer with a clear blue sky that was certainly different from the one you have seen before entering.", "\n", "ev", "str", "^", "/str", "/ev", {
                            "->": "Cave"
                        }, {
                            "#f": 5
                        }],
                        "c-1": ["\n", {
                            "#": "IMAGE: images/no_cave.jpg"
                        }, "^You decided to not take the risk. Who knows what might be at the end of this cave, so you thought that is better to proceed to roam the mountain, and maybe you will find something interesting and less dangerously looking.", "\n", "^Unfortunately, there was nothing interesting, so you started to go higher and deeper through the mountains. It starts getting late, but you are too stubborn to stop here so you decided to change the approach and take the risk now. You saw a path, it was a dangerous one, because of its narrowness and high position, but you felt like you had no other choice than to pass it, you had to reach the other cliff.", "\n", "^You started to pass it and almost got to its end. You take one more step but the rock under your feet breaks and you got down with its debris. In a panic, you tried to grab onto something, in order to save yourself from falling, but your hands helplessly cut through the air…", "\n", "^You fell off the cliff…The mountain’s snow started to get red under your body, its warmth faded away with every drop of your blood…", "\n", "^This is the end of your journey…", "\n", ["ev", "str", "^Try Again", "/str", "/ev", {
                            "*": ".^.c-0",
                            "flg": 4
                        }, "ev", "str", "^Give Up", "/str", "/ev", {
                            "*": ".^.c-1",
                            "flg": 4
                        }, {
                            "c-0": ["\n", {
                                "->": "character_select"
                            }, {
                                "#f": 5
                            }],
                            "c-1": ["\n", {
                                "#": "IMAGE: images/game_over.jpg"
                            }, "done", {
                                "#f": 5
                            }]
                        }], {
                            "#f": 5
                        }]
                    }
                ], {
                    "#f": 1
                }
            ],
            "Cave": [{
                    "temp=": "previousChoice"
                },
                ["ev", {
                    "VAR?": "previousChoice"
                }, "str", "^", "/str", "==", "/ev", [{
                    "->": ".^.b",
                    "c": true
                }, {
                    "b": ["^ ", {
                        "->": "Cave.1.8"
                    }, null]
                }], "nop", "\n", "ev", "str", "^Go to the poppy field.", "/str", "/ev", {
                    "*": ".^.c-0",
                    "flg": 20
                }, "ev", "str", "^Go to the city.", "/str", "/ev", {
                    "*": ".^.c-1",
                    "flg": 20
                }, {
                    "c-0": ["\n", {
                        "#": "IMAGE: images/poppy_f.jpg"
                    }, "^You decided to admire the beauty of the red poppies. They were bathing in the light of the sunset. You have seen plenty of poppies in your life, but none of them were so red, redder than the roses in their full bloom, redder than the blood. You wondered if what you have seen was an illusion created by the rays of the sunset or it is their singularity.", "\n", "^You were mesmerized by these flowers, but it didn’t calm your curiosity about the city.", "\n", "ev", "str", "^p", "/str", "/ev", {
                        "->": "Cave"
                    }, {
                        "#f": 5
                    }],
                    "c-1": ["\n", "^You have entered the city. Apparently, there was something similar to a festival going on. You have seen that the streets and houses are festively decorated with garlands and flowers, also there have been set up multiple stalls with different stuff. People are having fun, dancing and surprisingly riding horses, you rarely see horse riders on the city’s streets in your homeland and in other countries you have visited.", "\n", {
                        "#": "IMAGE: images/collage/choose_direction.jpg"
                    }, "^You have looked in the face of every passing citizen and on each ones face you have seen a smile, everyone looked so happy that it makes you alarmed. How can a city exist inside a mountain? And how it can be so prosperous? It makes no sense.", "\n", {
                        "->": "City"
                    }, {
                        "#f": 5
                    }]
                }], {
                    "#f": 1
                }
            ],
            "City": [
                ["^In order to explore the city and find more about it choose where to go.", "\n", "ev", "str", "^Right", "/str", "/ev", {
                    "*": ".^.c-0",
                    "flg": 20
                }, "ev", "str", "^Left", "/str", "/ev", {
                    "*": ".^.c-1",
                    "flg": 20
                }, "ev", "str", "^Straight", "/str", "/ev", {
                    "*": ".^.c-2",
                    "flg": 20
                }, {
                    "c-0": ["\n", {
                        "#": "IMAGE: images/city_r.jpg"
                    }, "^Here you see a couple who tries to calm down their crying child, a man with a blank look in his red eyes and a path to the museum (pointed by a signpost).", "\n", {
                        "->": "City.Right"
                    }, {
                        "#f": 5
                    }],
                    "c-1": ["\n", "^You walked on the left road.", "\n", {
                        "#": "IMAGE: images/city_le.jpg"
                    }, "^Here you see a woman who sells different types of food, she looks very lively and talks actively with other people.", "\n", "^On the other hand there is a painter with a sad expression on his face. He draws children who play in front of a flower shop.", "\n", "ev", "str", "^", "/str", "/ev", {
                        "->": "City.Left"
                    }, {
                        "#f": 5
                    }],
                    "c-2": ["\n", {
                        "#": "IMAGE: images/city_str.jpg"
                    }, "^Going straight ahead, you will find a path that leads to the outskirts of the city and head along it.", "\n", "^After some time you find a house near the mountains.", "\n", {
                        "#": "IMAGE: images/outsk_house.jpg"
                    }, "ev", {
                        "CNT?": "mountain_house"
                    }, "/ev", [{
                        "->": ".^.b",
                        "c": true
                    }, {
                        "b": ["^ ", {
                            "->": "City.old_man_visited"
                        }, {
                            "->": ".^.^.^.11"
                        }, null]
                    }], "nop", "\n", {
                        "->": "City.outskirts"
                    }, {
                        "#f": 5
                    }]
                }], {
                    "old_man_visited": [
                        ["^This path leads to the old man's house. He won't tell me anything else anymore.I should go somewhere else.", "\n", "ev", "str", "^Go back", "/str", "/ev", {
                            "*": ".^.c-0",
                            "flg": 20
                        }, {
                            "c-0": ["\n", {
                                "->": "City"
                            }, "^THE END", "\n", "end", {
                                "#f": 5
                            }]
                        }], {
                            "#f": 1
                        }
                    ],
                    "woman_dialog": [
                        ["^<b>You:</b> \"It\"?", "\n", "ev", {
                            "VAR?": "Alertness"
                        }, 1, "+", {
                            "VAR=": "Alertness",
                            "re": true
                        }, "/ev", "ev", {
                            "VAR?": "Knowledge"
                        }, 1, "+", {
                            "VAR=": "Knowledge",
                            "re": true
                        }, "/ev", "^The woman wants to say something, but closes her mouth quickly.", "\n", "^<b> The man:</b> Sorry, but we need to go home, the child doesn't calm down. Since you are a newcomer what about greeting the mayor?", "\n", ["^They certainly hide something, but you understand that the man will not tell you anything and will not let his wife speak either. So, you have only one choice, to look for the answers from the mayor.", "\n", "^<b>You:</b> Where can I find the mayor?", "\n", "^<b> The man:</b> See the building at the end of the street? Go right there.", "\n", ["ev", "str", "^Go to the front of the building", "/str", "/ev", {
                            "*": ".^.c-0",
                            "flg": 20
                        }, {
                            "c-0": ["\n", {
                                "->": "mayor_house"
                            }, {
                                "#f": 5
                            }]
                        }], {
                            "#f": 5,
                            "#n": "g-0"
                        }], null], {
                            "#f": 1
                        }
                    ],
                    "Right": [{
                            "#": "IMAGE: images/collage/choose_city_right.jpg"
                        },
                        ["ev", "str", "^Talk to the man", "/str", "/ev", {
                            "*": ".^.c-0",
                            "flg": 20
                        }, "ev", "str", "^Talk to the parents", "/str", "/ev", {
                            "*": ".^.c-1",
                            "flg": 20
                        }, "ev", "str", "^Go to the museum", "/str", "/ev", {
                            "*": ".^.c-2",
                            "flg": 20
                        }, {
                            "c-0": ["\n", {
                                "#": "IMAGE: images/man_eye.jpg"
                            }, "^You approach the man. Coming closer you see that his eyes have a red color and his stare seems blank. You immidiatly got scared, but a few moments later you understand that his gaze is not empty, it holds something, something grievous. His eyes looked drained from crying they were full of sadness...remorse and fear...", "\n", "^The sounds coming from your mouths quivered.", "\n", "^<b>You(carefully):</b> I am de..ahem..deeply sorry, sir...may I ask you why you're in such a condition? Can I help you?", "\n", "^He looked you straight in the eyes and put his hands on your shoulders. You could feel his pain gripping you from the inside.", "\n", "^<b>The man(mumbles):</b> I need to go...I can't stay here..How...(sobs)...How could they do this to an innocent soul...", "\n", "^For a moment he came to his senses and looked at you with pity, after patting your shoulders he returned to follow his path...to the north...", "\n", "^You didn't fully realize what was going on, but one thing was clear, you shouldn't disturb this person anymore.", "\n", {
                                "->": ".^.^.^"
                            }, {
                                "#f": 5
                            }],
                            "c-1": ["\n", "^You approach the young family.", "\n", {
                                "#": "IMAGE: images/parents_child.jpg"
                            }, "^<b> You(carefully):</b> Hello, excuse me. Could I ask you some questions?", "\n", "^<b> Woman(cheerful): </b> Hi! I see you are not from this parts. I would like to help you, but as you can see we have some troubles calming down this little child. (smiles guiltily)", "\n", "^<b> You: </b> May I know what caused his tears? Maybe I could help...", "\n", "^You get interrupted by her husband.", "\n", "^<b> The man(abruptly): </b> Don't worry, we will deal with this.", "\n", "^<b> Woman(worried):</b>Yeah, don't worry, is just that we saw \"It\" at the mayor's residence so the child got emotional.", "\n", "^The man looks at his wife with a disapproving look.", "\n", {
                                "->": "City.woman_dialog"
                            }, {
                                "#f": 5
                            }],
                            "c-2": ["\n", {
                                "->": "museum"
                            }, {
                                "#f": 5
                            }]
                        }], {
                            "#f": 1
                        }
                    ],
                    "Left": [{
                            "temp=": "state"
                        },
                        ["ev", {
                                "VAR?": "state"
                            }, "str", "^", "/str", "==", "/ev", [{
                                "->": ".^.b",
                                "c": true
                            }, {
                                "b": ["\n", {
                                    "#": "IMAGE: images/collage/choice_city_left.jpg"
                                }, {
                                    "->": ".^.^.^.9"
                                }, null]
                            }],
                            [{
                                "->": ".^.b"
                            }, {
                                "b": ["\n", {
                                    "#": "IMAGE: images/sales_w.jpg"
                                }, {
                                    "->": ".^.^.^.9"
                                }, null]
                            }], "nop", "\n", "ev", "str", "^Talk to the painter", "/str", "/ev", {
                                "*": ".^.c-0",
                                "flg": 20
                            }, "ev", "str", "^Talk to the woman", "/str", "/ev", {
                                "*": ".^.c-1",
                                "flg": 20
                            }, {
                                "c-0": ["\n", {
                                    "#": "IMAGE: images/painter.jpg"
                                }, "^<b>You(with a polite smile):</b> Hello, Mister, I would like to ask you some questions, are you free?", "\n", "^<b>Painter(detached):</b> As you can see, I am painting right now.", "\n", "^You try to find another approach to get him to talk, so you ask about the painting.", "\n", "^<b>You:</b> Would you mind to share something about your painting?", "\n", "^<b>Painter(reluctantly):</b> As you see, I paint the children… Naïve and happy children…Who welcome every morning with a bright smile on their faces and don’t now anything about the misery of this world, I wonder if they even know the meaning of the word “misery”. (laughs bitterly)", "\n", "^<b>You:</b> But children are supposed to be protected from such things, don’t you think so?", "\n", "^<b>Painter:</b> There is truth in your words. But what would you say if the tears of one child brings the joy to everyone else?", "\n", "^<b>You:</b> I don’t think that a crying child can be a cause for joy.", "\n", "^<b>Painter:</b> (sights) Well, believe me or not but it turns out like that.", "\n", "^You wanted to ask him more questions, but it seemed like a bad idea, so you decided to find answers to your questions elsewhere.", "\n", "ev", "str", "^s", "/str", "/ev", {
                                    "->": ".^.^.^"
                                }, {
                                    "#f": 5
                                }],
                                "c-1": ["\n", "ev", {
                                    "VAR?": "Alertness"
                                }, 1, "+", {
                                    "VAR=": "Alertness",
                                    "re": true
                                }, "/ev", "^She greeted you with a bright smile on her face.", "\n", "^<b>Woman:</b> Hey, dear, I haven’t seen a new face on these humble streets in about 40 years! How did you get here? Want to taste something? (points at the table with the food)", "\n", "^<b>You:</b> Actually, I would ask you about something.", "\n", "^<b>Woman(cheerful):</b> You came to the right place! Feel free to ask anything. This woman knows everything about everybody in this city, what food everyone likes ,who dates who and I even know about the secret affairs of some respectable misters and ladies. (winks)", "\n", "^This woman looks like a typical chirper who spends her time gossiping about every passing ant in her way.", "\n", "ev", "str", "^", "/str", "/ev", {
                                    "->": "City.left_woman"
                                }, {
                                    "#f": 5
                                }]
                            }
                        ], {
                            "#f": 1
                        }
                    ],
                    "left_woman": [{
                            "temp=": "state"
                        },
                        [
                            ["ev", "visit", 1, "MIN", "/ev", "ev", "du", 0, "==", "/ev", {
                                "->": ".^.s0",
                                "c": true
                            }, "ev", "du", 1, "==", "/ev", {
                                "->": ".^.s1",
                                "c": true
                            }, "nop", {
                                "s0": ["pop", "^<b>Woman:</b> What do you want to ask about?", {
                                    "->": ".^.^.17"
                                }, null],
                                "s1": ["pop", "^<b>Woman:</b> Anything else?", {
                                    "->": ".^.^.17"
                                }, null],
                                "#f": 5
                            }], "\n", "ev", {
                                "VAR?": "state"
                            }, "str", "^", "/str", "==", "/ev", [{
                                "->": ".^.b",
                                "c": true
                            }, {
                                "b": ["\n", {
                                    "#": "IMAGE: images/collage/choose_city_food.jpg"
                                }, {
                                    "->": ".^.^.^.11"
                                }, null]
                            }],
                            [{
                                "->": ".^.b"
                            }, {
                                "b": ["\n", {
                                    "#": "IMAGE: images/city_view.jpg"
                                }, {
                                    "->": ".^.^.^.11"
                                }, null]
                            }], "nop", "\n", "ev", "str", "^Food", "/str", "/ev", {
                                "*": ".^.c-0",
                                "flg": 20
                            }, "ev", "str", "^City", "/str", "/ev", {
                                "*": ".^.c-1",
                                "flg": 20
                            }, {
                                "c-0": ["\n", "^<b>You</b>: What would you recommend for me to eat?", "\n", {
                                    "#": "IMAGE: images/Collage/choice_food.jpg"
                                }, "^The woman recommends you her special tea, apples and a pice of a pie. You can choose only one type.", "\n", ["ev", "str", "^Tea", "/str", "/ev", {
                                    "*": ".^.c-0",
                                    "flg": 20
                                }, "ev", "str", "^Apples", "/str", "/ev", {
                                    "*": ".^.c-1",
                                    "flg": 20
                                }, "ev", "str", "^Pie", "/str", "/ev", {
                                    "*": ".^.c-2",
                                    "flg": 20
                                }, {
                                    "c-0": ["\n", "^<b>You:</b> I will drink some tea.", "\n", {
                                        "#": "IMAGE: images/tea.jpg"
                                    }, "^The woman gives you a cup of tea.", "\n", "^It tastes wonderful, almost as if you drank sunshine, it warmed you from the inside. Its aftertaste was close to a mixture of mint and daisies.", "\n", {
                                        "->": ".^.^.g-0"
                                    }, {
                                        "#f": 5
                                    }],
                                    "c-1": ["\n", "^<b>You:</b> I will take an apple.", "\n", "ev", 1, "/ev", {
                                        "VAR=": "Apples",
                                        "re": true
                                    }, {
                                        "#": "IMAGE: images/apple.jpg"
                                    }, "^The woman gives you some apples. You look at her inquiringly.", "\n", "^<b>Woman:</b> One is for you and other ones are for the friends that you will make here.(winks)", "\n", "^You take the apples and taste one. It was very sweet and juicy, you have never eaten such apples.", "\n", {
                                        "->": ".^.^.g-0"
                                    }, {
                                        "#f": 5
                                    }],
                                    "c-2": ["\n", {
                                        "#": "IMAGE: images/food.jpg"
                                    }, "^<b>You:</b> I would like to try the pie.", "\n", "^The woman gives you a piece of the pie. You take a bite and it's delicious. It was an apple pie like you've never eaten before, very flavorful and crispy.", "\n", {
                                        "->": ".^.^.g-0"
                                    }, {
                                        "#f": 5
                                    }],
                                    "g-0": ["^<b>You:</b> Thank you. How much do I owe?", "\n", "^<b>Woman:</b> Oh, you mean money?", "\n", "^<b>You(confused):</b> Yes...", "\n", "^<b>Woman:</b> I think I have heard from the old man about such stuff existing in the outside world... Well, we don't have it here, everyone just does his/her work! So just enjoy your meal.", "\n", "^That was surprisingly nice, but you could not understand how a city can function normally without a monetary system and only on the conscience of people.", "\n", "ev", {
                                        "VAR?": "Knowledge"
                                    }, 1, "+", {
                                        "VAR=": "Knowledge",
                                        "re": true
                                    }, "/ev", "ev", "str", "^s", "/str", "/ev", {
                                        "->": ".^.^.^.^.^"
                                    }, {
                                        "#f": 5
                                    }]
                                }], {
                                    "#f": 5
                                }],
                                "c-1": ["\n", "^<b>You:</b> I would like to find more about the city.", "\n", "^<b>Woman:</b> Well, it's quite simple, we live here for the past 4-5 generations, people here are friendly and work for the prosperity of their home.", "\n", ["ev", "str", "^Ask how did the city become so prosperous", "/str", "/ev", {
                                    "*": ".^.c-0",
                                    "flg": 20
                                }, {
                                    "c-0": ["\n", "^<b>You:</b> How did the city become so prosperous while being isolated from the outside world?", "\n", "^<b>Woman:</b> Well, here we have our own small world.(laughts) It's not that hard to make a city prosperous when every citizen contributes to it. But if you want to know more about the history of this city you could go to the museum and ask the man from there. Or if you want to find more from the perspective of somebody who came here like you, then you could visit the man from the outskirts.", "\n", "ev", {
                                        "VAR?": "Knowledge"
                                    }, 1, "+", {
                                        "VAR=": "Knowledge",
                                        "re": true
                                    }, "/ev", ["ev", "str", "^Ask how to get to the museum", "/str", "/ev", {
                                        "*": ".^.c-0",
                                        "flg": 20
                                    }, "ev", "str", "^Ask where you can find the outskirts", "/str", "/ev", {
                                        "*": ".^.c-1",
                                        "flg": 20
                                    }, {
                                        "c-0": ["\n", "^<b>You:</b> Could you tell me how can I get to the museum?", "\n", "^<b>Woman:</b> Sure, go to the main square and turn right, there you will see a waymark.", "\n", "ev", 1, "/ev", {
                                            "VAR=": "Museum",
                                            "re": true
                                        }, {
                                            "->": ".^.^.g-0"
                                        }, {
                                            "#f": 5
                                        }],
                                        "c-1": ["\n", "^<b>You:</b> Could you tell me how can I get to the outskirts?", "\n", "^<b>Woman:</b> Sure, go to the main square and go straight to the norhern path, at its end you will se the old man's house.", "\n", {
                                            "->": ".^.^.g-0"
                                        }, {
                                            "#f": 5
                                        }],
                                        "g-0": ["ev", {
                                                "VAR?": "Museum"
                                            }, "/ev", [{
                                                "->": ".^.b",
                                                "c": true
                                            }, {
                                                "b": ["^ You follow the directions given by the woman and take a right.", {
                                                    "->": ".^.^.^.5"
                                                }, null]
                                            }],
                                            [{
                                                "->": ".^.b"
                                            }, {
                                                "b": ["^You follow the directions given by the woman.", {
                                                    "->": ".^.^.^.5"
                                                }, null]
                                            }], "nop", "\n", "ev", {
                                                "VAR?": "Alertness"
                                            },
                                            1, "+", {
                                                "VAR=": "Alertness",
                                                "re": true
                                            }, "/ev", {
                                                "->": "City.crossroads"
                                            }, {
                                                "#f": 5
                                            }
                                        ]
                                    }], {
                                        "#f": 5
                                    }]
                                }], {
                                    "#f": 5
                                }]
                            }
                        ], {
                            "#f": 1
                        }
                    ],
                    "crossroads": [
                        ["ev", "str", "^Go to the museum", "/str", {
                            "VAR?": "Museum"
                        }, "/ev", {
                            "*": ".^.c-0",
                            "flg": 21
                        }, "ev", "str", "^Go to the north outskirts", "/str", {
                            "VAR?": "Museum"
                        }, "!", "/ev", {
                            "*": ".^.c-1",
                            "flg": 21
                        }, {
                            "c-0": ["\n", {
                                "->": "museum"
                            }, {
                                "#f": 5
                            }],
                            "c-1": ["\n", {
                                "#": "IMAGE: images/outsk_house.jpg"
                            }, "^You see a house at the end of the path.", "\n", {
                                "->": "City.outskirts"
                            }, {
                                "#f": 5
                            }]
                        }], {
                            "#f": 1
                        }
                    ],
                    "outskirts": [{
                        "->": "mountain_house"
                    }, {
                        "#f": 1
                    }],
                    "#f": 1
                }
            ],
            "mountain_house": [
                ["^You come closer to its door.", "\n", {
                    "#": "IMAGE: images/door.jpg"
                }, "ev", "str", "^Knock", "/str", "/ev", {
                    "*": ".^.c-0",
                    "flg": 20
                }, {
                    "c-0": ["\n", "^You knocked the door. It was opened by old man in his 70s. He looks at you surprised.", "\n", "^<b>Old man: </b> How can I help you?", "\n", {
                            "#": "IMAGE: images/outsk_man.jpg"
                        },
                        ["ev", "str", "^Ask the man about the city", "/str", "/ev", {
                            "*": ".^.c-0",
                            "flg": 20
                        }, {
                            "c-0": ["\n", "^<b>You:</b> Hello, sorry to disturb you. I came to this city recently, so I don't know anything about it, could you answer a few questions about the city?", "\n", "ev", {
                                "VAR?": "Knowledge"
                            }, 1, "+", {
                                "VAR=": "Knowledge",
                                "re": true
                            }, "/ev", "^<b>Old man(grumply):</b> You came to the wrong place, especially if you are a softie. Listen to this old man and leave the city till it's not too late or at least try to not stick your nose in other people's business.", "\n", "^You were puzzled by his words.", "\n", ["ev", "str", "^Leave old man's house", "/str", "/ev", {
                                "*": ".^.c-0",
                                "flg": 20
                            }, "ev", "str", "^Ask why he lives in the outskirts", "/str", "/ev", {
                                "*": ".^.c-1",
                                "flg": 20
                            }, {
                                "c-0": ["\n", "^You go back to the city.", "\n", {
                                    "->": "City"
                                }, {
                                    "#f": 5
                                }],
                                "c-1": ["\n", "^You decided to be insistent and ask him at least one question.", "\n", "^<b>You:</b> Why do you live in the outskirts? People from here seem friendly and the city is nice too.", "\n", "ev", {
                                    "VAR?": "Knowledge"
                                }, 1, "+", {
                                    "VAR=": "Knowledge",
                                    "re": true
                                }, "/ev", "^The old man sights.", "\n", "^<b>Old man:</b> Come in.", "\n", "^You enter the man's house.", "\n", {
                                    "#": "IMAGE: images/collage/outsk_sofa_armchair.jpg"
                                }, "^He invites you to sit down in the armchair. It is pretty comfortable.", "\n", "^<b>Old man:</b> I see you are the type who doesn't leave until you get what you want.", "\n", "^You smile politely.", "\n", "^<b>Old man:</b> Well, listen to my story, youngster. As you I was not born here. I came to the city around 40 years ago when the Cold War showed its economical impact on the civils and the inflation begun. I had a small business, but due to the circumstances I got bankrupt. My wife left me with nothing... I had nowhere to go so I was wondering in the mountains to find my death, but I was lucky...or may be not to find this wonderful city.(smiles bitterly) It became my home, the mayor's father let me live here if I ...help people who wants to leave this city to pass the mountains.", "\n", {
                                    "->": "mountain_house.questions"
                                }, {
                                    "#f": 5
                                }]
                            }], {
                                "#f": 5
                            }]
                        }], {
                            "#f": 5
                        }
                    ]
                }], {
                    "questions": [
                        ["ev", "str", "^Ask why he helps them", "/str", "/ev", {
                            "*": ".^.c-0",
                            "flg": 20
                        }, "ev", "str", "^Ask why people want to leave", "/str", "/ev", {
                            "*": ".^.c-1",
                            "flg": 20
                        }, {
                            "c-0": ["\n", "^<b>You:</b> But, why do you help them?", "\n", "^<b>Old man:</b> Because that's the only reason the mayor's father let me live here. Nice house, right? (chuckles) Also, the people of this city are very... sensitive about its privacy. I think you have already understood that this is a good place to live, so if other people find out about this city, it will cause a mess. A HUGE mess.", "\n", {
                                "->": ".^.^.^"
                            }, {
                                "->": ".^.^.q"
                            }, {
                                "#f": 5
                            }],
                            "c-1": ["\n", "ev", {
                                "VAR?": "Knowledge"
                            }, 1, "+", {
                                "VAR=": "Knowledge",
                                "re": true
                            }, "/ev", "^<b>You:</b> But why someone would leave this wonderful place?", "\n", "^<b>Old man(sad):</b> Some things are better to be left unknown. I strongly advise you to not look into this matter. Also, the mayor will be displeased if you start to interogate all the people of this city.", "\n", "^It is not the answer you wanted to hear.", "\n", ["ev", "str", "^Insist", "/str", "/ev", {
                                "*": ".^.c-0",
                                "flg": 20
                            }, {
                                "c-0": ["\n", "^<b>You:</b> It's not the answer to my question.", "\n", "ev", {
                                    "VAR?": "Knowledge"
                                }, 1, "+", {
                                    "VAR=": "Knowledge",
                                    "re": true
                                }, "/ev", "ev", {
                                    "VAR?": "Alertness"
                                }, 1, "+", {
                                    "VAR=": "Alertness",
                                    "re": true
                                }, "/ev", "^<b>Old man:</b> I will tell you just one thing. All of them had soft hearts and have seen something they shouldn't have in order to live here without remorse.", "\n", {
                                    "->": ".^.^.^.^.q"
                                }, {
                                    "#f": 5
                                }]
                            }], {
                                "#f": 5
                            }],
                            "q": ["ev", "str", "^Ask what have they seen", "/str", "/ev", {
                                "*": ".^.c-2",
                                "flg": 20
                            }, {
                                "c-2": ["\n", "^<b>You:</b> What have they seen?", "\n", "^<b>Old man:</b> I already told you too much.", "\n", ["ev", "str", "^Tell him that you will find out", "/str", "/ev", {
                                    "*": ".^.c-0",
                                    "flg": 20
                                }, "ev", "str", "^Ask if it's related to the story of the city", "/str", {
                                    "VAR?": "Museum"
                                }, "/ev", {
                                    "*": ".^.c-1",
                                    "flg": 21
                                }, "ev", "str", "^Ask why he decided to stay here", "/str", "/ev", {
                                    "*": ".^.c-2",
                                    "flg": 20
                                }, {
                                    "c-0": ["\n", "^<b>You:</b> Well, I think that in this city I will find someone who would answer my questions honestly.", "\n", "ev", {
                                        "VAR?": "Alertness"
                                    }, 1, "+", {
                                        "VAR=": "Alertness",
                                        "re": true
                                    }, "/ev", "^<b>Old man(dissapointed):</b> It is a really bad ideea...Don't bother the citizens, ask the mayor directly all the questions reqarding the city, he is the only one who could provide you information...If he wants.", "\n", "^<b>You:</b> Where I can find him?", "\n", "^<b>Old man:</b> Go to the town square and turn right, there you will se the building at the end of the street. Go right there.", "\n", {
                                        "->": ".^.^.^.^.^.go_to_mayor.travel"
                                    }, {
                                        "->": ".^.^.^.^.^.sad_backstory"
                                    }, {
                                        "#f": 5
                                    }],
                                    "c-1": ["\n", "^<b>You:</b> Is it related to the story told by the museum's owner?", "\n", "ev", {
                                        "VAR?": "Alertness"
                                    }, 1, "+", {
                                        "VAR=": "Alertness",
                                        "re": true
                                    }, "/ev", "^<b> Old man:</b> I see, you spoke with that bigmouth. Yes, it is related to the legend, but I can't tell you more.", "\n", ["ev", "str", "^I want to get the answers", "/str", "/ev", {
                                        "*": ".^.c-0",
                                        "flg": 20
                                    }, {
                                        "c-0": ["\n", "^<b>You(insistent):</b> I want to get the answers to my questions and if you or the other citizens won't tell me, then I will ask the mayor directly.", "\n", "^<b> Old man:</b> It is a really bad ideea...Don't bother the citizens. You could ask the mayor directly, he is really the only one who could provide you the information that you seek...If he wants.", "\n", "^<b>You:</b> Where I can find him?", "\n", "^<b>Old man:</b> Go to the town square and turn right, there you will se the building at the end of the street. Go right there.", "\n", {
                                            "->": ".^.^.^.^.^.^.^.go_to_mayor.travel"
                                        }, {
                                            "->": ".^.^.^.^.^.^.^.sad_backstory"
                                        }, {
                                            "#f": 5
                                        }]
                                    }], {
                                        "#f": 5
                                    }],
                                    "c-2": ["\n", "^<b>You:</b> Why did you decide to stay here if you speak so badly about this place?", "\n", {
                                        "->": ".^.^.^.^.^.sad_backstory"
                                    }, {
                                        "#f": 5
                                    }]
                                }], {
                                    "#f": 5
                                }],
                                "#f": 5
                            }],
                            "sad_backstory": ["^<b>Old man:</b> Obviously, because I had nowhere to go...", "\n", "ev", "str", "^I am sorry", "/str", "/ev", {
                                "*": ".^.c-3",
                                "flg": 20
                            }, "ev", "str", "^I understand and I will leave the city", "/str", "/ev", {
                                "*": ".^.c-4",
                                "flg": 20
                            }, {
                                "c-3": ["\n", "^<b>You:</b> I am sorry that you had to go through all this, but I really want to know more about this city.", "\n", "^<b>Old man(dissapointed):</b> It is a really bad ideea...Don't bother the citizens, ask the mayor directly all the questions reqarding the city, he is the only one who could provide you information...If he wants.", "\n", "^<b>You:</b> Where I can find him?", "\n", "^<b>Old man:</b> Go to the town square and turn right, there you will se the building at the end of the street. Go right there.", "\n", {
                                    "->": ".^.^.^.go_to_mayor.travel"
                                }, {
                                    "->": ".^.^.^.stay_night"
                                }, {
                                    "#f": 5
                                }],
                                "c-4": ["\n", "^<b>You:</b> Ok, I understood and I'll follow your advice.", "\n", "^<b>Old man(joyful):</b> This is a very wise decision. You could stay overnight and leave the city tomorrow morning, take this as a thank you for listening to this old man. Make yourself comfortable.", "\n", {
                                    "#": "IMAGE: images/collage/outsk_sofa_armchair.jpg"
                                }, {
                                    "->": ".^.^.^.stay_night"
                                }, {
                                    "#f": 5
                                }],
                                "#f": 5
                            }],
                            "stay_night": ["ev", "str", "^Sleep on the sofa.", "/str", "/ev", {
                                "*": ".^.c-5",
                                "flg": 20
                            }, "ev", "str", "^Stay awake on the armchair", "/str", "/ev", {
                                "*": ".^.c-6",
                                "flg": 20
                            }, {
                                "c-5": ["\n", "^You chose to sleep on the sofa.", "\n", {
                                    "#": "IMAGE: images/sofa.jpg"
                                }, "^In the middle of the night you wake uo because someone knocks on the door.", "\n", {
                                    "->": ".^.^.^.door_knock"
                                }, {
                                    "#f": 5
                                }],
                                "c-6": ["\n", {
                                    "#": "IMAGE: images/arm.jpg"
                                }, "^Someone knocks on the door.", "\n", {
                                    "->": ".^.^.^.door_knock"
                                }, {
                                    "#f": 5
                                }],
                                "#f": 5
                            }],
                            "door_knock": ["ev", "str", "^Stand up and open the door", "/str", "/ev", {
                                "*": ".^.c-7",
                                "flg": 20
                            }, {
                                "c-7": ["\n", {
                                    "#": "IMAGE: images/door_ins.jpg"
                                }, "^You stand up and go to open the door.", "\n", "ev", 1, "/ev", {
                                    "VAR=": "Door",
                                    "re": true
                                }, "^Opening the door, you see a woman and a man with very sad and worried expressions on their faces.", "\n", {
                                    "->": ".^.^.^.answer"
                                }, {
                                    "#f": 5
                                }],
                                "#f": 5
                            }],
                            "answer": ["ev", "str", "^Ask how can you help them", "/str", "/ev", {
                                "*": ".^.c-8",
                                "flg": 20
                            }, {
                                "c-8": ["\n", "^<b>You:</b> Could I help you with something?", "\n", "^They wanted to tell you something, but the old man comes behind you and invites them inside to an another room.", "\n", "^<b>The man(depressed):</b> We saw it...", "\n", ["ev", "str", "^Listen closer", "/str", "/ev", {
                                    "*": ".^.c-0",
                                    "flg": 20
                                }, {
                                    "c-0": ["\n", "^The man holds the woman's hand.", "\n", "^<b>The man:</b> We need to leave as fast as possible...", "\n", "^<b>The woman(crying):</b> How could they treat a child like this?(sobs) How could all these people live without remorse after seeing how miserable it...he is treated?!", "\n", "^<b>Old man:</b> Calm down for a little bit, we are not alone...", "\n", "^The couple looks at you and become silent. The house's owner addresses to you.", "\n", "^<b>Old man:</b> I will go out for a while, to help them leave. You can go with me.", "\n", "^You four go to a cave not far away from the man's house, the couple enters the cave.", "\n", "^<b> Old man:</b> I will escort them to the exit, you can take care of yourself till my return.", "\n", {
                                        "->": ".^.^.^.^.^.ask"
                                    }, {
                                        "#f": 5
                                    }]
                                }], {
                                    "#f": 5
                                }],
                                "#f": 5
                            }],
                            "ask": ["ev", "str", "^Ask if you should go with them", "/str", "/ev", {
                                "*": ".^.c-9",
                                "flg": 20
                            }, {
                                "c-9": ["\n", "^<b>You:</b> Shouldn't I go with you now in order to leave the city?", "\n", "^<b>Old man(abruptly):</b> No. You will leave tomorrow's morning through the path you entered here.", "\n", {
                                    "->": ".^.^.^.where_to"
                                }, {
                                    "#f": 5
                                }],
                                "#f": 5
                            }],
                            "where_to": [
                                ["ev", "visit", 1, "MIN", "/ev", "ev", "du", 0, "==", "/ev", {
                                    "->": ".^.s0",
                                    "c": true
                                }, "ev", "du", 1, "==", "/ev", {
                                    "->": ".^.s1",
                                    "c": true
                                }, "nop", {
                                    "s0": ["pop", "^Choose what to do:", {
                                        "->": ".^.^.17"
                                    }, null],
                                    "s1": ["pop", {
                                        "->": ".^.^.17"
                                    }, null],
                                    "#f": 5
                                }], "\n", "ev", "str", "^Go to the festival", "/str", "/ev", {
                                    "*": ".^.c-10",
                                    "flg": 20
                                }, "ev", "str", "^Go back to the man's house", "/str", "/ev", {
                                    "*": ".^.c-11",
                                    "flg": 20
                                }, {
                                    "c-10": ["\n", "^<b>You:</b> I will go to the festival and then come back.", "\n", "^<b>Old man:</b> Fine, take care to not get into trouble.", "\n", "^You go back to the city to enjoy the festival before you take your leave.", "\n", {
                                        "#": "IMAGE: images/city_fest.jpg"
                                    }, "^The city at night is a pleasant sight for your eyes. Its lights shine like little stars all over the street, people are happy to talk and dance to the music. You joined them and began to move under the quick beats of the tambourines. It felt so nice and peaceful. You don't remember when was the last time when you felt so happy, but you need to go back to the old man's house.", "\n", {
                                        "->": ".^.^"
                                    }, {
                                        "->": ".^.^.^.go_to_city"
                                    }, {
                                        "#f": 5
                                    }],
                                    "c-11": ["\n", {
                                        "#": "IMAGE: images/outsk_house_night.jpg"
                                    }, "^You returned to the old man's house and slept there until morning. Waking up, you began to look for a man and you found him in the armchair.", "\n", "^<b>You:</b> Good morning.", "\n", "^<b>Old man:</b> Good morning, had a good time at the festival?", "\n", "^You nod.", "\n", "^<b>Old man:</b>I remember the days when I came to this city... I danced every night in the main square until I got too old and stiff for it (sights).", "\n", "^<b>You:</b> I will go the last time to the city and then I will leave.", "\n", "^<b>Old man(worried):</b> It would be better if you leave now, but I understand...Take care of you.", "\n", "^<b>You:</b> You too, old man, you too.", "\n", {
                                        "->": ".^.^.^.go_to_city"
                                    }, {
                                        "#f": 5
                                    }],
                                    "#f": 5
                                }
                            ],
                            "go_to_city": ["ev", "str", "^ Go to the city", "/str", "/ev", {
                                "*": ".^.c-12",
                                "flg": 20
                            }, {
                                "c-12": ["\n", {
                                    "#": "IMAGE: images/city_le.jpg"
                                }, "^You are back in the city, people are tired after the long night dances, but everyone looks happy.", "\n", "^You start to wonder if you really should leave, or if you could stay a little longer and learn more about the city from its most prominent figure, the mayor.", "\n", ["ev", "str", "^Leave the city", "/str", "/ev", {
                                    "*": ".^.c-0",
                                    "flg": 20
                                }, "ev", "str", "^Ask where you can find the mayor", "/str", "/ev", {
                                    "*": ".^.c-1",
                                    "flg": 20
                                }, {
                                    "c-0": ["\n", {
                                        "#": "IMAGE: images/leave_city.jpg"
                                    }, "^You decided to follow the old man's advice, especially since there is something very suspicious about this place. You didn't like what you heard from the couple who left the city. The city is indeed wonderful, but it's not worth your safety.", "\n", "^You return home the same way you came here and continue your journey, finding special places around the world. Coming home you told your friends about the city, but they did not believe you. Well, in their place, you would not believe in your story either.", "\n", "^THE END", "\n", "done", {
                                        "->": ".^.^.^.^.^.go_to_mayor"
                                    }, {
                                        "#f": 5
                                    }],
                                    "c-1": ["\n", {
                                        "#": "IMAGE:images/speak_people.jpg"
                                    }, {
                                        "->": ".^.^.^.^.^.go_to_mayor"
                                    }, {
                                        "#f": 5
                                    }]
                                }], {
                                    "#f": 5
                                }],
                                "#f": 5
                            }],
                            "go_to_mayor": ["^You approach a citizen in order to find the mayor.", "\n", "^<b>You:</b> Excuse me, could you tell me where I can find the mayor?", "\n", "^<b>Citizen(smiles):</b> Ah, yes, you see, go to the main square and then turn right, at the end of the street you will see the mayor's residence.", "\n", "^<b>You:</b> Thank you!", "\n", ["ev", "str", "^Go to the mayor's residence", "/str", "/ev", {
                                "*": ".^.c-13",
                                "flg": 20
                            }, {
                                "c-13": ["\n", {
                                    "->": "mayor_house"
                                }, {
                                    "#f": 5
                                }],
                                "#f": 5,
                                "#n": "travel"
                            }], {
                                "#f": 5
                            }]
                        }], {
                            "#f": 1
                        }
                    ],
                    "#f": 1
                }
            ],
            "museum": [
                [{
                    "#": "IMAGE: images/muz.jpg"
                }, "ev", 1, "/ev", {
                    "VAR=": "Museum",
                    "re": true
                }, "^You enter the building and see the owner of the museum.", "\n", "ev", "str", "^Speak with the owner", "/str", "/ev", {
                    "*": ".^.c-0",
                    "flg": 20
                }, {
                    "c-0": ["\n", {
                        "#": "IMAGE: images/muz_man.jpg"
                    }, "^<b>You:</b> Hello, I suppose that I got to the right place to ask questions about this city?", "\n", "^<b>Owner:</b> Hmmm, it depends on what you want to ask.", "\n", ["ev", "str", "^Ask how did the city became so prosperous", "/str", "/ev", {
                        "*": ".^.c-0",
                        "flg": 20
                    }, "ev", "str", "^Ask if the city has some legends", "/str", "/ev", {
                        "*": ".^.c-1",
                        "flg": 20
                    }, {
                        "c-0": ["\n", "^<b>You:</b> I would like to know why this city is so prosperous despite being isolated.", "\n", "ev", {
                            "VAR?": "Knowledge"
                        }, 1, "+", {
                            "VAR=": "Knowledge",
                            "re": true
                        }, "/ev", {
                            "->": "museum.0.g-0"
                        }, {
                            "#f": 5
                        }],
                        "c-1": ["\n", "ev", {
                            "VAR?": "Knowledge"
                        }, 2, "+", "/ev", {
                            "VAR=": "Knowledge",
                            "re": true
                        }, {
                            "->": "museum.0.g-0"
                        }, {
                            "#f": 5
                        }]
                    }], {
                        "#f": 5
                    }],
                    "g-0": ["^<b>Owner:</b> Well, let me tell you the story of founding this city.", "\n", "^It is said from the ancestors that there was a big natural disaster in their village, all their possesings were lost, many of their siblings died and they had nowhere to go. The head of the villagers lost his life and let two of his sons alone. Nobody knew what to do in such situation without a leader, but after some time the younger son of the deceased head took the lead and directed everyone to the mountains. It was said that a spirit lived there so they hoped to get help from it.", "\n", "^They headed to the mountains and found a cave, I suppose you passed through that cave too entering here.(chuckles) There they found a beautiful creature, the spirit. It did not appreciate the intrusion in his habitat and acted agressively, but the young man tryed to persuade it and he did well. The spirit agreed to let them in and showed the beautiful peisage you have seen while entering, but there was a condition. The boy must to sacrifice his life for the sake of the other people if he cares about them so much that he dared to speak to the spirit.", "\n", "^<b>You:</b> He died?", "\n", "^<b>Owner:</b> No, he just agreed and lived for the sake of his people, he was a hero. His older brother bacame the mayor in order to help him and the curent head of the city is his descendant.", "\n", "ev", "str", "^Ask why the younger brother did not become the mayor", "/str", "/ev", {
                        "*": ".^.c-1",
                        "flg": 20
                    }, {
                        "c-1": ["\n", "ev", {
                            "VAR?": "Alertness"
                        }, 1, "+", {
                            "VAR=": "Alertness",
                            "re": true
                        }, "/ev", "^<b>You:</b> Why the young brother did not become the mayor?", "\n", "^<b>Owner:</b> Well, because he had his own duty in order to contribute to the well being of the citizens. You could ask more about it from the mayor directly, he knows more about his family.", "\n", ["ev", "str", "^Ask how to get to the mayor", "/str", "/ev", {
                            "*": ".^.c-0",
                            "flg": 20
                        }, {
                            "c-0": ["\n", "^<b>You:</b> How can I find the mayor?", "\n", "^<b>Owner:</b> Exit the museum and go right to the end of the street, there you will see the mayor's residence. Hmmm...Also you could go to the north outskirts by going stright from the main square if haven't visited it before.", "\n", ["ev", "str", "^Go to the outskirts", "/str", {
                                "CNT?": "City.outskirts"
                            }, "!", "/ev", {
                                "*": ".^.c-0",
                                "flg": 21
                            }, "ev", "str", "^Go to the Mayor's residence", "/str", "/ev", {
                                "*": ".^.c-1",
                                "flg": 20
                            }, {
                                "c-0": ["\n", "^You decide to go first to the outskirts and ask some questions there and after this you will come back to the mayor for more information.", "\n", "^You go to the north part of the city and find there a house.", "\n", {
                                    "#": "IMAGE: images/outsk_house.jpg"
                                }, {
                                    "->": "City.outskirts"
                                }, {
                                    "#f": 5
                                }],
                                "c-1": ["\n", {
                                    "->": "mayor_house"
                                }, {
                                    "#f": 5
                                }]
                            }], {
                                "#f": 5
                            }]
                        }], {
                            "#f": 5
                        }],
                        "#f": 5
                    }]
                }], {
                    "#f": 1
                }
            ],
            "mayor_house": [
                [{
                    "#": "IMAGE: images/mayor_house.jpg"
                }, "^You follow the given directions.", "\n", "^Going near the building, in the mayor's garden, you see a silluete. It moves gently a paint brush on a canvas, these moves are full of grace and dedication. You come closer to see the face of the person who awakened your admiration.", "\n", "^The face of the silluete started to get clearer and you could see its unexpected beauty. There was a ", "ev", {
                    "VAR?": "Mayor_Child"
                }, "out", "/ev", "^.", "\n", "ev", "str", "^Talk with the ", "ev", {
                    "VAR?": "Mayor_Child"
                }, "out", "/ev", "/str", "/ev", {
                    "*": ".^.c-0",
                    "flg": 20
                }, {
                    "c-0": ["\n", "ev", {
                            "VAR?": "sex"
                        }, "/ev", [{
                            "->": ".^.b",
                            "c": true
                        }, {
                            "b": ["\n", {
                                "#": "IMAGE: images/girl_dr.jpg"
                            }, {
                                "->": ".^.^.^.6"
                            }, null]
                        }],
                        [{
                            "->": ".^.b"
                        }, {
                            "b": ["\n", {
                                "#": "IMAGE: images/boy1.jpg"
                            }, {
                                "->": ".^.^.^.6"
                            }, null]
                        }], "nop", "\n", "^Your intense gaze didn't go unnoticed, ", "ev", {
                            "VAR?": "Pronoun_2"
                        }, "out", "/ev", "^ rised ", "ev", {
                            "VAR?": "Pronoun_1"
                        }, "out", "/ev", "^ eyes from the canvas and looked at you inquiringly. You've decided to quickly gather your thoughts and say something.", "\n", "^<b> You(awkwardly):</b> Hi...", "\n", "^<b> ", "ev", {
                            "VAR?": "Mayor_Child"
                        }, "out", "/ev", "^(smiles politely): </b> Greetings.", "\n", "^You were enchanted by ", "ev", {
                            "VAR?": "Pronoun_1"
                        }, "out", "/ev", "^ smile, it shone brighter than the sun itself, but you came here with the purpose to find more about the city, so you need to pull yourself together.", "\n", {
                            "->": ".^.^.^.Mayor_child_dialog"
                        }, {
                            "#f": 5
                        }
                    ]
                }], {
                    "Mayor_child_dialog": [
                        ["ev", "str", "^Give ", "ev", {
                            "VAR?": "Pronoun_3"
                        }, "out", "/ev", "^ an apple", "/str", {
                            "VAR?": "Apples"
                        }, "/ev", {
                            "*": ".^.c-0",
                            "flg": 21
                        }, "ev", "str", "^Ask ", "ev", {
                            "VAR?": "Pronoun_3"
                        }, "out", "/ev", "^ about the city.", "/str", "/ev", {
                            "*": ".^.c-1",
                            "flg": 20
                        }, "ev", "str", "^Ask where you can find the mayor.", "/str", "/ev", {
                            "*": ".^.c-2",
                            "flg": 20
                        }, "ev", "str", "^Request a meeting with the mayor.", "/str", {
                            "CNT?": ".^.^.^.mayor_info"
                        }, "/ev", {
                            "*": ".^.c-3",
                            "flg": 21
                        }, "ev", "str", "^Find out more about the ", "ev", {
                            "VAR?": "Mayor_Child"
                        }, "out", "/ev", "/str", {
                            "CNT?": ".^.^.^.city_info"
                        }, {
                            "CNT?": ".^.stay_night"
                        }, "!", "&&", "/ev", {
                            "*": ".^.c-4",
                            "flg": 21
                        }, {
                            "c-0": ["\n", "^<b>You(awkwardly):</b> Here...an apple.", "\n", "^<b>", "ev", {
                                "VAR?": "Mayor_Child"
                            }, "out", "/ev", "^(laughts): Very nice of you, thanks.", "\n", "ev", {
                                "VAR?": "Romantic"
                            }, 1, "+", {
                                "VAR=": "Romantic",
                                "re": true
                            }, "/ev", {
                                "->": ".^.^.^"
                            }, {
                                "->": ".^.^.stay_night"
                            }, {
                                "#f": 5
                            }],
                            "c-1": ["\n", "^<b> You:</b> Sorry for intrerupting you. I am new here so I would like to know more about the city and its people. Could you help me?", "\n", {
                                "->": ".^.^.^.^.city_info"
                            }, {
                                "->": ".^.^.stay_night"
                            }, {
                                "#f": 5
                            }],
                            "c-2": ["\n", "^<b> You:</b> Sorry for distracting you. Could you tell me where can I find the mayor? I need to ask him some questions.", "\n", {
                                "->": ".^.^.^.^.find_mayor"
                            }, {
                                "->": ".^.^.stay_night"
                            }, {
                                "#f": 5
                            }],
                            "c-3": ["\n", "^<b>You:</b> Could you help me meet him?", "\n", "^<b>", "ev", {
                                "VAR?": "Mayor_Child"
                            }, "out", "/ev", "^:</b> Yes, follow me. I will try to bring my father to you as soon as possible.", "\n", "^You should have guessed that ", "ev", {
                                "VAR?": "Pronoun_2"
                            }, "out", "/ev", "^ is the mayor's child,      ", "ev", {
                                "VAR?": "Pronoun_2"
                            }, "out", "/ev", "^ invites you inside the building and explains that ", "ev", {
                                "VAR?": "Pronoun_2"
                            }, "out", "/ev", "^ needs to go on the 3rd floor to call the mayor.", "\n", {
                                "#": "IMAGE: images/hall.jpg"
                            }, "^The interior of the mayor's residence is beautiful both outside and inside. The floor is covered with expensive decorative tiles, the stairs are carved from mahogany, and the chairs in the hall are upholstered in high quality fabric. You wonder where he got all these materials from in such an isolated place.", "\n", "ev", {
                                "VAR?": "Mayor_Child"
                            }, "out", "/ev", "^ doesn't come for a long time.", "\n", ["ev", "str", "^Take a look around", "/str", "/ev", {
                                "*": ".^.c-0",
                                "flg": 20
                            }, {
                                "c-0": ["\n", {
                                    "#": "IMAGE: images/collage/stay_examine.jpg"
                                }, {
                                    "->": "mayor_house.interior"
                                }, {
                                    "->": ".^.^.^.^.stay_night"
                                }, {
                                    "#f": 5
                                }]
                            }], {
                                "#f": 5
                            }],
                            "c-4": ["\n", "ev", {
                                "VAR?": "Romantic"
                            }, 1, "+", {
                                "VAR=": "Romantic",
                                "re": true
                            }, "/ev", "ev", {
                                "VAR?": "Mayor_Child"
                            }, "out", "/ev", "^ told you a lot about other people, but you started to get curious about ", "ev", {
                                "VAR?": "Pronoun_1"
                            }, "out", "/ev", "^ personality. So you try to find more about ", "ev", {
                                "VAR?": "Pronoun_3"
                            }, "out", "/ev", "^.", "\n", "^<b>You:</b> You told me pretty much about other people, but I would like to know about you too.", "\n", "^<b>", "ev", {
                                "VAR?": "Mayor_Child"
                            }, "out", "/ev", "^(shy):</b> I'm really not an interesting person, especially compared to you, you must have seen a lot beyond the mountains, while I have lived all my life between them.", "\n", ["ev", "str", "^Tell ", "ev", {
                                    "VAR?": "sex"
                                }, "/ev", [{
                                    "->": ".^.b",
                                    "c": true
                                }, {
                                    "b": ["^ her ", {
                                        "->": ".^.^.^.8"
                                    }, null]
                                }],
                                [{
                                    "->": ".^.b"
                                }, {
                                    "b": ["^ him ", {
                                        "->": ".^.^.^.8"
                                    }, null]
                                }], "nop", "^  that ", "ev", {
                                    "VAR?": "Pronoun_2"
                                }, "out", "/ev", "^ is right.", "/str", "/ev", {
                                    "*": ".^.c-0",
                                    "flg": 20
                                }, "ev", "str", "^Tell ", "ev", {
                                    "VAR?": "sex"
                                }, "/ev", [{
                                    "->": ".^.b",
                                    "c": true
                                }, {
                                    "b": ["^ her ", {
                                        "->": ".^.^.^.26"
                                    }, null]
                                }],
                                [{
                                    "->": ".^.b"
                                }, {
                                    "b": ["^ him ", {
                                        "->": ".^.^.^.26"
                                    }, null]
                                }], "nop", "^ that ", "ev", {
                                    "VAR?": "Pronoun_2"
                                }, "out", "/ev", "^ is an interesting person.", "/str", "/ev", {
                                    "*": ".^.c-1",
                                    "flg": 20
                                }, {
                                    "c-0": ["\n", "ev", {
                                        "VAR?": "Romantic"
                                    }, 4, "-", "/ev", {
                                        "VAR=": "Romantic",
                                        "re": true
                                    }, "^<b>You:</b> Hmm, I suppose that you are right. It is difficult to broaden your horizons when you are stuck in one place.", "\n", {
                                        "->": "mayor_house.Mayor_child_embarrased"
                                    }, {
                                        "->": ".^.^.^.^.stay_night"
                                    }, {
                                        "#f": 5
                                    }],
                                    "c-1": ["\n", "^<b>You:</b> It's not true. You seem very interesting to me.", "\n", "ev", {
                                        "VAR?": "Romantic"
                                    }, 2, "+", "/ev", {
                                        "VAR=": "Romantic",
                                        "re": true
                                    }, "^<b>", "ev", {
                                        "VAR?": "Mayor_Child"
                                    }, "out", "/ev", "^(shy):</b> Thank you...I understand that you are not from here and probably don't have a place to stay overnight, so, if you want you could stay here. I will provide you with a place to sleep.", "\n", {
                                        "->": ".^.^.^.^.stay_night"
                                    }, {
                                        "#f": 5
                                    }]
                                }
                            ], {
                                "#f": 5
                            }],
                            "stay_night": ["ev", "str", "^Refuse politly", "/str", "/ev", {
                                "*": ".^.c-5",
                                "flg": 20
                            }, "ev", "str", "^Refuse in a rude way", "/str", "/ev", {
                                "*": ".^.c-6",
                                "flg": 20
                            }, "ev", "str", "^Agree", "/str", "/ev", {
                                "*": ".^.c-7",
                                "flg": 20
                            }, {
                                "c-5": ["\n", "ev", {
                                    "VAR?": "Romantic"
                                }, 2, "-", "/ev", {
                                    "VAR=": "Romantic",
                                    "re": true
                                }, "^<b>You:</b> Thank you for the offer, but I will decline. I came here to ask the mayor some questions.", "\n", "^<b>", "ev", {
                                    "VAR?": "Mayor_Child"
                                }, "out", "/ev", "^:</b> Okay, If you need my help let me know, I am always here here.", "\n", {
                                    "->": ".^.^.^.^"
                                }, {
                                    "->": ".^.^.^.enter_child_room"
                                }, {
                                    "#f": 5
                                }],
                                "c-6": ["\n", "ev", {
                                    "VAR?": "Romantic"
                                }, 3, "-", "/ev", {
                                    "VAR=": "Romantic",
                                    "re": true
                                }, "^<b>You:</b> No thanks, I don't sleep in the houses of strangers and I advice you to do the same.", "\n", "^<b>", "ev", {
                                    "VAR?": "Mayor_Child"
                                }, "out", "/ev", "^(embarassed):</b> Oh, okay...", "\n", {
                                    "->": ".^.^.^.^.^.Mayor_child_embarrased"
                                }, {
                                    "->": ".^.^.^.enter_child_room"
                                }, {
                                    "#f": 5
                                }],
                                "c-7": ["\n", "ev", {
                                    "VAR?": "Romantic"
                                }, 1, "+", {
                                    "VAR=": "Romantic",
                                    "re": true
                                }, "/ev", "ev", {
                                    "VAR?": "Mayor_Child"
                                }, "out", "/ev", "^ brings you into the mayor's house.", "\n", {
                                    "#": "IMAGE: images/hall.jpg"
                                }, "^<b>You:</b> Are you related to the mayor in some way?", "\n", "^<b>", "ev", {
                                    "VAR?": "Mayor_Child"
                                }, "out", "/ev", "^:</b> Yes, he is my dad.", "\n", "^You walk up the stairs and go to the door of ", "ev", {
                                    "VAR?": "Pronoun_1"
                                }, "out", "/ev", "^ room.", "\n", {
                                    "->": ".^.^.^.enter_child_room"
                                }, {
                                    "#f": 5
                                }],
                                "#f": 5
                            }],
                            "enter_child_room": ["ev", "str", "^Enter the room", "/str", "/ev", {
                                "*": ".^.c-8",
                                "flg": 20
                            }, {
                                "c-8": ["\n", {
                                    "#": "IMAGE: images/gb_room.jpg"
                                }, "^The room is very spacious and holds a lot of light. You see paintings filling the room and one of them caught your attention.", "\n", {
                                    "#": "IMAGE: images/kidd.jpg"
                                }, "^In this painting you see a small child in a dark and small room, he stands with his back to you, but you could fell that if he turns , you would see his eyes full of tears.", "\n", {
                                    "->": ".^.^.^.choose"
                                }, {
                                    "#f": 5
                                }],
                                "#f": 5
                            }],
                            "choose": ["ev", "str", "^Tell that ", "ev", {
                                "VAR?": "Pronoun_2"
                            }, "out", "/ev", "^ has great painting skills", "/str", "/ev", {
                                "*": ".^.c-9",
                                "flg": 20
                            }, "ev", "str", "^Ask about the painting", "/str", "/ev", {
                                "*": ".^.c-10",
                                "flg": 20
                            }, {
                                "c-9": ["\n", "^<b>You:</b> Wow... you have great painting skills.", "\n", "ev", {
                                    "VAR?": "Romantic"
                                }, 1, "+", {
                                    "VAR=": "Romantic",
                                    "re": true
                                }, "/ev", "^<b>", "ev", {
                                    "VAR?": "Mayor_Child"
                                }, "out", "/ev", "^:</b> Thank you...But, I am sure that you have seen a lot of great art creations in your homeland. (hides ", "ev", {
                                    "VAR?": "Pronoun_1"
                                }, "out", "/ev", "^ pain under a smile)", "\n", "^You decide to distract her and tell ", "ev", {
                                    "VAR?": "Pronoun_3"
                                }, "out", "/ev", "^ about the art that can be seen outside of the mountains.", "\n", {
                                    "#": "IMAGE: images/Collage/choose_art.jpg"
                                }, "^<b>You:</b> I see that you are interested in the art outside of this city. Well, let me tell you about...", "\n", {
                                    "->": ".^.^.^.art"
                                }, {
                                    "#f": 5
                                }],
                                "c-10": ["\n", "^<b>You:</b> It is an interesting work, where did you get the inspiration to paint this?", "\n", "^<b>", "ev", {
                                        "VAR?": "Mayor_Child"
                                    }, "out", "/ev", "^:</b> It's nothing special, I just painted what I felt about a...child who could not live as happily as the other ones from here.", "\n", "ev", {
                                        "VAR?": "Knowledge"
                                    }, 3, "+", "/ev", {
                                        "VAR=": "Knowledge",
                                        "re": true
                                    }, "ev", {
                                        "VAR?": "Museum"
                                    }, "/ev", [{
                                        "->": ".^.b",
                                        "c": true
                                    }, {
                                        "b": ["\n", "ev", "str", "^Ask if it's related to the story of the city", "/str", "/ev", {
                                            "*": ".^.c-0",
                                            "flg": 20
                                        }, {
                                            "->": ".^.^.^.21"
                                        }, {
                                            "c-0": ["\n", "^<b>You:</b> Is it related to the story if this city?", "\n", "^<b>", "ev", {
                                                "VAR?": "Mayor_Child"
                                            }, "out", "/ev", "^:</b> Yes, you are right. This child is the \"saviour\" of this city, the descendant of the hero from the story and a relative of mine. In reality he is a scapegoat, the name of our city \"Emissarium\" tells directly about its roots.", "\n", "^<b>You:</b> Where is he now?", "\n", "^<b>", "ev", {
                                                "VAR?": "Mayor_Child"
                                            }, "out", "/ev", "^:</b> He is in the basement...All his life he was treatened miserably, because some dumb spirit said that the sacrifice must suffer lonlyness and all kind of mistreats in order to keep the prosperity of this city at least one soul shows mercy to him, then the city will turn into ruins...So everybody knows about him but don't dare to help him someway. There are people who could not stand the fact that they live off someone else's suffering and leave the city ...", "\n", ["ev", "str", "^ Ask more about the people who leave the city", "/str", {
                                                "VAR?": "Door"
                                            }, "/ev", {
                                                "*": ".^.c-0",
                                                "flg": 21
                                            }, "ev", "str", "^Ask how can you help this child", "/str", "/ev", {
                                                "*": ".^.c-1",
                                                "flg": 20
                                            }, {
                                                "c-0": ["\n", "^<b>You:</b> They left because they saw how poor the child is treated?", "\n", "^<b>", "ev", {
                                                    "VAR?": "Mayor_Child"
                                                }, "out", "/ev", "^:</b> Yes, I also wanted to leave the city because i have seen it...", "\n", ["ev", "str", "^Tell that you saw someone leaving the city", "/str", "/ev", {
                                                    "*": ".^.c-0",
                                                    "flg": 20
                                                }, {
                                                    "c-0": ["\n", "^<b>You:</b> I saw a couple leaving the city when I stayed at the outskirts.", "\n", "^<b>", "ev", {
                                                        "VAR?": "Mayor_Child"
                                                    }, "out", "/ev", "^:(smiles bitter)</b> No-one leaves this city, my father won't allow this city to be discovered.", "\n", ["ev", "str", "^Ask where these people go.", "/str", "/ev", {
                                                        "*": ".^.c-0",
                                                        "flg": 20
                                                    }, {
                                                        "c-0": ["\n", "^<b>You:</b> Then where they are going to?", "\n", "^<b>", "ev", {
                                                            "VAR?": "Mayor_Child"
                                                        }, "out", "/ev", "^:</b> ...The mayor kills all the people who want to leave and make them fertilizers for the poppy field, his beloved garden...He is a mad man who killed my mother, his own wife...and everyone knows about it but never say anything, they always stay silent about such things...", "\n", "^You are in deep shook from ", "ev", {
                                                            "VAR?": "Pronoun_1"
                                                        }, "out", "/ev", "^ words.", "\n", "^<b>", "ev", {
                                                            "VAR?": "Mayor_Child"
                                                        }, "out", "/ev", "^:</b> You know...her remains are somewhere in the field, she just wanted to leave and did nothing wrong...(sobs) But she couldn't, even after her death she still here...", "\n", "^<b>You:</b> Then where do they go?", "\n", ["ev", "str", "^ Help ", "ev", {
                                                            "VAR?": "Pronoun_3"
                                                        }, "out", "/ev", "^ leave", "/str", "/ev", {
                                                            "*": ".^.c-0",
                                                            "flg": 20
                                                        }, {
                                                            "c-0": ["\n", {
                                                                "->": "mayor_house.help_leave"
                                                            }, {
                                                                "#f": 5
                                                            }]
                                                        }], {
                                                            "#f": 5
                                                        }]
                                                    }], {
                                                        "#f": 5
                                                    }]
                                                }], {
                                                    "#f": 5
                                                }],
                                                "c-1": ["\n", "^<b>You:</b> How can we help this child?", "\n", "^<b>", "ev", {
                                                    "VAR?": "Mayor_Child"
                                                }, "out", "/ev", "^:</b> There is a key to the basement in the drawer of the mayor's desk. So we need to sneak in and take this key, then arond the midight all the three of us will leave.", "\n", "^You nod.", "\n", "^<b>", "ev", {
                                                    "VAR?": "Mayor_Child"
                                                }, "out", "/ev", "^(worried):</b> But we need to be very careful if my father finds out what we are plannig it will be the end for the both of us.", "\n", {
                                                    "->": "mayor_house.child_choice"
                                                }, {
                                                    "#f": 5
                                                }]
                                            }], {
                                                "#f": 5
                                            }]
                                        }]
                                    }],
                                    [{
                                        "->": ".^.b"
                                    }, {
                                        "b": ["\n", {
                                            "->": ".^.^.^.^"
                                        }, {
                                            "->": ".^.^.^.21"
                                        }, null]
                                    }], "nop", "\n", {
                                        "->": ".^.^.^.art"
                                    }, {
                                        "#f": 5
                                    }
                                ],
                                "#f": 5
                            }],
                            "art": ["ev", "str", "^Tell ", "ev", {
                                "VAR?": "Pronoun_3"
                            }, "out", "/ev", "^ about the Renaissance painters", "/str", "/ev", {
                                "*": ".^.c-11",
                                "flg": 20
                            }, "ev", "str", "^Tell ", "ev", {
                                "VAR?": "Pronoun_3"
                            }, "out", "/ev", "^ about Vincent van Gogh", "/str", "/ev", {
                                "*": ".^.c-12",
                                "flg": 20
                            }, "ev", "str", "^Tell ", "ev", {
                                "VAR?": "Pronoun_3"
                            }, "out", "/ev", "^ about abstract art", "/str", "/ev", {
                                "*": ".^.c-13",
                                "flg": 20
                            }, {
                                "c-11": ["\n", {
                                    "#": "IMAGE: images/renaissance.jpg"
                                }, "^<b>You:</b> ...The Renaissance painters.", "\n", "^You started to tell ", "ev", {
                                    "VAR?": "Pronoun_3"
                                }, "out", "/ev", "^ about the Renaissance painters and sculptures: Sandro Botticelli, Donattelo, Leonardo da Vinci, Michelangelo and Raphael. You took out your phone to show ", "ev", {
                                    "VAR?": "Pronoun_3"
                                }, "out", "/ev", "^ some pictures of their works and you noticed that there is no signal. It was expected. Fortunately you had some photos of their artworks from your journeys so you could show them.", "\n", "^You see that ", "ev", {
                                    "VAR?": "Pronoun_2"
                                }, "out", "/ev", "^ listened to you very attentlively and persorbed all the information you gave to ", "ev", {
                                    "VAR?": "Pronoun_3"
                                }, "out", "/ev", "^.", "\n", {
                                    "->": ".^.^.^.art_thank"
                                }, {
                                    "#f": 5
                                }],
                                "c-12": ["\n", {
                                    "#": "IMAGE: images/art_gogh.jpg"
                                }, "^<b>You:</b> ...the Vincent van Gogh's art.", "\n", "^You started to tell ", "ev", {
                                    "VAR?": "Pronoun_3"
                                }, "out", "/ev", "^ about the Van Goth's artworks, his style and about his life. You took out your phone to show ", "ev", {
                                    "VAR?": "Pronoun_3"
                                }, "out", "/ev", "^ some pictures of his works and you noticed that there is no signal. It was expected. Fortunately, you had some photos of his artworks from your journeys so you could show them.", "\n", "^You see that ", "ev", {
                                    "VAR?": "Pronoun_2"
                                }, "out", "/ev", "^ listened to you very attentlively and persorbed all the information you gave to ", "ev", {
                                    "VAR?": "Pronoun_3"
                                }, "out", "/ev", "^.", "\n", {
                                    "->": ".^.^.^.art_thank"
                                }, {
                                    "#f": 5
                                }],
                                "c-13": ["\n", {
                                    "#": "IMAGE: images/contemp.jpg"
                                }, "^<b>You:</b> ...the absract art.", "\n", "^You started to tell ", "ev", {
                                    "VAR?": "Pronoun_3"
                                }, "out", "/ev", "^ about the abstract art, that the world can be painted not only as we see it but also how we feel it. You took out your phone to show ", "ev", {
                                    "VAR?": "Pronoun_3"
                                }, "out", "/ev", "^ some pictures of the artworks of that kind and you noticed that there is no signal. It was expected. Fortunately, you had some photos of abstract art that ypu have seen in your journeys so you could show them.", "\n", "^You see that ", "ev", {
                                    "VAR?": "Pronoun_2"
                                }, "out", "/ev", "^ listened to you very attentlively and persorbed all the information you gave to ", "ev", {
                                    "VAR?": "Pronoun_3"
                                }, "out", "/ev", "^.", "\n", {
                                    "->": ".^.^.^.art_thank"
                                }, {
                                    "#f": 5
                                }],
                                "#f": 5
                            }],
                            "art_thank": ["^After you are done talking, ", "ev", {
                                "VAR?": "Pronoun_2"
                            }, "out", "/ev", "^ looks at you with a sad expression.", "\n", "^<b>You:</b> What happened?", "\n", "^<b>", "ev", {
                                "VAR?": "Mayor_Child"
                            }, "out", "/ev", "^:</b> I want to leave this city, it fells like I am inside of a cage. Would it be possible to leave it with you?", "\n", "^You see in ", "ev", {
                                "VAR?": "Pronoun_1"
                            }, "out", "/ev", "^ eyes an imploring glance.", "\n", "ev", "str", "^Ask why ", "ev", {
                                "VAR?": "Pronoun_2"
                            }, "out", "/ev", "^ thinks so", "/str", "/ev", {
                                "*": ".^.c-14",
                                "flg": 20
                            }, {
                                "c-14": ["\n", "^<b>You:</b> Why do you think of thiscity as a \"cage\", it is safe and beautiful, the outside world is full of danger, wars and different problems.", "\n", "^A bitter smile appeared on ", "ev", {
                                    "VAR?": "Pronoun_1"
                                }, "out", "/ev", "^ face, ", "ev", {
                                    "VAR?": "Pronoun_2"
                                }, "out", "/ev", "^ turns ", "ev", {
                                    "VAR?": "Pronoun_1"
                                }, "out", "/ev", "^ back at you and pulls the top of ", "ev", {
                                    "VAR?": "Pronoun_1"
                                }, "out", "/ev", "^ clothes. You see scars all over ", "ev", {
                                    "VAR?": "Pronoun_1"
                                }, "out", "/ev", "^ back.", "\n", "^It shooked you.", "\n", {
                                    "->": ".^.^.^.ask_scar"
                                }, {
                                    "#f": 5
                                }],
                                "#f": 5
                            }],
                            "ask_scar": ["ev", "str", "^Ask where ", "ev", {
                                "VAR?": "Pronoun_2"
                            }, "out", "/ev", "^ got these scars from.", "/str", "/ev", {
                                "*": ".^.c-15",
                                "flg": 20
                            }, {
                                "c-15": ["\n", "^<b>You:</b> God, where do you got these scars from?", "\n", "^<b>", "ev", {
                                    "VAR?": "Mayor_Child"
                                }, "out", "/ev", "^:</b> Well, this city is not as perfect as you might think. To be honest, the people here are not as nice as they seem, and the mayor is one of the rottenest of them all.  He beat my mother when she was still alive, and now he beats me...", "\n", ["ev", "str", "^Help ", "ev", {
                                    "VAR?": "Pronoun_3"
                                }, "out", "/ev", "^ to leave", "/str", "/ev", {
                                    "*": ".^.c-0",
                                    "flg": 20
                                }, "ev", "str", "^Tell that the outside world is crueler", "/str", "/ev", {
                                    "*": ".^.c-1",
                                    "flg": 20
                                }, {
                                    "c-0": ["\n", "^<b>You:</b> Yes, I will help you.", "\n", "^The mayor's child looks at you with a grateful gaze.", "\n", {
                                        "->": "mayor_house.help_leave"
                                    }, {
                                        "->": ".^.^.^.^.^.leave_urgently"
                                    }, {
                                        "#f": 5
                                    }],
                                    "c-1": ["\n", "ev", {
                                        "VAR?": "Romantic"
                                    }, 6, "-", "/ev", {
                                        "VAR=": "Romantic",
                                        "re": true
                                    }, "^<b>You:</b> The outside world is crueler that you might think and it's better to live here. As about the scars, if you don't want to get beaten what about moving to another house?", "\n", "^Your words make ", "ev", {
                                        "VAR?": "Pronoun_3"
                                    }, "out", "/ev", "^ shudder, ", "ev", {
                                        "VAR?": "Pronoun_2"
                                    }, "out", "/ev", "^ pulls ", "ev", {
                                        "VAR?": "Pronoun_1"
                                    }, "out", "/ev", "^ top back and turns your face to you.", "\n", ["ev", "str", "^Ask why didn't he just let ", "ev", {
                                        "VAR?": "Pronoun_3"
                                    }, "out", "/ev", "^ leave.", "/str", "/ev", {
                                        "*": ".^.c-0",
                                        "flg": 20
                                    }, {
                                        "c-0": ["\n", "^<b>", "ev", {
                                            "VAR?": "Mayor_Child"
                                        }, "out", "/ev", "^:</b> No-one can leave this city...The mayor kills all the people who want to leave and make them fertilizers for the poppy field, his beloved garden...The mayor is a mad man who killed my mother, his own wife everyone knows about it but never say anything, they always stay silent about such things!", "\n", "^You are in deep shook from ", "ev", {
                                            "VAR?": "Pronoun_1"
                                        }, "out", "/ev", "^ words.", "\n", "^<b>", "ev", {
                                            "VAR?": "Mayor_Child"
                                        }, "out", "/ev", "^:</b> You know...her remains are somewhere in the field, she just wanted to leave and did nothing wrong...(sobs) But she couldn't, even after her death she still here...", "\n", "^The things turned out very and very bad, you want to leave this city as soon as possible.", "\n", {
                                            "->": ".^.^.^.^.^.^.^.leave_urgently"
                                        }, {
                                            "#f": 5
                                        }]
                                    }], {
                                        "#f": 5
                                    }]
                                }], {
                                    "#f": 5
                                }],
                                "#f": 5
                            }],
                            "leave_urgently": ["ev", "str", "^Tell ", "ev", {
                                "VAR?": "Pronoun_3"
                            }, "out", "/ev", "^ that you need to leave.", "/str", "/ev", {
                                "*": ".^.c-16",
                                "flg": 20
                            }, {
                                "c-16": ["\n", "^<b>You:</b> I need to leave...", "\n", "ev", {
                                    "VAR?": "Mayor_Child"
                                }, "out", "/ev", "^ wanted to say something but you left quickly ", "ev", {
                                    "VAR?": "Pronoun_1"
                                }, "out", "/ev", "^ room in order to save your life.", "\n", "^You got down the stairs, but bumped into someone and fell.", "\n", "^Here was a man.", "\n", {
                                    "#": "IMAGE: images/mayor.jpg"
                                }, "^He looks at you with disgrace.You noticed two huge men behind him.", "\n", "^<b>One man:</b> Mayor, what should we do with this rat?", "\n", ["ev", "str", "^Stand up", "/str", "/ev", {
                                    "*": ".^.c-0",
                                    "flg": 20
                                }, "ev", "str", "^Stand still", "/str", "/ev", {
                                    "*": ".^.c-1",
                                    "flg": 20
                                }, {
                                    "c-0": ["\n", {
                                        "->": ".^.^.^.^.^.basement"
                                    }, {
                                        "#f": 5
                                    }],
                                    "c-1": ["\n", {
                                        "->": ".^.^.^.^.^.basement"
                                    }, {
                                        "#f": 5
                                    }]
                                }], {
                                    "#f": 5
                                }],
                                "#f": 5
                            }],
                            "basement": ["^The Mayor's gaze is full of  venom.", "\n", "^<b>Mayor:</b> I don't think I have seen you before...Take him to the basement.", "\n", "^The men took you by the shoulders to the basement.", "\n", {
                                "->": ".^.^.^.^.die"
                            }, {
                                "#f": 5
                            }]
                        }], {
                            "#f": 1
                        }
                    ],
                    "child_choice": [
                        [{
                                "#": "IMAGE: images/collage/saveKid_sleep.jpg"
                            },
                            ["ev", "str", "^Save the child", "/str", "/ev", {
                                "*": ".^.c-0",
                                "flg": 20
                            }, "ev", "str", "^Don't save the child", "/str", "/ev", {
                                "*": ".^.c-1",
                                "flg": 20
                            }, {
                                "c-0": ["\n", "^<b>You:</b> How can we save him?", "\n", "^<b>", "ev", {
                                    "VAR?": "Mayor_Child"
                                }, "out", "/ev", "^:</b> We need to go to my father's office and steal the key to the basement.", "\n", "^You both sneak into the mayor's office.", "\n", {
                                    "#": "IMAGE: images/desk.jpg"
                                }, "^You start to search for the key and your companion helps you with that, finally you found it in the mayor's desk.", "\n", ["ev", "str", "^Change your mind and don't save the child", "/str", "/ev", {
                                    "*": ".^.c-0",
                                    "flg": 20
                                }, "ev", "str", "^Take the key", "/str", "/ev", {
                                    "*": ".^.c-1",
                                    "flg": 20
                                }, {
                                    "c-0": ["\n", "^You: I don't really think that I can help you with it, sorry.", "\n", {
                                        "->": "mayor_house.become_scape_goat"
                                    }, {
                                        "->": ".^.^.dont_save"
                                    }, {
                                        "#f": 5
                                    }],
                                    "c-1": ["\n", {
                                        "#": "IMAGE: images/key.jpg"
                                    }, "^You take the key and run to the basement to save the child.", "\n", {
                                        "->": ".^.^.dont_save"
                                    }, {
                                        "#f": 5
                                    }],
                                    "dont_save": [{
                                        "->": ".^.^.^.^.^.take_child"
                                    }, {
                                        "#f": 5
                                    }]
                                }], {
                                    "#f": 5
                                }],
                                "c-1": ["\n", "^<b>You:</b> You, know...I don't think that I can help you with it, sorry.", "\n", {
                                    "->": ".^.^.^.^.^.become_scape_goat"
                                }, {
                                    "->": ".^.^.^.take_child"
                                }, {
                                    "#f": 5
                                }],
                                "#f": 5,
                                "#n": "save_child"
                            }], {
                                "take_child": ["ev", "str", "^Take the child", "/str", "/ev", {
                                    "*": ".^.c-2",
                                    "flg": 20
                                }, {
                                    "c-2": ["\n", {
                                        "#": "IMAGE: images/go_basement.jpg"
                                    }, "^You opened the door, an awful smell hit your nose. The room was small, it has the size of a mop closet. You see a little child lying on its floor, he is malnourished and looks very week.", "\n", "^You try to get him to his senses.", "\n", "^<b>You:</b> Wake up!...Can you here me?", "\n", "^The child opens his eyes. They are blank as if the will to leave left this small body of him.", "\n", "^You ask the ", "ev", {
                                        "VAR?": "Mayor_Child"
                                    }, "out", "/ev", "^ where you can wash yp this kid and ", "ev", {
                                        "VAR?": "Pronoun_2"
                                    }, "out", "/ev", "^ escorts you to the bathroom.", "\n", "^The water got black in an instant after washing him a bit, all his body was full of sores and skin irritations. You feel awful when you realise that the people to whome you talk before knew about the conditions in that lived this child and how they did not do anything.", "\n", "^The ", "ev", {
                                        "VAR?": "Mayor_Child"
                                    }, "out", "/ev", "^ brings some clothes for the child.", "\n", ["ev", "str", "^Leave the city", "/str", {
                                        "VAR?": "Romantic"
                                    }, 8, ">=", "/ev", {
                                        "*": ".^.c-0",
                                        "flg": 21
                                    }, "ev", "str", "^Leave the city  child", "/str", {
                                        "VAR?": "Romantic"
                                    }, 8, "<", "/ev", {
                                        "*": ".^.c-1",
                                        "flg": 21
                                    }, {
                                        "c-0": ["\n", "^As soon as three of you exit the house an earthquake starts. The mayor's child helps you to pass unnoteced through the city so you could leave.", "\n", "^You came to the entrance of the cave from where you came from and turn around for the last time.", "\n", "^The city is in ruins...", "\n", {
                                            "#": "IMAGE: images/ruins.jpg"
                                        }, "^Well, you don't really have any remorse about doing this...It's wrong to build happiness on someone else's grief.", "\n", "^You go through the cave and leave this city forever with the child and the ", "ev", {
                                            "VAR?": "Mayor_Child"
                                        }, "out", "/ev", "^.", "\n", "^THE END", "\n", "end", {
                                            "#f": 5
                                        }],
                                        "c-1": ["\n", "^As soon as three of you exit the house an earthquake starts. The mayor's child helps you to pass unnoteced through the city so you could leave.", "\n", "^You came to the entrance of the cave from where you came from and turn around for the last time.", "\n", "^The city starts to ruin...", "\n", "^<b> ", "ev", {
                                            "VAR?": "Mayor_Child"
                                        }, "out", "/ev", "^(sadly):</b> I hope you both will have a nice journey...", "\n", "^<b> You: </b> What about you? Did you not want to leave?", "\n", "^<b> ", "ev", {
                                            "VAR?": "Mayor_Child"
                                        }, "out", "/ev", "^: </b> I don't deserve it...", "\n", "^The ", "ev", {
                                            "VAR?": "Mayor_Child"
                                        }, "out", "/ev", "^ runs back to the city.", "\n", "^You feel sad, but now you have a life in your hands and you need to take responsability for saving this child...", "\n", "^You look one more time at the city...It is in ruins...", "\n", {
                                            "#": "IMAGE: images/ruins.jpg"
                                        }, "^You hear screams coming out from the city...but you don't really have any remorse about doing this...It's wrong to build happiness on someone else's grief.", "\n", "^You go through the cave and leave this city forever with the child in your hands.", "\n", "^THE END", "\n", "end", {
                                            "#f": 5
                                        }]
                                    }], {
                                        "#f": 5
                                    }],
                                    "#f": 5
                                }]
                            }
                        ], {
                            "#f": 1
                        }
                    ],
                    "help_leave": ["ev", {
                        "VAR?": "Romantic"
                    }, 1, "+", {
                        "VAR=": "Romantic",
                        "re": true
                    }, "/ev", "^Then the ", "ev", {
                        "VAR?": "Mayor_Child"
                    }, "out", "/ev", "^ tells you about a child that is the \"saviour\" of this city, the descendant of the hero that founded this city and a relative of ", "ev", {
                        "VAR?": "Pronoun_1"
                    }, "out", "/ev", "^. In reality he is a scapegoat, the name of our city \"Emissarium\" tells directly about this roots.", "\n", "^<b>You:</b> Where is he now?", "\n", "^<b>", "ev", {
                        "VAR?": "Mayor_Child"
                    }, "out", "/ev", "^:</b> He is in the basement...All his life he was treatened miserably, because some dumb creature said that the sacrifice must suffer lonlyness and all kind of mistreats in order to keep the prosperity of this city at least one soul shows mercy to him, then the city will turn into ruins...So everybody knows about him but don't dare to help him someway. There are people who could not stand the fact that they live off someone else's suffering and leave the city ...", "\n", {
                        "->": ".^.^.child_choice.0.save_child"
                    }, {
                        "#f": 1
                    }],
                    "become_scape_goat": ["ev", {
                        "VAR?": "Mayor_Child"
                    }, "out", "/ev", "^ turned blue of sadness.", "\n", {
                        "#": "IMAGE: images/sofa_2.jpg"
                    }, "^You go back and lay on the sofa, soon you fall asleep.", "\n", "^You open your eyes and all that you see is darkness also there is an awful smell in the air. You try to stand up and you body feels strange...It is smaller and thinner...It's as if you got to a size of a child. For a moment you tought that it is a nightmare, but it felt to real. You start to scream and hit the walls, then you find the door and punch it with your week hands, but got tired very fast and your voice became broken..You could not say any wordsm just some weird mumbling came out of your mouth.", "\n", "^You feel helpless.", "\n", "^Few moments later you hear some steps, you started to hit the door harder in order to be heard. Then you heared a voice from afar \" What are you looking for?\", you hit again, but the sounds of steps were getting quiter and our hopeless rises with each step.", "\n", "^You spent a few days in this state, nobody came...Sometimes when you wake up you find a piece of bread on the floor and some wate, but it is not sufficient to feed you up, you are malnutricioned, lonely and broken hearted...You wander if you got in this condition because you refused to save the child back then...The days passed, or maybe months or event years...You don't really know, because you started to lose your senses one before another...You don't feel alive, you just...exist...", "\n", "^THE END", "\n", "end", {
                        "#f": 1
                    }],
                    "mayor_info": ["^<b>", "ev", {
                        "VAR?": "Mayor_Child"
                    }, "out", "/ev", "^:</b> As far as I know, he must be in the residence.", "\n", {
                        "->": ".^.^.Mayor_child_dialog"
                    }, {
                        "#f": 1
                    }],
                    "Mayor_child_embarrased": ["^You see a sad and embarassed look on ", "ev", {
                        "VAR?": "Pronoun_1"
                    }, "out", "/ev", "^ face.", "\n", {
                        "->": ".^.^.Mayor_child_dialog"
                    }, {
                        "#f": 1
                    }],
                    "find_mayor": [{
                        "->": ".^.^.mayor_info"
                    }, {
                        "#f": 1
                    }],
                    "city_info": [
                        ["^<b>", "ev", {
                            "VAR?": "Mayor_Child"
                        }, "out", "/ev", "^:</b> Sure, but instead just answering you questions what about going on a walk? This way I could not only tell you about the city but also show it to you.", "\n", "ev", "str", "^Agree", "/str", "/ev", {
                            "*": ".^.c-0",
                            "flg": 20
                        }, "ev", "str", "^Refuse.", "/str", "/ev", {
                            "*": ".^.c-1",
                            "flg": 20
                        }, {
                            "c-0": ["\n", "ev", {
                                "VAR?": "Romantic"
                            }, 2, "+", "/ev", {
                                "VAR=": "Romantic",
                                "re": true
                            }, "^<b>You:</b> It would be perfect, thank you!", "\n", "^<b>", "ev", {
                                "VAR?": "Mayor_Child"
                            }, "out", "/ev", "^:</b> It's my pleasure. Just let me pack all this stuff (points at ", "ev", {
                                "VAR?": "Pronoun_1"
                            }, "out", "/ev", "^ art tools).", "\n", "^<b>You:</b> Yes,sure. Let me help you.", "\n", "^You help ", "ev", {
                                "VAR?": "Pronoun_3"
                            }, "out", "/ev", "^ pack ", "ev", {
                                "VAR?": "Pronoun_1"
                            }, "out", "/ev", "^ things and then go for a walk.", "\n", {
                                "#": "IMAGE: images/fest_walk.jpg"
                            }, "^You once again see the streets you walked on not long time ago, the festively decorated houses, people having fun.", "\n", "^On the walk ", "ev", {
                                "VAR?": "Pronoun_2"
                            }, "out", "/ev", "^ points at different places on the street and starts to tell you about people living there.", "\n", "^<b>", "ev", {
                                "VAR?": "Mayor_Child"
                            }, "out", "/ev", "^(enthusiastically):</b> The museum you see there (points to another part of the street) is one of the first buildings in this city... This flower boutique was built long before my grandfather was born. There are different types of flowers, but my favorite are sunflowers (smiles)... See the woman who sells food? (points)", "\n", "^<b> You:</b> (nod)", "\n", "^<b>", "ev", {
                                "VAR?": "Mayor_Child"
                            }, "out", "/ev", "^:</b> She's the biggest gossip girl in our city. If she sees you doing something then all people from here will know about it. I wonder she does it. (laughs slightly)", "\n", "^<b>You:</b> What are you celebrating today?", "\n", "^<b>", "ev", {
                                "VAR?": "Mayor_Child"
                            }, "out", "/ev", "^:</b> Celebrating?", "\n", "^<b>You:</b> Yes, I see that all the houses are decorated, people are dancing on the streets, there is a fair and things like this.", "\n", "^<b>", "ev", {
                                "VAR?": "Mayor_Child"
                            }, "out", "/ev", "^:</b> It's a day like every other one(looks at you surprised) Is it different from where you came from?", "\n", "^<b>You:</b> Well, yes, in my homeland we decorate houses only on special ocasions and it’s the same with dancing.", "\n", "^<b>", "ev", {
                                "VAR?": "Mayor_Child"
                            }, "out", "/ev", "^(curious):</b> Then...What are you doing?", "\n", "^<b>You:</b> Well,usually we just take care of our business struggling to earn money.", "\n", "^<b>", "ev", {
                                "VAR?": "Mayor_Child"
                            }, "out", "/ev", "^(confused):</b> Oh...okay.", "\n", "^After a few moments ", "ev", {
                                "VAR?": "Pronoun_2"
                            }, "out", "/ev", "^ continued to speak about the people of this city, who does what and where he/she lives.", "\n", {
                                "->": ".^.^.^.^.Mayor_child_dialog"
                            }, {
                                "#f": 5
                            }],
                            "c-1": ["\n", "^<b>You:</b> Sorry, but I don't really have time for this.", "\n", "^<b>", "ev", {
                                "VAR?": "Mayor_Child"
                            }, "out", "/ev", "^(dissapointed):</b> Oh...okay...I understand.", "\n", {
                                "->": ".^.^.^.^.Mayor_child_dialog"
                            }, {
                                "#f": 5
                            }]
                        }], {
                            "#f": 1
                        }
                    ],
                    "interior": [
                        ["ev", "str", "^Stay here", "/str", "/ev", {
                            "*": ".^.c-0",
                            "flg": 20
                        }, "ev", "str", "^Examine the first floor", "/str", "/ev", {
                            "*": ".^.c-1",
                            "flg": 20
                        }, "ev", "str", "^Go back to the central hall", "/str", "/ev", {
                            "*": ".^.c-2",
                            "flg": 20
                        }, {
                            "c-0": ["\n", {
                                "#": "IMAGE: images/hall.jpg"
                            }, "^The Mayor's child comes down the stairs with ", "ev", {
                                "VAR?": "Pronoun_1"
                            }, "out", "/ev", "^ father.", "\n", {
                                "->": ".^.^.^.^.greet"
                            }, {
                                "#f": 5
                            }],
                            "c-1": ["\n", {
                                "#": "IMAGE: images/examine.jpg"
                            }, "^You move into the next room. Here you can see no less rich interior, everything is made of quality materials and with good taste. Moving around you start to hear some noises coming from a hall, you coome closer to it.", "\n", ["ev", "str", "^Proceed to move in the hall's direction", "/str", "/ev", {
                                "*": ".^.c-0",
                                "flg": 20
                            }, {
                                "c-0": ["\n", {
                                    "#": "IMAGE: images/proceed.jpg"
                                }, "^You hear some muffled sounds from this direction. You got scared, but your legs are moving on your own to it.", "\n", "ev", {
                                    "VAR?": "Knowledge"
                                }, 1, "+", {
                                    "VAR=": "Knowledge",
                                    "re": true
                                }, "/ev", "^You see that this hall has a way down to a basement, the noises come from there.", "\n", {
                                    "->": "mayor_house.noise_source"
                                }, {
                                    "#f": 5
                                }]
                            }], {
                                "#f": 5
                            }],
                            "c-2": ["\n", "^You decide to go back to the central hall in order to avoid possible trouble.", "\n", {
                                "->": ".^.^.^.^.go_back"
                            }, {
                                "#f": 5
                            }]
                        }], {
                            "#f": 1
                        }
                    ],
                    "greet": [
                        ["ev", "str", "^Greet the Mayor", "/str", "/ev", {
                            "*": ".^.c-0",
                            "flg": 20
                        }, {
                            "c-0": ["\n", {
                                "#": "IMAGE: images/mayor.jpg"
                            }, "^<b>You:</b> Good evening, Mr.Mayor.", "\n", "^<b>Mayor:</b> Greetings, newcomer, my child told me about you, but I would like if you could share some information with me. For example, who are you? How did you get here?", "\n", {
                                "->": ".^.^.answer"
                            }, {
                                "#f": 5
                            }],
                            "answer": ["ev", "str", "^Tell him who you are and how you got here", "/str", "/ev", {
                                "*": ".^.c-1",
                                "flg": 20
                            }, {
                                "c-1": ["\n", "^<b>You:</b> I am a traveler, I spend time exploring the world and finding unique places like your city. Honestly, this is the most wonderful place I have ever seen in my entire life. As for how I got to this city, it was through a cave in the mountains. It is located in the south.", "\n", "^<b>Mayor:</b> That's...interesting. (smirks)", "\n", "^For a second, a strange spark of malevolence flickered in the mayor's eyes, but it disappeared in the blink of an eye. Maybe you are overthinking and it seemed that way to you.", "\n", "^<b>Mayor(serious):</b> As you can see, our city is an isolated place, so we would appreciate it if it stays that way. It's incredible how you got here and I'm sure you've come a long way to this place, but it means a lot to us. My people grow up in comfortable conditions for generations and will not be able to withstand the cruelty of the outside world.", "\n", "^<b>You:</b> Yes, I understand.", "\n", "^<b>Mayor:</b> Very good, so as a token of appreciation, I would like to ask if you want to stay in this city or return to your homeland. But if you choose to stay, you cannot go beyond the mountains, and if you leave, you should guarantee that you will never return.", "\n", "^Mayor's words caught you off guard, but you need to make a choice.", "\n", {
                                    "->": ".^.^.^.make_choice"
                                }, {
                                    "#f": 5
                                }],
                                "#f": 5
                            }],
                            "make_choice": ["ev", "str", "^Stay", "/str", "/ev", {
                                "*": ".^.c-2",
                                "flg": 20
                            }, "ev", "str", "^Leave", "/str", "/ev", {
                                "*": ".^.c-3",
                                "flg": 20
                            }, {
                                "c-2": ["\n", "^<b>You:</b> I would like to stay in this city.", "\n", "^<b>Mayor(politely):</b> This is a wise choice, welcome to our family of citizens. Also, don't worry about where to stay, there is another man who came to the city from the outside world, he has been living for more than 40 years on the northern outskirts. I'm sure he would be happy to take you in.", "\n", "^He looks at his child looking for support.", "\n", "^<b>", "ev", {
                                    "VAR?": "Mayor_Child"
                                }, "out", "/ev", "^(bewilderedly):</b> Yeah, he is indeed a very nice man and the north outskirts are a beautiful place to stay.", "\n", "^You think about their offer and, having decided to stay, see no reason to change your mind.", "\n", [
                                    [{
                                        "->": ".^.^.^.^.^.agree"
                                    }, {
                                        "#f": 5,
                                        "#n": "stay"
                                    }], null
                                ], {
                                    "#f": 5
                                }],
                                "c-3": ["\n", "^<b>You:</b> I would like to leave.", "\n", "^<b>Mayor:</b> Well, that's sad, but I understand that you are bounded to your roots. At least you could stay here overnight and leave tommorow.", "\n", {
                                    "->": ".^.^.^.agree"
                                }, {
                                    "#f": 5
                                }],
                                "#f": 5
                            }],
                            "agree": ["ev", "str", "^Agree", "/str", "/ev", {
                                "*": ".^.c-4",
                                "flg": 20
                            }, {
                                "c-4": ["\n", "^<b>You:</b> Thank you very much, I will do so.", "\n", "ev", {
                                        "CNT?": ".^.^.^.make_choice.c-2.16.stay"
                                    }, "/ev", [{
                                        "->": ".^.b",
                                        "c": true
                                    }, {
                                        "b": ["\n", {
                                            "->": "mayor_house.agree_stay"
                                        }, {
                                            "->": ".^.^.^.8"
                                        }, null]
                                    }],
                                    [{
                                        "->": ".^.b"
                                    }, {
                                        "b": ["\n", {
                                            "->": "mayor_house.agree_leave"
                                        }, {
                                            "->": ".^.^.^.8"
                                        }, null]
                                    }], "nop", "\n", {
                                        "#f": 5
                                    }
                                ],
                                "#f": 5
                            }]
                        }], {
                            "#f": 1
                        }
                    ],
                    "agree_leave": ["ev", {
                            "VAR?": "Alertness"
                        }, 6, ">=", {
                            "VAR?": "Door"
                        }, "&&", "/ev", [{
                            "->": ".^.b",
                            "c": true
                        }, {
                            "b": ["\n", {
                                "->": "north_cave.north_wake_up"
                            }, {
                                "->": ".^.^.^.9"
                            }, null]
                        }],
                        [{
                            "->": ".^.b"
                        }, {
                            "b": ["\n", {
                                "->": ".^.^.^.^.awake"
                            }, {
                                "->": ".^.^.^.9"
                            }, null]
                        }], "nop", "\n", {
                            "#f": 1
                        }
                    ],
                    "agree_stay": ["ev", {
                            "VAR?": "Knowledge"
                        }, 6, ">=", "/ev", [{
                            "->": ".^.b",
                            "c": true
                        }, {
                            "b": ["\n", "^The Mayor sends someone to bring the old man and together you go to his house.", "\n", {
                                "#": "IMAGE: images/outsk_house_night.jpg"
                            }, "^The man asks if you want to sleep on the sofa or on the armchair until he gets a bed for you.", "\n", {
                                "#": "IMAGE: images/collage/goutsk_sofa_armchair.jpg"
                            }, "ev", "str", "^Sleep on the sofa", "/str", "/ev", {
                                "*": ".^.c-0",
                                "flg": 20
                            }, "ev", "str", "^Sleep in the armchair", "/str", "/ev", {
                                "*": ".^.c-1",
                                "flg": 20
                            }, {
                                "->": ".^.^.^.7"
                            }, {
                                "c-0": ["\n", {
                                    "#": "IMAGE: images/sofa.jpg"
                                }, {
                                    "->": ".^.^.^.^.^.awake"
                                }, {
                                    "#f": 5
                                }],
                                "c-1": ["\n", {
                                    "#": "IMAGE: images/arm.jpg"
                                }, {
                                    "->": ".^.^.^.^.^.awake"
                                }, {
                                    "#f": 5
                                }]
                            }]
                        }],
                        [{
                            "->": ".^.b"
                        }, {
                            "b": ["\n", "^You got escorted by the mayor's child to the guest room and ", "ev", {
                                "VAR?": "Pronoun_2"
                            }, "out", "/ev", "^ wishes you good night. You felt tired from walking all the way, so you fell asleep as soon as your head hit the pillow.", "\n", "^Next day, the ", "ev", {
                                "VAR?": "Mayor_Child"
                            }, "out", "/ev", "^ accompanied you to the outskirts where you saw a nice house near the mountains.", "\n", {
                                "#": "IMAGE: images/outsk_house.jpg"
                            }, "^The ", "ev", {
                                "VAR?": "Mayor_Child"
                            }, "out", "/ev", "^ knocked the door and houseowner opened it, you both were invited inside and the mayor's child explained your situation and that it would be nice if the old man lets you to live here with him.", "\n", {
                                "#": "IMAGE: images/outsk_man.jpg"
                            }, "^The old man was beaming with happiness, he was very glad to take you in and confessed that he felt very lonely for the past decades because only an outsider could understand his feeling, but until that moment he was the only one.", "\n", "^It's been a few weeks and you've been enjoying them wholeheartedly. Here every day is a holiday, people are always friendly, you don’t have to worry about making money, because there is no monetary system, as if you are in a fairy tale. You miss your friends from the outside but you don't want to go back to the difficulties that you encountered before.", "\n", "^There is one thing that makes you think, a strange thing. Sometimes people come to the old man, and he goes with these people to the northern cave to help them leave the city. You don't understand why anyone would want to leave this place, here nobody needs to worry about making a living, there are no wars, any significant conflicts, hunger and pain, it's like a piece of heaven on earth. But sometimes you wonder how the northern cave looks like, is it the same like the southern one or looks different?", "\n", "ev", "str", "^Ask the old man about the cave", "/str", "/ev", {
                                "*": ".^.c-0",
                                "flg": 20
                            }, {
                                "->": ".^.^.^.7"
                            }, {
                                "c-0": ["\n", "^You approach the old man.", "\n", "^<b>You:</b> Where does the northern cave lead? Is it the same as the one through that I came here?", "\n", "^<b>Old man:</b> It leads to the outside world as the one you came through.", "\n", "^<b>You:</b> Could you lead me there?", "\n", "^<b>Old man(sorrowful):</b> You made a promise to the mayor that you would not leave the city, therefore, in order not to lose his trust, I advise you not to delve into this issue either. Live here happily, as before, in these few weeks.", "\n", "^You were surprised that this simple question would cause such reaction.", "\n", {
                                        "#": "IMAGE: images/collage/cave_noCave.jpg"
                                    },
                                    ["ev", "str", "^Never Go to the cave", "/str", "/ev", {
                                        "*": ".^.c-0",
                                        "flg": 20
                                    }, "ev", "str", "^Take a look at the cave when the man falls asleep.", "/str", "/ev", {
                                        "*": ".^.c-1",
                                        "flg": 20
                                    }, {
                                        "c-0": ["\n", {
                                            "#": "IMAGE: images/never_north_cave.jpg"
                                        }, "^You decided to follow the old man's advice. He lived here for a long time and knows better that will be good for you, also you really don't want to loose the mayor's trust.", "\n", {
                                            "#": "IMAGE: images/city_le.jpg"
                                        }, "^Your life in this city goes on, you have adapted well to this environment, people have begun to sympathize with you and often invite you to parties or ask you for help. You feel like a real citizen of this city, as if there was no life before it.", "\n", "^Sometimes you missed your old days when you traveled around the world, but what if you did all this journey just to get here? What if this place is your destiny?", "\n", "^It seems so.", "\n", "^THE END", "\n", "end", {
                                            "#f": 5
                                        }],
                                        "c-1": ["\n", {
                                            "->": "north_cave"
                                        }, {
                                            "#f": 5
                                        }]
                                    }], {
                                        "#f": 5
                                    }
                                ]
                            }]
                        }], "nop", "\n", {
                            "#f": 1
                        }
                    ],
                    "awake": [
                        ["^You woke up in a dark place by being slapped on the face. You see the mayor and  some brutal men behind him.", "\n", ["ev", {
                                "^->": "mayor_house.awake.0.2.$r1"
                            }, {
                                "temp=": "$r"
                            }, "str", {
                                "->": ".^.s"
                            },
                            [{
                                "#n": "$r1"
                            }], "/str", "/ev", {
                                "*": ".^.^.c-0",
                                "flg": 18
                            }, {
                                "s": ["^What is happening?", {
                                    "->": "$r",
                                    "var": true
                                }, null]
                            }
                        ], {
                            "c-0": ["ev", {
                                    "^->": "mayor_house.awake.0.c-0.$r2"
                                }, "/ev", {
                                    "temp=": "$r"
                                }, {
                                    "->": ".^.^.2.s"
                                },
                                [{
                                    "#n": "$r2"
                                }], "\n", "^<b>Mayor:</b> Did you really think that you could leave this place? We are not so naive to let someone spill our secrets outside the walls.", "\n", "^The Mayor addresses to his guys.", "\n", "^<b>Mayor(mockingly):</b> Let's welcome our dear guest with some aromatherapy, I heard it's good for relaxation.", "\n", "^The men took you by the shoulders.", "\n", {
                                    "->": ".^.^.^.^.die"
                                }, {
                                    "#f": 5
                                }
                            ]
                        }], {
                            "#f": 1
                        }
                    ],
                    "die": [
                        ["ev", "str", "^Oppose", "/str", "/ev", {
                            "*": ".^.c-0",
                            "flg": 20
                        }, {
                            "c-0": ["\n", "^You try to resist, but you are too weak compared to them.", "\n", {
                                "#": "IMAGE: images/basement.jpg"
                            }, "^They locked you in an isolated room in the basement and started releasing some kind of gas into the room. After a while, you began to choke, your lungs were on fire and your mind was going blank...You left this place... taking a one-way ticket out of city, but its price was your life.", "\n", "^THE END", "\n", "end", {
                                "#f": 5
                            }]
                        }], {
                            "#f": 1
                        }
                    ],
                    "noise_source": [
                        ["ev", "str", "^ Go back to the central hall", "/str", "/ev", {
                            "*": ".^.c-0",
                            "flg": 20
                        }, "ev", "str", "^ See where the noise is comming from", "/str", "/ev", {
                            "*": ".^.c-1",
                            "flg": 20
                        }, "ev", "str", "^Go down to the basement", "/str", {
                            "CNT?": ".^.noise"
                        }, "/ev", {
                            "*": ".^.c-2",
                            "flg": 21
                        }, {
                            "c-0": ["\n", {
                                "->": ".^.^.^.^.go_back"
                            }, {
                                "->": ".^.^.noise"
                            }, {
                                "#f": 5
                            }],
                            "c-1": ["\n", {
                                "#": "IMAGE: images/go_basement.jpg"
                            }, "^The noises stopped, but after a few seconds they got louder.", "\n", {
                                "->": ".^.^.noise"
                            }, {
                                "#f": 5
                            }],
                            "c-2": ["\n", "ev", {
                                "VAR?": "Alertness"
                            }, 2, "+", "/ev", {
                                "VAR=": "Alertness",
                                "re": true
                            }, "^The mayor's child takes you by surprise .", "\n", "^<b>", "ev", {
                                "VAR?": "Mayor_Child"
                            }, "out", "/ev", "^(smiles):</b> What are you looking for?", "\n", ["ev", "str", "^Make up an excuse", "/str", "/ev", {
                                "*": ".^.c-0",
                                "flg": 20
                            }, "ev", "str", "^Ask why there are noises coming out of the basement", "/str", "/ev", {
                                "*": ".^.c-1",
                                "flg": 20
                            }, {
                                "c-0": ["\n", "^<b>You(surprised):</b> Oh, I was just walking...You have a very nice house.", "\n", "^<b>", "ev", {
                                    "VAR?": "Mayor_Child"
                                }, "out", "/ev", "^:</b> Thanks, let's go meet the mayor, he's waiting for us in the lobby.", "\n", {
                                    "->": ".^.^.^.^.noise"
                                }, {
                                    "#f": 5
                                }],
                                "c-1": ["\n", "^You look in the direction of the basement.", "\n", "^<b>You:</b> What is in there? It sounds awful.", "\n", "^<b>", "ev", {
                                    "VAR?": "Mayor_Child"
                                }, "out", "/ev", "^(puzzledly):</b> Oh...there are rats.", "\n", "^A new wave of sounds is heard from the basement.", "\n", "^<b>", "ev", {
                                    "VAR?": "Mayor_Child"
                                }, "out", "/ev", "^:</b> Many rats...", "\n", "^On ", "ev", {
                                    "VAR?": "Pronoun_1"
                                }, "out", "/ev", "^ face appeared an imprint of sadness.", "\n", "^<b>", "ev", {
                                    "VAR?": "Mayor_Child"
                                }, "out", "/ev", "^:</b> Let's go to the lobby, the mayor is waiting for us.", "\n", "ev", {
                                    "VAR?": "Alertness"
                                }, 1, "+", {
                                    "VAR=": "Alertness",
                                    "re": true
                                }, "/ev", {
                                    "->": ".^.^.^.^.noise"
                                }, {
                                    "#f": 5
                                }]
                            }], {
                                "#f": 5
                            }],
                            "noise": [{
                                "->": ".^.^.^"
                            }, {
                                "#f": 5
                            }]
                        }], {
                            "#f": 1
                        }
                    ],
                    "go_back": [{
                        "#": "IMAGE: images/hall.jpg"
                    }, "^The Mayor waits you in the armchair of the central hall.", "\n", {
                        "->": ".^.^.greet"
                    }, {
                        "#f": 1
                    }],
                    "#f": 1
                }
            ],
            "north_cave": [{
                "#": "IMAGE: images/north_cave.jpg"
            }, "^It's midnight, the man came back after accompanying some people to the northern cave and shortly falls asleep in his room.", "\n", "^You took the lantern that the old man left on the table and headed towards the cave. You started to delve into it. It didn't seem special at all compared to the one that you entered before. Well, it didn't until you started hearing screams, you wanted to turn around and leave this place immediately, but you were knocked down by a blow to the head.", "\n", {
                "->": ".^.north_wake_up"
            }, {
                "north_wake_up": [
                    ["^You woke, tied up in a dark place, you supposed that it is the north cave. You see the old man from the outskirts and the mayor.", "\n", "^The Mayor sees that you've come to your senses.", "\n", "^<b>Mayor(menacingly):</b> Did you really think you could stick your nose where it doesn't belong and leave this city? No one is allowed to leave, and they will not leave. The ones who are not grateful for the great gifts of this city will face a miserable end, but don't worry, your death will not be in vain (grins).", "\n", "^You look at him perplexed. The fear took you in its claws and you don't understand what is going on.", "\n", "^<b>Mayor:</b> I hope you have seen my beautiful garden?", "\n", "^You don't understand what he means.", "\n", "^<b>Mayor(contemptuously):</b> Yes, you did. So, your countribution to the city will be simple, like every other traitor you will lie under the poppy field and your remains will contribute to the city's beauty.", "\n", "^Things have become really scary, you are in a panic and try to think of a way out.", "\n", "ev", "str", "^Ask the old man for help", "/str", "/ev", {
                        "*": ".^.c-0",
                        "flg": 20
                    }, {
                        "c-0": ["\n", "^The man comes closer to you.", "\n", "^<b>Old man(sorrowful):</b> I told you to not look into things you must not know, but you didn't listen to me. It's such a pity that an another soul will suffer for this place, but i guess this is the price we need to pay for the better life of the majority.", "\n", ["ev", "str", "^Ask for mercy", "/str", "/ev", {
                            "*": ".^.c-0",
                            "flg": 20
                        }, "ev", "str", "^Threaten them", "/str", "/ev", {
                            "*": ".^.c-1",
                            "flg": 20
                        }, {
                            "c-0": ["\n", "^<b>You(begging):</b> I will not tell anybody about this city and will never come back, just let me go. Please...", "\n", "^The Mayor laughs.", "\n", "^<b>Mayor:</b> Yes, you won't tell a single soul about this city and you'll never come back, because the dead don't talk and don't return.", "\n", {
                                "->": ".^.^.g-0"
                            }, {
                                "#f": 5
                            }],
                            "c-1": ["^ ", "\n", "^<b>You(desperate):</b> You will pay for this! People from the outside will search for me!", "\n", "^The mayor laughs.", "\n", "^<b>Mayor:</b> We've already sealed off the cave you came from, in fact we should have done it a long time ago to prevent intruders like you from finding this place, but better late than never.", "\n", {
                                "->": ".^.^.g-0"
                            }, {
                                "#f": 5
                            }],
                            "g-0": [{
                                "->": "north_cave.die"
                            }, {
                                "#f": 5
                            }]
                        }], {
                            "#f": 5
                        }]
                    }], {
                        "#f": 1
                    }
                ],
                "die": ["^The mayor pulls a knife from his belt and stabs you several times in the chest. You feel your soul being torn to pieces with every blow. Your blood colors the floor red, it was the same as the color of the poppy field that you saw entering the city ... It becomes very cold, life leaves your body with every breath to the last one.", "\n", "^THE END", "\n", "end", {
                    "#f": 1
                }],
                "#f": 1
            }],
            "global decl": ["ev", 0, {
                "VAR=": "sex"
            }, 0, {
                "VAR=": "Knowledge"
            }, 0, {
                "VAR=": "Alertness"
            }, "str", "^Young lady", "/str", {
                "VAR=": "Mayor_Child"
            }, "str", "^his", "/str", {
                "VAR=": "Pronoun_1"
            }, "str", "^he", "/str", {
                "VAR=": "Pronoun_2"
            }, "str", "^him", "/str", {
                "VAR=": "Pronoun_3"
            }, 0, {
                "VAR=": "Romantic"
            }, 0, {
                "VAR=": "Apples"
            }, 0, {
                "VAR=": "Museum"
            }, 0, {
                "VAR=": "Door"
            }, "/ev", "end", null],
            "#f": 1
        }
    ],
    "listDefs": {}
};