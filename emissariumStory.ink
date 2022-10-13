-> character_select 
 
=== function reset_game ===
# CLEAR
 VAR sex = 0
 VAR Knowledge = 0
 VAR Alertness = 0
 VAR Mayor_Child = "Young lady"
 VAR Pronoun_1 = "his"
 VAR Pronoun_2 = "he"
 VAR Pronoun_3 = "him"
 VAR Romantic = 0
 VAR Apples = false
 VAR Museum = false
 VAR Door = false
 
=== character_select ===
{reset_game()}

# IMAGE: images/collage/choose_character.jpg

Your character is a traveler passionate about finding special and hidden places from the eyes of the majority. Select a character to progress through the story.
    + [Male]
    
        ~ sex = 1
        ~ Pronoun_1 = "her"
        ~ Pronoun_2 = "she"
        ~ Pronoun_3 = Pronoun_1
    
    + [Female]
        ~ Mayor_Child = "Young Man"
        

- -> cave 

=== cave ===

{   sex:
        #IMAGE: images/your_character_m.jpg
    -else:
        #IMAGE: images/your_character_w.jpg
}

It’s a sunny spring morning. You woke up in a good mood and with a lot of energy, because today is the day when you will roam the mountains to find something special. Who knows, maybe luck will be on your side today.
You have arrived at your destination and started wandering around. After some time, you decided to go higher and finally began to see something unusual. There was a contrasting spot in the snow-white landscape of the mountains, so you went there.

#IMAGE: images/collage/enter_yes_no.jpg
You found a cave, but it doesn't look like a normal one, at its end you could see a light, as if it was passing through another part of the mountain.
Enter the cave ?

    + [Yes]
    
#IMAGE: images/cave.jpg
You took the risk, entered the cave, and proceeded to move to the light. Reaching the end of the cave you expected to see the source of the brightness, a hole in the mountain, or maybe someone who settled there and decided to make a bonfire, but you did not foresee e a magnificent view.In front of your eyes has been a city of majestic beauty.

#IMAGE: images/collage/city_poppy.jpg
It was surrounded by the mountains with red poppies laid at its feet and above it a blue sky looked down on all this beauty. The flowers joined in a field between you and the path to this city. You couldn't believe your eyes, on the other side of the cave where you came from are snowy mountains and the weather is quite cold, but here is the embodiment of summer with a clear blue sky that was certainly different from the one you have seen before entering.

        -> Cave("")

       
    + [No]
    
#IMAGE: images/no_cave.jpg
 You decided to not take the risk. Who knows what might be at the end of this cave, so you thought that is better to proceed to roam the mountain, and maybe you will find something interesting and less dangerously looking.
 
Unfortunately, there was nothing interesting, so you started to go higher and deeper through the mountains. It starts getting late, but you are too stubborn to stop here so you decided to change the approach and take the risk now. You saw a path, it was a dangerous one, because of its narrowness and high position, but you felt like you had no other choice than to pass it, you had to reach the other cliff.

You started to pass it and almost got to its end. You take one more step but the rock under your feet breaks and you got down with its debris. In a panic, you tried to grab onto something, in order to save yourself from falling, but your hands helplessly cut through the air…

You fell off the cliff…The mountain’s snow started to get red under your body, its warmth faded away with every drop of your blood…

This is the end of your journey…

        + + [Try Again]
            
            ->character_select
        + + [Give Up]
            #IMAGE: images/game_over.jpg
            ->DONE
            
=== Cave(previousChoice) ===
{previousChoice == "": }
    * [Go to the poppy field.]
    
#IMAGE: images/poppy_f.jpg
You decided to admire the beauty of the red poppies. They were bathing in the light of the sunset. You have seen plenty of poppies in your life, but none of them were so red, redder than the roses in their full bloom, redder than the blood. You wondered if what you have seen was an illusion created by the rays of the sunset or it is their singularity. 

You were mesmerized by these flowers, but it didn’t calm your curiosity about the city.

     

      ->Cave("p")
    * [Go to the city.]
    
    
You have entered the city. Apparently, there was something similar to a festival going on. You have seen that the streets and houses are festively decorated with garlands and flowers, also there have been set up multiple stalls with different stuff. People are having fun, dancing and surprisingly riding horses, you rarely see horse riders on the city’s streets in your homeland and in other countries you have visited. 

#IMAGE: images/collage/choose_direction.jpg
You have looked in the face of every passing citizen and on each ones face you have seen a smile, everyone looked so happy that it makes you alarmed. How can a city exist inside a mountain? And how it can be so prosperous? It makes no sense. 

->City

=== City===
In order to explore the city and find more about it choose where to go.
    * [Right]
        #IMAGE: images/city_r.jpg
        
Here you see a couple who tries to calm down their crying child, a man with a blank look in his red eyes and a path to the museum (pointed by a signpost).

        ->City.Right
            
    * [Left]
        You walked on the left road.
        #IMAGE: images/city_le.jpg

        Here you see a woman who sells different types of food, she looks very lively and talks actively with other people. 
        On the other hand there is a painter with a sad expression on his face. He draws children who play in front of a flower shop.
        
        -> City.Left("")
        
    * [Straight]
        #IMAGE: images/city_str.jpg
       Going straight ahead, you will find a path that leads to the outskirts of the city and head along it.
       After some time you find a house near the mountains.
        #IMAGE: images/outsk_house.jpg
        {mountain_house: -> City.old_man_visited}
        -> outskirts
        
    = old_man_visited
        This path leads to the old man's house. He won't tell me anything else anymore.I should go somewhere else.
        * [Go back]
            -> City
            
        
        THE END
        ->END
        
    = woman_dialog
            
<b>You:</b> "It"?
            ~ Alertness ++
            ~ Knowledge ++
             The woman wants to say something, but closes her mouth quickly. 

                
<b> The man:</b> Sorry, but we need to go home, the child doesn't calm down. Since you are a newcomer what about greeting the mayor?

                -They certainly hide something, but you understand that the man will not tell you anything and will not let his wife speak either. So, you have only one choice, to look for the answers from the mayor.

            
<b>You:</b> Where can I find the mayor?
            
<b> The man:</b> See the building at the end of the street? Go right there.
                * * [Go to the front of the building]
                    -> mayor_house

    = Right
       #IMAGE: images/collage/choose_city_right.jpg
            * * [Talk to the man]
            #IMAGE: images/man_eye.jpg
                 You approach the man. Coming closer you see that his eyes have a red color and his stare seems blank. You immidiatly got scared, but a few moments later you understand that his gaze is not empty, it holds something, something grievous. His eyes looked drained from crying they were full of sadness...remorse and fear...
            The sounds coming from your mouths quivered.
                
<b>You(carefully):</b> I am de..ahem..deeply sorry, sir...may I ask you why you're in such a condition? Can I help you?
            He looked you straight in the eyes and put his hands on your shoulders. You could feel his pain gripping you from the inside. 
                
<b>The man(mumbles):</b> I need to go...I can't stay here..How...(sobs)...How could they do this to an innocent soul...
            For a moment he came to his senses and looked at you with pity, after patting your shoulders he returned to follow his path...to the north...
            You didn't fully realize what was going on, but one thing was clear, you shouldn't disturb this person anymore.
            
                -> City.Right
            * * [Talk to the parents]
                You approach the young family.
                # IMAGE: images/parents_child.jpg
                
                
<b> You(carefully):</b> Hello, excuse me. Could I ask you some questions?
                
<b> Woman(cheerful): </b> Hi! I see you are not from this parts. I would like to help you, but as you can see we have some troubles calming down this little child. (smiles guiltily)
                
<b> You: </b> May I know what caused his tears? Maybe I could help...

                You get interrupted by her husband.

                
<b> The man(abruptly): </b> Don't worry, we will deal with this.
                
<b> Woman(worried):</b>Yeah, don't worry, is just that we saw "It" at the mayor's residence so the child got emotional.

                The man looks at his wife with a disapproving look.
                        -> City.woman_dialog
            * * [Go to the museum]
                -> museum
                
    = Left(state)
        { state == "":
            #IMAGE: images/collage/choice_city_left.jpg
            -else:
            #IMAGE: images/sales_w.jpg
        }
        * [Talk to the painter]
            #IMAGE: images/painter.jpg
        
<b>You(with a polite smile):</b> Hello, Mister, I would like to ask you some questions, are you free?
        
<b>Painter(detached):</b> As you can see, I am painting right now.

        You try to find another approach to get him to talk, so you ask about the painting.

        
<b>You:</b> Would you mind to share something about your painting?
        
<b>Painter(reluctantly):</b> As you see, I paint the children… Naïve and happy children…Who welcome every morning with a bright smile on their faces and don’t now anything about the misery of this world, I wonder if they even know the meaning of the word “misery”. (laughs bitterly)
        
<b>You:</b> But children are supposed to be protected from such things, don’t you think so?
        
<b>Painter:</b> There is truth in your words. But what would you say if the tears of one child brings the joy to everyone else?
        
<b>You:</b> I don’t think that a crying child can be a cause for joy.
        
<b>Painter:</b> (sights) Well, believe me or not but it turns out like that.

        You wanted to ask him more questions, but it seemed like a bad idea, so you decided to find answers to your questions elsewhere.

            -> City.Left("s")
        * [Talk to the woman]
        
            ~ Alertness++
            She greeted you with a bright smile on her face.
        
<b>Woman:</b> Hey, dear, I haven’t seen a new face on these humble streets in about 40 years! How did you get here? Want to taste something? (points at the table with the food)
        
<b>You:</b> Actually, I would ask you about something.
        
<b>Woman(cheerful):</b> You came to the right place! Feel free to ask anything. This woman knows everything about everybody in this city, what food everyone likes ,who dates who and I even know about the secret affairs of some respectable misters and ladies. (winks)

         This woman looks like a typical chirper who spends her time gossiping about every passing ant in her way. 

            ->City.left_woman("")
    = left_woman(state)
        { <b>Woman:</b> What do you want to ask about?|<b>Woman:</b> Anything else?}
        {state == "":
            #IMAGE: images/collage/choose_city_food.jpg
            -else:
            #IMAGE: images/city_view.jpg
        }
        * [Food]
        
<b>You</b>: What would you recommend for me to eat?
        #IMAGE: images/Collage/choice_food.jpg
        The woman recommends you her special tea, apples and a pice of a pie. You can choose only one type.

                * * [Tea]
                
<b>You:</b> I will drink some tea.
                #IMAGE: images/tea.jpg
                The woman gives you a cup of tea.
                It tastes wonderful, almost as if you drank sunshine, it warmed you from the inside. Its aftertaste was close to a mixture of mint and daisies. 

                * * [Apples]
                
<b>You:</b> I will take an apple.
                ~Apples = true
                    #IMAGE: images/apple.jpg
                The woman gives you some apples. You look at her inquiringly.
                
<b>Woman:</b> One is for you and other ones are for the friends that you will make here.(winks)
                You take the apples and taste one. It was very sweet and juicy, you have never eaten such apples. 

                
                * * [Pie]
                    #IMAGE: images/food.jpg
               
<b>You:</b> I would like to try the pie.
               The woman gives you a piece of the pie. You take a bite and it's delicious. It was an apple pie like you've never eaten before, very flavorful and crispy.

            - - 
<b>You:</b> Thank you. How much do I owe?
                
<b>Woman:</b> Oh, you mean money? 
                
<b>You(confused):</b> Yes...
                
<b>Woman:</b> I think I have heard from the old man about such stuff existing in the outside world... Well, we don't have it here, everyone just does his/her work! So just enjoy your meal.
                That was surprisingly nice, but you could not understand how a city can function normally without a monetary system and only on the conscience of people. 
                ~ Knowledge++
                -> City.left_woman("s")
        * [City]
        
<b>You:</b> I would like to find more about the city.
        
<b>Woman:</b> Well, it's quite simple, we live here for the past 4-5 generations, people here are friendly and work for the prosperity of their home.
            * * [Ask how did the city become so prosperous]
             
<b>You:</b> How did the city become so prosperous while being isolated from the outside world?
             
<b>Woman:</b> Well, here we have our own small world.(laughts) It's not that hard to make a city prosperous when every citizen contributes to it. But if you want to know more about the history of this city you could go to the museum and ask the man from there. Or if you want to find more from the perspective of somebody who came here like you, then you could visit the man from the outskirts.
                
                ~ Knowledge++
                * * * [Ask how to get to the museum]
                
<b>You:</b> Could you tell me how can I get to the museum?
                
<b>Woman:</b> Sure, go to the main square and turn right, there you will see a waymark.
                    ~ Museum = true
                * * * [Ask where you can find the outskirts]
                  
<b>You:</b> Could you tell me how can I get to the outskirts?
                
<b>Woman:</b> Sure, go to the main square and go straight to the norhern path, at its end you will se the old man's house.
                - - - {Museum: You follow the directions given by the woman and take a right.|You follow the directions given by the woman.}
                
                    ~Alertness++
                    -> crossroads
    = crossroads
        * {Museum}  [Go to the museum]
        
            -> museum
                    
        * {!Museum} [Go to the north outskirts]
         #IMAGE: images/outsk_house.jpg
        You see a house at the end of the path.
            -> outskirts
    = outskirts
        -> mountain_house
       
===mountain_house ===
 You come closer to its door.
 #IMAGE: images/door.jpg
        * [Knock]
        You knocked the door. It was opened by old man in his 70s. He looks at you surprised.
        
<b>Old man: </b> How can I help you?
            #IMAGE: images/outsk_man.jpg
            * * [Ask the man about the city]
            
<b>You:</b> Hello, sorry to disturb you. I came to this city recently, so I don't know anything about it, could you answer a few questions about the city?
                ~Knowledge++
                
<b>Old man(grumply):</b> You came to the wrong place, especially if you are a softie. Listen to this old man and leave the city till it's not too late or at least try to not stick your nose in other people's business.
                
                You were puzzled by his words.
                * * * [Leave old man's house]
                    You go back to the city.
                    -> City
                * * * [Ask why he lives in the outskirts]
                You decided to be insistent and ask him at least one question.
                
<b>You:</b> Why do you live in the outskirts? People from here seem friendly and the city is nice too.
                ~ Knowledge++
                The old man sights.
                
<b>Old man:</b> Come in.
                You enter the man's house.
                #IMAGE: images/collage/outsk_sofa_armchair.jpg
                He invites you to sit down in the armchair. It is pretty comfortable.
                
                
<b>Old man:</b> I see you are the type who doesn't leave until you get what you want. 
                You smile politely.
                
<b>Old man:</b> Well, listen to my story, youngster. As you I was not born here. I came to the city around 40 years ago when the Cold War showed its economical impact on the civils and the inflation begun. I had a small business, but due to the circumstances I got bankrupt. My wife left me with nothing... I had nowhere to go so I was wondering in the mountains to find my death, but I was lucky...or may be not to find this wonderful city.(smiles bitterly) It became my home, the mayor's father let me live here if I ...help people who wants to leave this city to pass the mountains.

                -> questions
    = questions
        * [Ask why he helps them]
          
<b>You:</b> But, why do you help them?
          
<b>Old man:</b> Because that's the only reason the mayor's father let me live here. Nice house, right? (chuckles) Also, the people of this city are very... sensitive about its privacy. I think you have already understood that this is a good place to live, so if other people find out about this city, it will cause a mess. A HUGE mess.
          
          -> questions
        * [Ask why people want to leave]
        
            ~ Knowledge++
            
<b>You:</b> But why someone would leave this wonderful place?
            
<b>Old man(sad):</b> Some things are better to be left unknown. I strongly advise you to not look into this matter. Also, the mayor will be displeased if you start to interogate all the people of this city.
            
            It is not the answer you wanted to hear.
            * * [Insist]
                
<b>You:</b> It's not the answer to my question.
                ~Knowledge++
                ~Alertness++
                
<b>Old man:</b> I will tell you just one thing. All of them had soft hearts and have seen something they shouldn't have in order to live here without remorse.
            - (q)
            * [Ask what have they seen]
               
<b>You:</b> What have they seen?
               
<b>Old man:</b> I already told you too much. 
                
                * * * [Tell him that you will find out]
                    
<b>You:</b> Well, I think that in this city I will find someone who would answer my questions honestly.
                
                    ~Alertness++
                    
<b>Old man(dissapointed):</b> It is a really bad ideea...Don't bother the citizens, ask the mayor directly all the questions reqarding the city, he is the only one who could provide you information...If he wants.
                    
<b>You:</b> Where I can find him?
                   
<b>Old man:</b> Go to the town square and turn right, there you will se the building at the end of the street. Go right there.
                    -> travel
                * * *{Museum} [Ask if it's related to the story of the city]
                
<b>You:</b> Is it related to the story told by the museum's owner?
                
                    ~Alertness++
                    
<b> Old man:</b> I see, you spoke with that bigmouth. Yes, it is related to the legend, but I can't tell you more.
                    * * * * [I want to get the answers]
                    
<b>You(insistent):</b> I want to get the answers to my questions and if you or the other citizens won't tell me, then I will ask the mayor directly.
                     
<b> Old man:</b> It is a really bad ideea...Don't bother the citizens. You could ask the mayor directly, he is really the only one who could provide you the information that you seek...If he wants.
                     
                     
<b>You:</b> Where I can find him?
                   
<b>Old man:</b> Go to the town square and turn right, there you will se the building at the end of the street. Go right there.
                        -> travel
                * * [Ask why he decided to stay here]
                
<b>You:</b> Why did you decide to stay here if you speak so badly about this place?
                
            - (sad_backstory)
            
<b>Old man:</b> Obviously, because I had nowhere to go...
            * [I am sorry]
             
<b>You:</b> I am sorry that you had to go through all this, but I really want to know more about this city.
            
             
<b>Old man(dissapointed):</b> It is a really bad ideea...Don't bother the citizens, ask the mayor directly all the questions reqarding the city, he is the only one who could provide you information...If he wants.
                    
<b>You:</b> Where I can find him?
                   
<b>Old man:</b> Go to the town square and turn right, there you will se the building at the end of the street. Go right there.
            
               -> travel 
            * [I understand and I will leave the city]
                
<b>You:</b> Ok, I understood and I'll follow your advice.
                
<b>Old man(joyful):</b> This is a very wise decision. You could stay overnight and leave the city tomorrow morning, take this as a thank you for listening to this old man. Make yourself comfortable.
                #IMAGE: images/collage/outsk_sofa_armchair.jpg
                
                
            - (stay_night)
            * [Sleep on the sofa.]
                You chose to sleep on the sofa.
                #IMAGE: images/sofa.jpg
                In the middle of the night you wake uo because someone knocks on the door.
            * [Stay awake on the armchair]
                #IMAGE: images/arm.jpg
                Someone knocks on the door.
            - (door_knock)
            * [Stand up and open the door]
              #IMAGE: images/door_ins.jpg
              You stand up and go to open the door.
                ~Door = true
                Opening the door, you see a woman and a man with very sad and worried expressions on their faces.
            -(answer)
                * [Ask how can you help them]
                
<b>You:</b> Could I help you with something?
                They wanted to tell you something, but the old man comes behind you and invites them inside to an another room. 
                
<b>The man(depressed):</b> We saw it...
                    * * [Listen closer]
                The man holds the woman's hand.
                
<b>The man:</b> We need to leave as fast as possible...
                
<b>The woman(crying):</b> How could they treat a child like this?(sobs) How could all these people live without remorse after seeing how miserable it...he is treated?!
                
<b>Old man:</b> Calm down for a little bit, we are not alone...
                The couple looks at you and become silent. The house's owner addresses to you.
                
<b>Old man:</b> I will go out for a while, to help them leave. You can go with me.
                You four go to a cave not far away from the man's house, the couple enters the cave.
                
<b> Old man:</b> I will escort them to the exit, you can take care of yourself till my return.
            
            -(ask)
                * [Ask if you should go with them]
                
<b>You:</b> Shouldn't I go with you now in order to leave the city?
                
<b>Old man(abruptly):</b> No. You will leave tomorrow's morning through the path you entered here.
            -(where_to)
                {!Choose what to do:}
                * [Go to the festival]
                
<b>You:</b> I will go to the festival and then come back.
                
<b>Old man:</b> Fine, take care to not get into trouble.
                
                You go back to the city to enjoy the festival before you take your leave.
                    #IMAGE: images/city_fest.jpg
                The city at night is a pleasant sight for your eyes. Its lights shine like little stars all over the street, people are happy to talk and dance to the music. You joined them and began to move under the quick beats of the tambourines. It felt so nice and peaceful. You don't remember when was the last time when you felt so happy, but you need to go back to the old man's house.
                    -> where_to
                * [Go back to the man's house]
                    #IMAGE: images/outsk_house_night.jpg
                You returned to the old man's house and slept there until morning. Waking up, you began to look for a man and you found him in the armchair.
                
<b>You:</b> Good morning.
                
<b>Old man:</b> Good morning, had a good time at the festival?
                You nod.
                
<b>Old man:</b>I remember the days when I came to this city... I danced every night in the main square until I got too old and stiff for it (sights).
                
<b>You:</b> I will go the last time to the city and then I will leave.
                
<b>Old man(worried):</b> It would be better if you leave now, but I understand...Take care of you.
                
<b>You:</b> You too, old man, you too.
                
            -(go_to_city)
                *[ Go to the city]
                    #IMAGE: images/city_le.jpg
                    You are back in the city, people are tired after the long night dances, but everyone looks happy.
                      You start to wonder if you really should leave, or if you could stay a little longer and learn more about the city from its most prominent figure, the mayor.
                    * * [Leave the city]
                        #IMAGE: images/leave_city.jpg
                         You decided to follow the old man's advice, especially since there is something very suspicious about this place. You didn't like what you heard from the couple who left the city. The city is indeed wonderful, but it's not worth your safety.
                         
                      You return home the same way you came here and continue your journey, finding special places around the world. Coming home you told your friends about the city, but they did not believe you. Well, in their place, you would not believe in your story either.
                      
                      THE END
                      ->DONE
                    * * [Ask where you can find the mayor]
                         #IMAGE:images/speak_people.jpg
            -(go_to_mayor)
               You approach a citizen in order to find the mayor.
               
<b>You:</b> Excuse me, could you tell me where I can find the mayor?
               
<b>Citizen(smiles):</b> Ah, yes, you see, go to the main square and then turn right, at the end of the street you will see the mayor's residence.
               
<b>You:</b> Thank you!
               
                -(travel)
                * [Go to the mayor's residence]
                    -> mayor_house
            
                
=== museum ===
#IMAGE: images/muz.jpg
~Museum = true
You enter the building and see the owner of the museum.
    * [Speak with the owner]
        #IMAGE: images/muz_man.jpg
        
<b>You:</b> Hello, I suppose that I got to the right place to ask questions about this city?
        
<b>Owner:</b> Hmmm, it depends on what you want to ask.
        * * [Ask how did the city became so prosperous]
        
<b>You:</b> I would like to know why this city is so prosperous despite being isolated. 
            ~ Knowledge++
        * * [Ask if the city has some legends]
        
            ~ Knowledge = Knowledge + 2
            
    - 
<b>Owner:</b> Well, let me tell you the story of founding this city.
    
    It is said from the ancestors that there was a big natural disaster in their village, all their possesings were lost, many of their siblings died and they had nowhere to go. The head of the villagers lost his life and let two of his sons alone. Nobody knew what to do in such situation without a leader, but after some time the younger son of the deceased head took the lead and directed everyone to the mountains. It was said that a spirit lived there so they hoped to get help from it.
    
    They headed to the mountains and found a cave, I suppose you passed through that cave too entering here.(chuckles) There they found a beautiful creature, the spirit. It did not appreciate the intrusion in his habitat and acted agressively, but the young man tryed to persuade it and he did well. The spirit agreed to let them in and showed the beautiful peisage you have seen while entering, but there was a condition. The boy must to sacrifice his life for the sake of the other people if he cares about them so much that he dared to speak to the spirit.
    
    
<b>You:</b> He died?
    
<b>Owner:</b> No, he just agreed and lived for the sake of his people, he was a hero. His older brother bacame the mayor in order to help him and the curent head of the city is his descendant.
   
        *[Ask why the younger brother did not become the mayor]
        
            ~Alertness++
     
<b>You:</b> Why the young brother did not become the mayor?
     
<b>Owner:</b> Well, because he had his own duty in order to contribute to the well being of the citizens. You could ask more about it from the mayor directly, he knows more about his family.
            * * [Ask how to get to the mayor]
     
<b>You:</b> How can I find the mayor?
     
<b>Owner:</b> Exit the museum and go right to the end of the street, there you will see the mayor's residence. Hmmm...Also you could go to the north outskirts by going stright from the main square if haven't visited it before.
     

                * * * {not City.outskirts}[Go to the outskirts]
                You decide to go first to the outskirts and ask some questions there and after this you will come back to the mayor for more information.
                You go to the north part of the city and find there a house.
                #IMAGE: images/outsk_house.jpg
                    -> City.outskirts
                * * * [Go to the Mayor's residence]
                    -> mayor_house
            

=== mayor_house ===
# IMAGE: images/mayor_house.jpg
You follow the given directions.

Going near the building, in the mayor's garden, you see a silluete. It moves gently a paint brush on a canvas, these moves are full of grace and dedication. You come closer to see the face of the person who awakened your admiration.
The face of the silluete started to get clearer and you could see its unexpected beauty. There was a {Mayor_Child}.
    * [Talk with the {Mayor_Child}]
        {sex:
                # IMAGE: images/girl_dr.jpg
         -else:
                # IMAGE: images/boy1.jpg
                } 
        Your intense gaze didn't go unnoticed, {Pronoun_2} rised {Pronoun_1} eyes from the canvas and looked at you inquiringly. You've decided to quickly gather your thoughts and say something.
        
        
<b> You(awkwardly):</b> Hi...
        
<b> {Mayor_Child}(smiles politely): </b> Greetings.
        
        You were enchanted by {Pronoun_1} smile, it shone brighter than the sun itself, but you came here with the purpose to find more about the city, so you need to pull yourself together.
        -> Mayor_child_dialog
        
    = Mayor_child_dialog
        * {Apples} [Give {Pronoun_3} an apple]
            
<b>You(awkwardly):</b> Here...an apple.
            
<b>{Mayor_Child}(laughts): Very nice of you, thanks.
            ~ Romantic++
            -> mayor_house.Mayor_child_dialog
        * [Ask {Pronoun_3} about the city.]
          
    <b> You:</b> Sorry for intrerupting you. I am new here so I would like to know more about the city and its people. Could you help me?
            -> mayor_house.city_info
        * [Ask where you can find the mayor.]
          
    <b> You:</b> Sorry for distracting you. Could you tell me where can I find the mayor? I need to ask him some questions.
            -> mayor_house.find_mayor
        * {mayor_info} [Request a meeting with the mayor.]
            
    <b>You:</b> Could you help me meet him?
            
    <b>{Mayor_Child}:</b> Yes, follow me. I will try to bring my father to you as soon as possible. 
            You should have guessed that {Pronoun_2} is the mayor's child,      {Pronoun_2} invites you inside the building and explains that {Pronoun_2} needs to go on the 3rd floor to call the mayor.
            #IMAGE: images/hall.jpg
The interior of the mayor's residence is beautiful both outside and inside. The floor is covered with expensive decorative tiles, the stairs are carved from mahogany, and the chairs in the hall are upholstered in high quality fabric. You wonder where he got all these materials from in such an isolated place. 
            {Mayor_Child} doesn't come for a long time.
                * * [Take a look around]
                    #IMAGE: images/collage/stay_examine.jpg
                    -> interior
        
        * {city_info && not stay_night} [Find out more about the {Mayor_Child}]
        
            ~ Romantic++
            {Mayor_Child} told you a lot about other people, but you started to get curious about {Pronoun_1} personality. So you try to find more about {Pronoun_3}.
            
            
    <b>You:</b> You told me pretty much about other people, but I would like to know about you too.
            
    <b>{Mayor_Child}(shy):</b> I'm really not an interesting person, especially compared to you, you must have seen a lot beyond the mountains, while I have lived all my life between them. 

            * * [Tell {sex: her | him }  that {Pronoun_2} is right.]
            
                ~ Romantic = Romantic -4
                
    <b>You:</b> Hmm, I suppose that you are right. It is difficult to broaden your horizons when you are stuck in one place. 
                -> mayor_house.Mayor_child_embarrased
            * * [Tell {sex: her | him } that {Pronoun_2} is an interesting person.]
                
    <b>You:</b> It's not true. You seem very interesting to me.
                
                ~Romantic = Romantic + 2
                
    <b>{Mayor_Child}(shy):</b> Thank you...I understand that you are not from here and probably don't have a place to stay overnight, so, if you want you could stay here. I will provide you with a place to sleep.
        -(stay_night)
            * [Refuse politly]
            
            ~Romantic = Romantic - 2
            
    <b>You:</b> Thank you for the offer, but I will decline. I came here to ask the mayor some questions. 
            
    <b>{Mayor_Child}:</b> Okay, If you need my help let me know, I am always here here.

                -> Mayor_child_dialog
            * [Refuse in a rude way]
            
            ~Romantic = Romantic - 3
            
    <b>You:</b> No thanks, I don't sleep in the houses of strangers and I advice you to do the same.
            
    <b>{Mayor_Child}(embarassed):</b> Oh, okay...
                -> mayor_house.Mayor_child_embarrased
            * [Agree]
            
                ~Romantic++
                {Mayor_Child} brings you into the mayor's house.
                #IMAGE: images/hall.jpg
                
    <b>You:</b> Are you related to the mayor in some way?
                
    <b>{Mayor_Child}:</b> Yes, he is my dad.
                You walk up the stairs and go to the door of {Pronoun_1} room.
                
        -(enter_child_room)
            * [Enter the room]
                #IMAGE: images/gb_room.jpg
               The room is very spacious and holds a lot of light. You see paintings filling the room and one of them caught your attention.
               
               #IMAGE: images/kidd.jpg
               In this painting you see a small child in a dark and small room, he stands with his back to you, but you could fell that if he turns , you would see his eyes full of tears.
        -(choose)
            * [Tell that {Pronoun_2} has great painting skills]
            
    <b>You:</b> Wow... you have great painting skills.
                ~Romantic++
                
    <b>{Mayor_Child}:</b> Thank you...But, I am sure that you have seen a lot of great art creations in your homeland. (hides {Pronoun_1} pain under a smile)
                
                You decide to distract her and tell {Pronoun_3} about the art that can be seen outside of the mountains.
                #IMAGE: images/Collage/choose_art.jpg
                
    <b>You:</b> I see that you are interested in the art outside of this city. Well, let me tell you about...
                * [Ask about the painting]
                
    <b>You:</b> It is an interesting work, where did you get the inspiration to paint this?
                
    <b>{Mayor_Child}:</b> It's nothing special, I just painted what I felt about a...child who could not live as happily as the other ones from here.
                
                ~Knowledge = Knowledge + 3
                {Museum: 
                *  [Ask if it's related to the story of the city]
                
    <b>You:</b> Is it related to the story if this city?
                
    <b>{Mayor_Child}:</b> Yes, you are right. This child is the "saviour" of this city, the descendant of the hero from the story and a relative of mine. In reality he is a scapegoat, the name of our city "Emissarium" tells directly about its roots.
                
    <b>You:</b> Where is he now?
                
    <b>{Mayor_Child}:</b> He is in the basement...All his life he was treatened miserably, because some dumb spirit said that the sacrifice must suffer lonlyness and all kind of mistreats in order to keep the prosperity of this city at least one soul shows mercy to him, then the city will turn into ruins...So everybody knows about him but don't dare to help him someway. There are people who could not stand the fact that they live off someone else's suffering and leave the city ... 

                    * *{Door} [ Ask more about the people who leave the city]
                    
    <b>You:</b> They left because they saw how poor the child is treated?
                    
    <b>{Mayor_Child}:</b> Yes, I also wanted to leave the city because i have seen it...
                        * * * [Tell that you saw someone leaving the city]
                        
    <b>You:</b> I saw a couple leaving the city when I stayed at the outskirts.
                        
    <b>{Mayor_Child}:(smiles bitter)</b> No-one leaves this city, my father won't allow this city to be discovered.
                            * * * * [Ask where these people go.]
                            
    <b>You:</b> Then where they are going to?
                            
    <b>{Mayor_Child}:</b> ...The mayor kills all the people who want to leave and make them fertilizers for the poppy field, his beloved garden...He is a mad man who killed my mother, his own wife...and everyone knows about it but never say anything, they always stay silent about such things...
                            
                         You are in deep shook from {Pronoun_1} words.
                         
                         
    <b>{Mayor_Child}:</b> You know...her remains are somewhere in the field, she just wanted to leave and did nothing wrong...(sobs) But she couldn't, even after her death she still here... 
                            
    <b>You:</b> Then where do they go?
                                * * * * * [ Help {Pronoun_3} leave]
                                    ->help_leave
                                    
                    * * [Ask how can you help this child]
                      
    <b>You:</b> How can we help this child?
                      
    <b>{Mayor_Child}:</b> There is a key to the basement in the drawer of the mayor's desk. So we need to sneak in and take this key, then arond the midight all the three of us will leave.
                      You nod.
                      
    <b>{Mayor_Child}(worried):</b> But we need to be very careful if my father finds out what we are plannig it will be the end for the both of us.
                    
                        ->child_choice
                    -else:
                        ->choose
                        }
                -(art)
                    * [Tell {Pronoun_3} about the Renaissance painters]
                        #IMAGE: images/renaissance.jpg
                    
    <b>You:</b> ...The Renaissance painters.
                    
                    You started to tell {Pronoun_3} about the Renaissance painters and sculptures: Sandro Botticelli, Donattelo, Leonardo da Vinci, Michelangelo and Raphael. You took out your phone to show {Pronoun_3} some pictures of their works and you noticed that there is no signal. It was expected. Fortunately you had some photos of their artworks from your journeys so you could show them.
                    You see that {Pronoun_2} listened to you very attentlively and persorbed all the information you gave to {Pronoun_3}.

                    * [Tell {Pronoun_3} about Vincent van Gogh]
                        #IMAGE: images/art_gogh.jpg
                    
    <b>You:</b> ...the Vincent van Gogh's art.
                    You started to tell {Pronoun_3} about the Van Goth's artworks, his style and about his life. You took out your phone to show {Pronoun_3} some pictures of his works and you noticed that there is no signal. It was expected. Fortunately, you had some photos of his artworks from your journeys so you could show them.
                    You see that {Pronoun_2} listened to you very attentlively and persorbed all the information you gave to {Pronoun_3}.
                    * [Tell {Pronoun_3} about abstract art]
                        #IMAGE: images/contemp.jpg
                        
    <b>You:</b> ...the absract art.
                        
                    You started to tell {Pronoun_3} about the abstract art, that the world can be painted not only as we see it but also how we feel it. You took out your phone to show {Pronoun_3} some pictures of the artworks of that kind and you noticed that there is no signal. It was expected. Fortunately, you had some photos of abstract art that ypu have seen in your journeys so you could show them.
                    You see that {Pronoun_2} listened to you very attentlively and persorbed all the information you gave to {Pronoun_3}.
                -(art_thank)
                    After you are done talking, {Pronoun_2} looks at you with a sad expression. 
                    
    <b>You:</b> What happened?
                    
    <b>{Mayor_Child}:</b> I want to leave this city, it fells like I am inside of a cage. Would it be possible to leave it with you?
                    
                    You see in {Pronoun_1} eyes an imploring glance.
                    
                    * [Ask why {Pronoun_2} thinks so]
                    
    <b>You:</b> Why do you think of thiscity as a "cage", it is safe and beautiful, the outside world is full of danger, wars and different problems.
                    
                        A bitter smile appeared on {Pronoun_1} face, {Pronoun_2} turns {Pronoun_1} back at you and pulls the top of {Pronoun_1} clothes. You see scars all over {Pronoun_1} back.
                        It shooked you.
                -(ask_scar)
                    * [Ask where {Pronoun_2} got these scars from.]
                    
    <b>You:</b> God, where do you got these scars from?
                    
    <b>{Mayor_Child}:</b> Well, this city is not as perfect as you might think. To be honest, the people here are not as nice as they seem, and the mayor is one of the rottenest of them all.  He beat my mother when she was still alive, and now he beats me... 
                        * * [Help {Pronoun_3} to leave]
                        
    <b>You:</b> Yes, I will help you.
                        
                        The mayor's child looks at you with a grateful gaze.
                            -> help_leave
                        * * [Tell that the outside world is crueler]
                        
                        ~ Romantic = Romantic - 6
                         
    <b>You:</b> The outside world is crueler that you might think and it's better to live here. As about the scars, if you don't want to get beaten what about moving to another house? 
                         Your words make {Pronoun_3} shudder, {Pronoun_2} pulls {Pronoun_1} top back and turns your face to you.

                         * * * [Ask why didn't he just let {Pronoun_3} leave.]
                         
    <b>{Mayor_Child}:</b> No-one can leave this city...The mayor kills all the people who want to leave and make them fertilizers for the poppy field, his beloved garden...The mayor is a mad man who killed my mother, his own wife everyone knows about it but never say anything, they always stay silent about such things! 
                         You are in deep shook from {Pronoun_1} words.
                         
    <b>{Mayor_Child}:</b> You know...her remains are somewhere in the field, she just wanted to leave and did nothing wrong...(sobs) But she couldn't, even after her death she still here... 
                         The things turned out very and very bad, you want to leave this city as soon as possible.
                    - (leave_urgently)
                        * [Tell {Pronoun_3} that you need to leave.]
                        
    <b>You:</b> I need to leave...
                        {Mayor_Child} wanted to say something but you left quickly {Pronoun_1} room in order to save your life.
                        
                        You got down the stairs, but bumped into someone and fell.
                        Here was a man.
                        #IMAGE: images/mayor.jpg
                        He looks at you with disgrace.You noticed two huge men behind him.
                        
    <b>One man:</b> Mayor, what should we do with this rat?
                            * * [Stand up]
                            
                            * * [Stand still]
                         
                      - (basement)
                        The Mayor's gaze is full of  venom. 
                        
                       
    <b>Mayor:</b> I don't think I have seen you before...Take him to the basement.
                       The men took you by the shoulders to the basement.
                       ->die
                        
                    
           
            
    = child_choice
        #IMAGE: images/collage/saveKid_sleep.jpg
       - (save_child)
            *  [Save the child]
            
    <b>You:</b> How can we save him?
            
    <b>{Mayor_Child}:</b> We need to go to my father's office and steal the key to the basement.
            
            You both sneak into the mayor's office.
            
            #IMAGE: images/desk.jpg
            
            You start to search for the key and your companion helps you with that, finally you found it in the mayor's desk.
            
            
                * *  [Change your mind and don't save the child]
                You: I don't really think that I can help you with it, sorry.
                    -> become_scape_goat
        
                * * [Take the key]
                   #IMAGE: images/key.jpg
                   You take the key and run to the basement to save the child.
        --(dont_save)
           * [Don't save the child]
            
    <b>You:</b> You, know...I don't think that I can help you with it, sorry.
            -> become_scape_goat
        - (take_child)
            * [Take the child]
            #IMAGE: images/go_basement.jpg
            You opened the door, an awful smell hit your nose. The room was small, it has the size of a mop closet. You see a little child lying on its floor, he is malnourished and looks very week.
            You try to get him to his senses.
            
    <b>You:</b> Wake up!...Can you here me?
            The child opens his eyes. They are blank as if the will to leave left this small body of him.
            You ask the {Mayor_Child} where you can wash yp this kid and {Pronoun_2} escorts you to the bathroom. 
            The water got black in an instant after washing him a bit, all his body was full of sores and skin irritations. You feel awful when you realise that the people to whome you talk before knew about the conditions in that lived this child and how they did not do anything.
            
            The {Mayor_Child} brings some clothes for the child.
            
                * *{Romantic >= 8} [Leave the city]
                As soon as three of you exit the house an earthquake starts. The mayor's child helps you to pass unnoteced through the city so you could leave. 
                
                You came to the entrance of the cave from where you came from and turn around for the last time.
                
                The city is in ruins...
                
                #IMAGE: images/ruins.jpg
                
                Well, you don't really have any remorse about doing this...It's wrong to build happiness on someone else's grief.
                
                You go through the cave and leave this city forever with the child and the {Mayor_Child}.
                
                THE END
                ->END
                
                * * {Romantic < 8} [Leave the city  child]
                
                 As soon as three of you exit the house an earthquake starts. The mayor's child helps you to pass unnoteced through the city so you could leave. 
                
                You came to the entrance of the cave from where you came from and turn around for the last time.
                
                The city starts to ruin...
                
                
    <b> {Mayor_Child}(sadly):</b> I hope you both will have a nice journey...
                
    <b> You: </b> What about you? Did you not want to leave?
                
    <b> {Mayor_Child}: </b> I don't deserve it...
                
                The {Mayor_Child} runs back to the city.
                
                You feel sad, but now you have a life in your hands and you need to take responsability for saving this child...
                
                You look one more time at the city...It is in ruins...
                
                #IMAGE: images/ruins.jpg
                
                You hear screams coming out from the city...but you don't really have any remorse about doing this...It's wrong to build happiness on someone else's grief.
                
                You go through the cave and leave this city forever with the child in your hands.
                
                THE END
                ->END
                
            
    =help_leave
        ~Romantic++
        Then the {Mayor_Child} tells you about a child that is the "saviour" of this city, the descendant of the hero that founded this city and a relative of {Pronoun_1}. In reality he is a scapegoat, the name of our city "Emissarium" tells directly about this roots.
        
    <b>You:</b> Where is he now?
                
    <b>{Mayor_Child}:</b> He is in the basement...All his life he was treatened miserably, because some dumb creature said that the sacrifice must suffer lonlyness and all kind of mistreats in order to keep the prosperity of this city at least one soul shows mercy to him, then the city will turn into ruins...So everybody knows about him but don't dare to help him someway. There are people who could not stand the fact that they live off someone else's suffering and leave the city ... 
            -> save_child
            
    = become_scape_goat
        {Mayor_Child} turned blue of sadness. 
        #IMAGE: images/sofa_2.jpg
        You go back and lay on the sofa, soon you fall asleep.
       
        You open your eyes and all that you see is darkness also there is an awful smell in the air. You try to stand up and you body feels strange...It is smaller and thinner...It's as if you got to a size of a child. For a moment you tought that it is a nightmare, but it felt to real. You start to scream and hit the walls, then you find the door and punch it with your week hands, but got tired very fast and your voice became broken..You could not say any wordsm just some weird mumbling came out of your mouth.
        You feel helpless. 
        Few moments later you hear some steps, you started to hit the door harder in order to be heard. Then you heared a voice from afar " What are you looking for?", you hit again, but the sounds of steps were getting quiter and our hopeless rises with each step.
        You spent a few days in this state, nobody came...Sometimes when you wake up you find a piece of bread on the floor and some wate, but it is not sufficient to feed you up, you are malnutricioned, lonely and broken hearted...You wander if you got in this condition because you refused to save the child back then...The days passed, or maybe months or event years...You don't really know, because you started to lose your senses one before another...You don't feel alive, you just...exist...
        
            THE END
            ->END
            
    = mayor_info
        
    <b>{Mayor_Child}:</b> As far as I know, he must be in the residence.
        -> Mayor_child_dialog
        
    = Mayor_child_embarrased
        You see a sad and embarassed look on {Pronoun_1} face.
        -> mayor_house.Mayor_child_dialog
        
    = find_mayor
        ->mayor_info
        
    = city_info
        
    <b>{Mayor_Child}:</b> Sure, but instead just answering you questions what about going on a walk? This way I could not only tell you about the city but also show it to you.
            * [Agree]
            
            ~ Romantic = Romantic + 2
        
    <b>You:</b> It would be perfect, thank you!
        
    <b>{Mayor_Child}:</b> It's my pleasure. Just let me pack all this stuff (points at {Pronoun_1} art tools).
        
    <b>You:</b> Yes,sure. Let me help you.
        You help {Pronoun_3} pack {Pronoun_1} things and then go for a walk.
        #IMAGE: images/fest_walk.jpg
        You once again see the streets you walked on not long time ago, the festively decorated houses, people having fun.
        On the walk {Pronoun_2} points at different places on the street and starts to tell you about people living there.
        
    <b>{Mayor_Child}(enthusiastically):</b> The museum you see there (points to another part of the street) is one of the first buildings in this city... This flower boutique was built long before my grandfather was born. There are different types of flowers, but my favorite are sunflowers (smiles)... See the woman who sells food? (points)
        
    <b> You:</b> (nod)
        
    <b>{Mayor_Child}:</b> She's the biggest gossip girl in our city. If she sees you doing something then all people from here will know about it. I wonder she does it. (laughs slightly)
        
    <b>You:</b> What are you celebrating today?
        
    <b>{Mayor_Child}:</b> Celebrating?
        
    <b>You:</b> Yes, I see that all the houses are decorated, people are dancing on the streets, there is a fair and things like this.
        
    <b>{Mayor_Child}:</b> It's a day like every other one(looks at you surprised) Is it different from where you came from?
        
    <b>You:</b> Well, yes, in my homeland we decorate houses only on special ocasions and it’s the same with dancing. 
        
    <b>{Mayor_Child}(curious):</b> Then...What are you doing?
        
    <b>You:</b> Well,usually we just take care of our business struggling to earn money.
        
    <b>{Mayor_Child}(confused):</b> Oh...okay.
        
        After a few moments {Pronoun_2} continued to speak about the people of this city, who does what and where he/she lives.
                -> mayor_house.Mayor_child_dialog
            * [Refuse.]
        
    <b>You:</b> Sorry, but I don't really have time for this. 
        
    <b>{Mayor_Child}(dissapointed):</b> Oh...okay...I understand.
                -> mayor_house.Mayor_child_dialog

    = interior 
        * [Stay here]
            #IMAGE: images/hall.jpg
            The Mayor's child comes down the stairs with {Pronoun_1} father.
                -> greet
        * [Examine the first floor]
            #IMAGE: images/examine.jpg
           You move into the next room. Here you can see no less rich interior, everything is made of quality materials and with good taste. Moving around you start to hear some noises coming from a hall, you coome closer to it.
            * * [Proceed to move in the hall's direction]
                #IMAGE: images/proceed.jpg
                You hear some muffled sounds from this direction. You got scared, but your legs are moving on your own to it.
                
                ~ Knowledge++
                You see that this hall has a way down to a basement, the noises come from there.
                -> noise_source
        *  [Go back to the central hall]
           You decide to go back to the central hall in order to avoid possible trouble.
            -> go_back
                
    = greet 
               * [Greet the Mayor]
                #IMAGE: images/mayor.jpg
                
    <b>You:</b> Good evening, Mr.Mayor.
                
    <b>Mayor:</b> Greetings, newcomer, my child told me about you, but I would like if you could share some information with me. For example, who are you? How did you get here?

            -(answer)
                * [Tell him who you are and how you got here]
                
    <b>You:</b> I am a traveler, I spend time exploring the world and finding unique places like your city. Honestly, this is the most wonderful place I have ever seen in my entire life. As for how I got to this city, it was through a cave in the mountains. It is located in the south.
                
    <b>Mayor:</b> That's...interesting. (smirks)
                For a second, a strange spark of malevolence flickered in the mayor's eyes, but it disappeared in the blink of an eye. Maybe you are overthinking and it seemed that way to you.
                
    <b>Mayor(serious):</b> As you can see, our city is an isolated place, so we would appreciate it if it stays that way. It's incredible how you got here and I'm sure you've come a long way to this place, but it means a lot to us. My people grow up in comfortable conditions for generations and will not be able to withstand the cruelty of the outside world.
                
    <b>You:</b> Yes, I understand.
                
    <b>Mayor:</b> Very good, so as a token of appreciation, I would like to ask if you want to stay in this city or return to your homeland. But if you choose to stay, you cannot go beyond the mountains, and if you leave, you should guarantee that you will never return. 
                    Mayor's words caught you off guard, but you need to make a choice.
            -(make_choice)
                * [Stay]
                    
    <b>You:</b> I would like to stay in this city.
                    
    <b>Mayor(politely):</b> This is a wise choice, welcome to our family of citizens. Also, don't worry about where to stay, there is another man who came to the city from the outside world, he has been living for more than 40 years on the northern outskirts. I'm sure he would be happy to take you in.
                    He looks at his child looking for support.
                    
    <b>{Mayor_Child}(bewilderedly):</b> Yeah, he is indeed a very nice man and the north outskirts are a beautiful place to stay.
                    You think about their offer and, having decided to stay, see no reason to change your mind.
                    - - (stay)
                
                * [Leave]
                    
    <b>You:</b> I would like to leave.
                    
    <b>Mayor:</b> Well, that's sad, but I understand that you are bounded to your roots. At least you could stay here overnight and leave tommorow.
                  
                    
                -(agree)
                    * [Agree]
                    
    <b>You:</b> Thank you very much, I will do so.

                    {stay:
                        -> agree_stay
                    - else:
                        -> agree_leave
                    }
                    
    = agree_leave
        {Alertness >= 6 && Door:
            -> north_cave.north_wake_up
            -else:
                -> awake
        }
        
    = agree_stay
        {Knowledge >= 6:
            The Mayor sends someone to bring the old man and together you go to his house. 
            #IMAGE: images/outsk_house_night.jpg
            The man asks if you want to sleep on the sofa or on the armchair until he gets a bed for you.
            #IMAGE: images/collage/goutsk_sofa_armchair.jpg
            * [Sleep on the sofa]
                #IMAGE: images/sofa.jpg
                ->awake
            * [Sleep in the armchair]
                #IMAGE: images/arm.jpg
                ->awake
            -else:
            You got escorted by the mayor's child to the guest room and {Pronoun_2} wishes you good night. You felt tired from walking all the way, so you fell asleep as soon as your head hit the pillow. 
            Next day, the {Mayor_Child} accompanied you to the outskirts where you saw a nice house near the mountains. 
            #IMAGE: images/outsk_house.jpg
            The {Mayor_Child} knocked the door and houseowner opened it, you both were invited inside and the mayor's child explained your situation and that it would be nice if the old man lets you to live here with him.
            
            #IMAGE: images/outsk_man.jpg
            
             The old man was beaming with happiness, he was very glad to take you in and confessed that he felt very lonely for the past decades because only an outsider could understand his feeling, but until that moment he was the only one. 
             
             It's been a few weeks and you've been enjoying them wholeheartedly. Here every day is a holiday, people are always friendly, you don’t have to worry about making money, because there is no monetary system, as if you are in a fairy tale. You miss your friends from the outside but you don't want to go back to the difficulties that you encountered before.
             
             There is one thing that makes you think, a strange thing. Sometimes people come to the old man, and he goes with these people to the northern cave to help them leave the city. You don't understand why anyone would want to leave this place, here nobody needs to worry about making a living, there are no wars, any significant conflicts, hunger and pain, it's like a piece of heaven on earth. But sometimes you wonder how the northern cave looks like, is it the same like the southern one or looks different?
             
             
                * [Ask the old man about the cave]
                You approach the old man.
                
    <b>You:</b> Where does the northern cave lead? Is it the same as the one through that I came here?
                
    <b>Old man:</b> It leads to the outside world as the one you came through.
                
    <b>You:</b> Could you lead me there?
                
    <b>Old man(sorrowful):</b> You made a promise to the mayor that you would not leave the city, therefore, in order not to lose his trust, I advise you not to delve into this issue either. Live here happily, as before, in these few weeks.
                
                You were surprised that this simple question would cause such reaction.

                    #IMAGE: images/collage/cave_noCave.jpg
                        * * [Never Go to the cave]
                            #IMAGE: images/never_north_cave.jpg
                            You decided to follow the old man's advice. He lived here for a long time and knows better that will be good for you, also you really don't want to loose the mayor's trust.
                            
                            #IMAGE: images/city_le.jpg
                           Your life in this city goes on, you have adapted well to this environment, people have begun to sympathize with you and often invite you to parties or ask you for help. You feel like a real citizen of this city, as if there was no life before it. 
                            
                            Sometimes you missed your old days when you traveled around the world, but what if you did all this journey just to get here? What if this place is your destiny?
                            It seems so.
                            
                            THE END
                            ->END
                        * * [Take a look at the cave when the man falls asleep.]
                            -> north_cave
            
        }
            
        
    = awake
        You woke up in a dark place by being slapped on the face. You see the mayor and  some brutal men behind him.
        * What is happening?
            
    <b>Mayor:</b> Did you really think that you could leave this place? We are not so naive to let someone spill our secrets outside the walls.
            The Mayor addresses to his guys.
            
    <b>Mayor(mockingly):</b> Let's welcome our dear guest with some aromatherapy, I heard it's good for relaxation.
        The men took you by the shoulders.
            -> die
    = die
        * [Oppose]
             You try to resist, but you are too weak compared to them.
             #IMAGE: images/basement.jpg
             They locked you in an isolated room in the basement and started releasing some kind of gas into the room. After a while, you began to choke, your lungs were on fire and your mind was going blank...You left this place... taking a one-way ticket out of city, but its price was your life. 
             
             THE END
            ->END
    = noise_source
        * [ Go back to the central hall]
            -> go_back
        * [ See where the noise is comming from]
            #IMAGE: images/go_basement.jpg
           The noises stopped, but after a few seconds they got louder. 
            
        *{noise} [Go down to the basement]
        
                ~Alertness = Alertness + 2
                The mayor's child takes you by surprise .
                
    <b>{Mayor_Child}(smiles):</b> What are you looking for?
                * * [Make up an excuse]
                
    <b>You(surprised):</b> Oh, I was just walking...You have a very nice house.
                
    <b>{Mayor_Child}:</b> Thanks, let's go meet the mayor, he's waiting for us in the lobby. 
                * * [Ask why there are noises coming out of the basement]
                You look in the direction of the basement.
                
    <b>You:</b> What is in there? It sounds awful.
                
    <b>{Mayor_Child}(puzzledly):</b> Oh...there are rats.
                A new wave of sounds is heard from the basement.
                
    <b>{Mayor_Child}:</b> Many rats...
                On {Pronoun_1} face appeared an imprint of sadness.
                
    <b>{Mayor_Child}:</b> Let's go to the lobby, the mayor is waiting for us.
                    ~Alertness++ 

        -(noise)
            ->noise_source  
            
            
    = go_back
        #IMAGE: images/hall.jpg
        The Mayor waits you in the armchair of the central hall.
        -> greet
        
=== north_cave ===        
#IMAGE: images/north_cave.jpg
    It's midnight, the man came back after accompanying some people to the northern cave and shortly falls asleep in his room.
   You took the lantern that the old man left on the table and headed towards the cave. You started to delve into it. It didn't seem special at all compared to the one that you entered before. Well, it didn't until you started hearing screams, you wanted to turn around and leave this place immediately, but you were knocked down by a blow to the head. 
        -> north_wake_up
    = north_wake_up
        You woke, tied up in a dark place, you supposed that it is the north cave. You see the old man from the outskirts and the mayor. 
        The Mayor sees that you've come to your senses.
        
    <b>Mayor(menacingly):</b> Did you really think you could stick your nose where it doesn't belong and leave this city? No one is allowed to leave, and they will not leave. The ones who are not grateful for the great gifts of this city will face a miserable end, but don't worry, your death will not be in vain (grins). 
        You look at him perplexed. The fear took you in its claws and you don't understand what is going on.
        
    <b>Mayor:</b> I hope you have seen my beautiful garden? 
        You don't understand what he means.
        
    <b>Mayor(contemptuously):</b> Yes, you did. So, your countribution to the city will be simple, like every other traitor you will lie under the poppy field and your remains will contribute to the city's beauty. 
        Things have become really scary, you are in a panic and try to think of a way out.
        * [Ask the old man for help]
            The man comes closer to you.
            
    <b>Old man(sorrowful):</b> I told you to not look into things you must not know, but you didn't listen to me. It's such a pity that an another soul will suffer for this place, but i guess this is the price we need to pay for the better life of the majority.
            * * [Ask for mercy]
            
    <b>You(begging):</b> I will not tell anybody about this city and will never come back, just let me go. Please...
                The Mayor laughs.
            
    <b>Mayor:</b> Yes, you won't tell a single soul about this city and you'll never come back, because the dead don't talk and don't return. 
                
            * * [Threaten them] 
            
    <b>You(desperate):</b> You will pay for this! People from the outside will search for me!
                The mayor laughs.
            
    <b>Mayor:</b> We've already sealed off the cave you came from, in fact we should have done it a long time ago to prevent intruders like you from finding this place, but better late than never.
            - --> north_cave.die   
    = die
        The mayor pulls a knife from his belt and stabs you several times in the chest. You feel your soul being torn to pieces with every blow. Your blood colors the floor red, it was the same as the color of the poppy field that you saw entering the city ... It becomes very cold, life leaves your body with every breath to the last one.
        
        THE END
        
        ->END