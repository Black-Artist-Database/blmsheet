const state = {
  list: [],
  current: null
}

const mutations = {
  set_current (state, payload) {
    state.list = JSON.parse(JSON.stringify([ {
      short_name: 'JON DIXON’S QUIET GENIUS',
      name: 'JON DIXON’S QUIET GENIUS',
      credit: 'Chris Thorn',
      author: 'Crystal Mioner',
      date: '07/31/2020',
      illus: 'articles/dixon/dixon.jpg',
      introduction: "With one foot firmly rooted in jazz and the other in techno, producer and keyboardist Jon Dixon is a physical embodiment of the bridge upon which Black music spans. He’s played with everyone from Underground Resistance to Chick Corea in his 30 years of music making. On July 31st, Times of Change, his latest release for his label 4EVR 4WRD, drops on vinyl. Black Bandcamp chatted with Jon to talk about his new 4-track Hi-Tech Jazz project and his musical lineage.",
      links: [
        {
          name: 'Bandcamp link',
          url: 'https://jon-dixon.bandcamp.com/album/times-of-change-ep'
        },
        {
          name: 'Discogs link',
          url: 'https://www.discogs.com/Jon-Dixon-Times-Of-Change/release/15638403'
        },
        {
          name: 'Juno link',
          url: 'https://www.juno.co.uk/products/jon-dixon-times-of-change/766619-01/'
        },
      ],
      questions: [
        {
          type: 'question',
          title: '1. How did you meet Mike Banks and get involved with UR?',
          answer: 'I met Mike Banks in 2007 via De\'Sean Jones. The UR band, Galaxy 2 Galaxy, was looking for a keyboardist for a gig at the Montreux Jazz Fest and DeSean, who also recently met Banks at the time, mentioned my name. Mike calls me up one day and says, "If you want to travel the world playing music and get paid for it, stop by the building (Submerge) on Monday at 3 o\'clock. If not, get the f*ck on...are you down?” My immediate response, out of shock and somewhat fear,  was “Yeah!" I show up Monday, ring the bell, and a man with cornrows (Mike) opens the door,takes me upstairs to the 2nd floor, and shows me a keyboard. Mike then said, "play something." I start playing who knows what and about 5 seconds later he says, "Cool, go downstairs, talk to the manager Cornelius about getting your passport. We leave for Switzerland in 2 weeks. Rehearsal starts tomorrow." The rest is history!'
        },
        {
          type: 'question',
          title: '2. How did you end up working with Britt Frappier?',
          answer: 'I met Britt through her husband and amazing musician Frap, also known as Andre. They both have a band known as Small Creatures and they called me for a few shows in Detroit a couple years ago. One day while driving and listening to \'Black Rose\', which is nowhere near the tempo of the remix I did, I noticed how amazing Britt\'s vocals and writing were. So I hit her and Frap up about getting the vocals to do a remix just for fun. What turned out as doing something for fun has led to a release to the song, as well as an EP the 3 of us are working on. I also asked her to be on my newest EP \'Times of Change\'. She\'s featured on \'Move 4WRD\'.'
        },
        {
          type: 'image',
          path: 'articles/dixon/dixon1.jpg'
        },
        {
          type: 'question',
          title: '3. What does your typical day to day look like in quarantine?',
          answer: 'Since COVID my day to day is a bit more concrete. I spend a lot of time with my almost 2 year old son during the mornings and afternoons. I\'m still able to teach my group piano classes and private students through the week. When he goes down to sleep for his nap and at night is when I work on music, cook, or spend time with my wife.'
        },
        {
          type: 'quote',
          answer:  '"When you care about an artform, the last thing you want to see, is it turned into something it wasn\'t meant to be. To avoid that from happening, you have to invest time and energy and educate those willing to listen and learn."'
        },
        {
          type: 'question',
          title: '4. What role do you think that intergenerational mentorship plays in keeping the spirit of Hi-Tech Jazz alive?',
          answer: 'A huge one! It doesn\'t get mentioned enough. When you care about an artform the last thing you want is to see it turn into something it wasn\'t meant to be. To avoid that from happening, you have to invest time and energy and educate those willing to listen and learn. I\'ve been blessed to not only have great mentors in electronic music like Mike Banks, Carl Craig, Waajeed, Amp Fiddler, Goldie, Derrick May, Kai Alce and more, but also Detroit\'s late Godfather of jazz, Marcus Belgrave. As a Detroit artist, I\'m responsible for the generation after me. So why not share what I know to not only help the next generation, but position them to be able to push the music further. I didn\'t get to where I am by myself, so instead of withholding all I was taught, I share it.'
        },
        {
          type: 'question',
          title: '5. What upcoming artists do you feel represent the future of Hi-Tech Jazz?',
          answer: 'Although he\'s been on the scene and music industry for a minute, Waajeed is definitely representing the future of Hi-Tech Jazz. Another producer and upcoming artist who is killing it is Darrius Quince. I met him when he was about 7 years old and he played organ at the church I played at. He goes by the alias Inkredibeatz and he has an edit on my last EP entitled \'Want It\'. I just spoke to him yesterday about Bandcamp and am working alongside him to get his music heard by the world. He\'s a bright musician and has a crazy ear for melody and harmony. Kenny Dixon (Moodymann) once said, "some of the greatest music being created you\'ll never hear." There are so many artists, not only in Detroit, but globally who may not have the ability to get themselves or their music out there for the world to hear. They\'re in their studios or on their laptops making some of the most amazing music. And sadly, it could get overlooked. I\'m hopeful that those out there making Hi-Tech Jazz will be heard and maybe some collaborations/releases can happen on my label 4EVR 4WRD.'
        },
        {
          type: 'image',
          path: 'articles/dixon/dixon2.jpg'
        },
        {
          type: 'question',
          title: '6. Do you think artists have a responsibility to speak out on injustices?',
          answer: 'It depends on the artist. I can\'t speak for everyone, but for me I want to be able to make the biggest impact in the most realistic way. It could be educating some of the students I teach and prepping them on what to expect when being a black artist. It could also be in the form of music. Coming from the school of UR and having over 30 years of musical experience, I\'m able to best express what I\'m feeling musically. And all this can be in addition to doing what must be done without feeling the need to post it on social media.'
        },
        {
          type: 'question',
          title: '7. Why do so many Detroit artists end up leaving the city? How could the city better support them?',
          answer: 'It could be a number of reasons. Some artists have families and don\'t want to raise them in Detroit. Others may want a change of scenery to help inspire the art they make. I think the city is becoming more aware of its rich art community and the impact that we have globally, but things like more arts programs are needed. We do have great programs that aren\'t in the schools like Spin Inc. that are keeping the youth engaged in music, but that\'s not enough. My biggest fear is that Detroit becomes a has been, in terms of the art that it creates. Young artists, not just in music, need spaces that they can create and share their art. They are the future of what this city is known for, which is being at the forefront of whatever the next big thing is.'
        }
      ],
      footer_links: [
        {
          name: 'Artist Social',
          url: 'https://www.instagram.com/jonnynabb/'
        },
        {
          name: 'Writer Social',
          url: 'https://www.instagram.com/crystal.mioner/'
        }
      ]
    },
    {
      short_name: 'BLAQKONGO ON "38 DAYS 38 WAYS"',
      name: 'TAKE OFF ON A SONICALLY ENTRANCING JOURNEY WITH BLAQKONGO ON "38 DAYS 38 WAYS"',
      credit: 'Keith Virgo',
      author: 'Lauryn Njeri',
      date: '07/31/2020',
      illus: 'articles/bakongo/bakongo.jpg',
      links: [],
      questions: [
        {
          type: 'question',
          answer: 'South Africa’s electronic music scene is quickly dominating the African continent. Many listeners under the Electronic category across the globe are filling their hearts with the uplifting rhythms from South Africa. One of the key players in this music scene who is surely making heavy strides goes by the name blaqkongo. Currently based in Capetown, South Africa, blaqkongo is a Producer and DJ who’s musical roots are deeply clawed in the electronic music scene exploring various sub-genres including House (Deep and Tech), Techno and everything in between.'
        },
        {
          type: 'question',
          title: '',
          answer: 'At the beginning of the global lockdown, just like most of us dedicated our time to picking up a new hobby, working out, or doing absolutely nothing, blaqkongo and his counterpart; Mr Blasé took on a musical challenge of their own. The electronic music producers embarked on a journey to create one song each week for five weeks which led to the birth of brainchild; “38 Days 38 Ways”. During the five weeks, they both kept their followers engaged with a slew of well-crafted tracks that explored both concepts of easy listening charm, as well as dancefloor heavy-hitters, where of course the electronic music genre is most at home.'
        },
        {
          type: 'question',
          answer: 'Blaqkongo and  Mr Blasé have already released some of the music that was spawned by the project on the 19th June, which has quickly garnered a massive listenership, even gracing the 4th position in the best new Deep House, June, category on the Beatport platform. Blaqkongo has now decided to follow up with a Bonus Tracks EP via his label Blaqkongo Music on which features a rework of his lead single "Somethin\' Bout U" and an instrumental version of the deep and pensive "Always There."'
        },
        {
          type: 'question',
          answer: 'I had the honour of having a chat about how life has been for him during the social distancing era as well as his journey to creating "38 Daya 38 Ways".'
        },
        {
          type: 'question',
          answer: 'As a DJ and producer who gigs regularly, Blaqkongo shared a little on how  his craft has been affected by the global COVID-19 pandemic. "<i>I organize quite a few events in Cape Town - individually and as part of a collective - so this time has been quite tough as this was our main revenue stream.</i>" However, he says "<i>It’s been interesting because whilst I’m not playing as frequently as I used to, beautiful new opportunities to network globally, get gigs, and work on music have become available. On top of that, the challenges that come with this time allow for growth and learning, and for that, I’m grateful.</i>"'
        },
        {
          type: 'question',
          answer: 'We further went on to discuss how the producer has been spending his days during South Africa\'s nationwide lockdown. Just as expected, blakqongo gave away that a typical day in his life would look a little something  like "<i>Produce, DJ, produce, DJ, produce! Nah just messing around.</i>" He laughed. "<i>But the first 5-6 weeks of my lockdown did actually look like that. I did weekly livestreams where I would explore different vibes that I love, including stuff I don\'t usually play out - Jazz, Bossa Nova, Funk, Blues, Percussive Latin and African Music, RnB, Neo Soul amongst my regular stuff like Soulful and Deep House. I made 8 playlists for each week that I did the livestreams which you can find via my Spotify :)</i>"<br>As the neverending days went by however, he let us know "<i>Now, I just take every day as it comes - I wake up and meditate, read, and then just take each moment as it comes.</i>"'
        },
        {
          type: 'quote',
          answer: '"In the past, I struggled to make honest music because I always wanted to make a song like ‘this guy or a banger like that guy. This time, I wasn’t trying to be like someone, making bangers, making deep songs, or any of that, I just wanted to create music that made me happy"'
        },
        {
          type: 'question',
          title: '',
          answer: '"38 Days 38 Ways" is a title that quickly stirred the curiosity within me. Eager to know how it came to be, blaqkongo profoundly shared, "<i>So along with the weekly livestreams, a friend and I also decided to do a "Beat-A-Week" challenge where every Saturday we’d start a song and drop it the following Friday. After 5 and a half weeks, I had made all the songs that are on the EP and the tracks are the most honest music I have ever written.</i>" He highlighted that "<i>The title is reflective of the number of days it took to craft the EP and the cathartic creative process I went through.</i>"'
        },
        {
          type: 'image',
          path: 'articles/bakongo/bakongo1.jpg'
        },
        {
          type: 'question',
          title: '',
          answer: 'Seeing as how he evidently has a mindfully systematic way of doing things, he further went ahead to intricately describe his creative process for this project. He passionately shared, "<i>to me, the process was really about just creating. Nothing more, nothing less. In the past, I struggled to make honest music because I always wanted to make "a song like this guy" or "a banger like that guy". This time, I wasn’t trying to be like someone, making bangers, making deep songs, or any of that, I just wanted to create music that made me happy. That was literally my only measure - does it sound good and feel good to me? Yeah? Okay it’s done then!</i>"',
        },
        {
          type: 'question',
          title: '',
          answer: 'When I first listened to "38 Days 38 Ways" I was immediately struck by the honest emotions it brought forth. Each track led me into a euphoric trance, not to mention the nostalgic feels that took me back to the good old days on the dancefloor at my favourite festivals. The project’s seamless flow can be easily compared to walking through a tunnel filled with comforting baselines, high vibrations and symphonic melodies; each playing with a different part of your psyche in a fun and hypnotic way.'
        },
        {
          type: 'question',
          title: '',
          answer: 'The  EP definitely lives up to blaqkongo’s expectations because when asked what one should expect with this delightful body of work he concurred with my experience by saying "<i>Love, light, joy and euphoria. No jokes, if you give yourself to the project, it’s a beautiful journey</i>". The talented producer was also sure to point out that "<i>The Bonus Tracks EP focuses on creating a re-imagined mood of the lead single from the original project and an instrumental mix of a song called Always There, also from the original EP. My suggestion would be to play the OG EP and then go straight into the Bonus Tracks.</i>"'
        },
        {
          type: 'question',
          title: '',
          answer: 'After this already exhilarating listen, I was excited to know what else blaqkongo has in store for his fans in the near future. He gave his honest word when he stated "<i>It definitely is in my plans to release more music this year but I don’t want to create expectations. I’m working at my own pace to create more authentic music that comes from a pure place. If I create something that feels right, it’s very likely that you’ll hear it sooner than later! I believe music is a spiritual thing and it heals, so I don’t plan on holding records back, the music must be free. Everyone needs it!</i>"'
        },
        {
          type: 'question',
          title: '',
          answer: 'Carried away by my own reminiscence, I was keen to know where blaqkongo would have loved to be fulfilling his passions, say the current global circumstances were different. "<i>First and foremost I would love to be playing at an event I regularly host called Casa Kongo! It focuses on a lot of percussive driven music and we have such a beautiful community of real music lovers who just come with all the right energy!</i>" He shares with much excitement. "<i>Next in line would be two Cape Town based events called Slow Cooked Sundays and We House Sundays - two sunday day-parties that really shake things up on these ends! On the international front, I would have loved to play in Berlin and Amsterdam this summer!</i>"'
        },
        {
          type: 'question',
          title: '',
          answer: 'While COVID has wreaked havoc in the daily routines and livelihood of many,  it is refreshing to hear how these two artists have managed to sidestep some of the sombreness around this period to deliver two releases that breathe new life into the electronic music scene. Awash with low slung grooviness, lush synth work and nimble use of vocal samples, each track on this EP will no doubt find fans among those followers of such groove luminaries as DetroitSwindle, Atjazz and Joe Kay, to name a few.'
        }

      ],
      footer_links: [
        {
          name: 'Blaqkongo on "38 days 38 ways", release date 31st July 2020',
          url: 'http://blaqkongo.bandcamp.com/album/38-days-38-ways'
        },
        {
          name: 'Producer’s social',
          url: 'http://www.instagram.com/blaqkongo/'
        },
        {
          name: 'Writer’s social',
          url: 'https://www.instagram.com/laurynlikethehills_'
        }
      ]
    }]))
    state.current = payload
  },
  set_current_by_id(state, payload) {
    state.list = JSON.parse(JSON.stringify([ {
      short_name: 'JON DIXON’S QUIET GENIUS',
      name: 'JON DIXON’S QUIET GENIUS',
      credit: 'Chris Thorn',
      author: 'Crystal Mioner',
      date: '07/31/2020',
      illus: 'articles/dixon/dixon.jpg',
      introduction: "With one foot firmly rooted in jazz and the other in techno, producer and keyboardist Jon Dixon is a physical embodiment of the bridge upon which Black music spans. He’s played with everyone from Underground Resistance to Chick Corea in his 30 years of music making. On July 31st, Times of Change, his latest release for his label 4EVR 4WRD, drops on vinyl. Black Bandcamp chatted with Jon to talk about his new 4-track Hi-Tech Jazz project and his musical lineage.",
      links: [
        {
          name: 'Bandcamp link',
          url: 'https://jon-dixon.bandcamp.com/album/times-of-change-ep'
        },
        {
          name: 'Discogs link',
          url: 'https://www.discogs.com/Jon-Dixon-Times-Of-Change/release/15638403'
        },
        {
          name: 'Juno link',
          url: 'https://www.juno.co.uk/products/jon-dixon-times-of-change/766619-01/'
        },
      ],
      questions: [
        {
          type: 'question',
          title: '1. How did you meet Mike Banks and get involved with UR?',
          answer: 'I met Mike Banks in 2007 via De\'Sean Jones. The UR band, Galaxy 2 Galaxy, was looking for a keyboardist for a gig at the Montreux Jazz Fest and DeSean, who also recently met Banks at the time, mentioned my name. Mike calls me up one day and says, "If you want to travel the world playing music and get paid for it, stop by the building (Submerge) on Monday at 3 o\'clock. If not, get the f*ck on...are you down?” My immediate response, out of shock and somewhat fear,  was “Yeah!" I show up Monday, ring the bell, and a man with cornrows (Mike) opens the door,takes me upstairs to the 2nd floor, and shows me a keyboard. Mike then said, "play something." I start playing who knows what and about 5 seconds later he says, "Cool, go downstairs, talk to the manager Cornelius about getting your passport. We leave for Switzerland in 2 weeks. Rehearsal starts tomorrow." The rest is history!'
        },
        {
          type: 'question',
          title: '2. How did you end up working with Britt Frappier?',
          answer: 'I met Britt through her husband and amazing musician Frap, also known as Andre. They both have a band known as Small Creatures and they called me for a few shows in Detroit a couple years ago. One day while driving and listening to \'Black Rose\', which is nowhere near the tempo of the remix I did, I noticed how amazing Britt\'s vocals and writing were. So I hit her and Frap up about getting the vocals to do a remix just for fun. What turned out as doing something for fun has led to a release to the song, as well as an EP the 3 of us are working on. I also asked her to be on my newest EP \'Times of Change\'. She\'s featured on \'Move 4WRD\'.'
        },
        {
          type: 'image',
          path: 'articles/dixon/dixon1.jpg'
        },
        {
          type: 'question',
          title: '3. What does your typical day to day look like in quarantine?',
          answer: 'Since COVID my day to day is a bit more concrete. I spend a lot of time with my almost 2 year old son during the mornings and afternoons. I\'m still able to teach my group piano classes and private students through the week. When he goes down to sleep for his nap and at night is when I work on music, cook, or spend time with my wife.'
        },
        {
          type: 'quote',
          answer:  '"When you care about an artform, the last thing you want to see, is it turned into something it wasn\'t meant to be. To avoid that from happening, you have to invest time and energy and educate those willing to listen and learn."'
        },
        {
          type: 'question',
          title: '4. What role do you think that intergenerational mentorship plays in keeping the spirit of Hi-Tech Jazz alive?',
          answer: 'A huge one! It doesn\'t get mentioned enough. When you care about an artform the last thing you want is to see it turn into something it wasn\'t meant to be. To avoid that from happening, you have to invest time and energy and educate those willing to listen and learn. I\'ve been blessed to not only have great mentors in electronic music like Mike Banks, Carl Craig, Waajeed, Amp Fiddler, Goldie, Derrick May, Kai Alce and more, but also Detroit\'s late Godfather of jazz, Marcus Belgrave. As a Detroit artist, I\'m responsible for the generation after me. So why not share what I know to not only help the next generation, but position them to be able to push the music further. I didn\'t get to where I am by myself, so instead of withholding all I was taught, I share it.'
        },
        {
          type: 'question',
          title: '5. What upcoming artists do you feel represent the future of Hi-Tech Jazz?',
          answer: 'Although he\'s been on the scene and music industry for a minute, Waajeed is definitely representing the future of Hi-Tech Jazz. Another producer and upcoming artist who is killing it is Darrius Quince. I met him when he was about 7 years old and he played organ at the church I played at. He goes by the alias Inkredibeatz and he has an edit on my last EP entitled \'Want It\'. I just spoke to him yesterday about Bandcamp and am working alongside him to get his music heard by the world. He\'s a bright musician and has a crazy ear for melody and harmony. Kenny Dixon (Moodymann) once said, "some of the greatest music being created you\'ll never hear." There are so many artists, not only in Detroit, but globally who may not have the ability to get themselves or their music out there for the world to hear. They\'re in their studios or on their laptops making some of the most amazing music. And sadly, it could get overlooked. I\'m hopeful that those out there making Hi-Tech Jazz will be heard and maybe some collaborations/releases can happen on my label 4EVR 4WRD.'
        },
        {
          type: 'image',
          path: 'articles/dixon/dixon2.jpg'
        },
        {
          type: 'question',
          title: '6. Do you think artists have a responsibility to speak out on injustices?',
          answer: 'It depends on the artist. I can\'t speak for everyone, but for me I want to be able to make the biggest impact in the most realistic way. It could be educating some of the students I teach and prepping them on what to expect when being a black artist. It could also be in the form of music. Coming from the school of UR and having over 30 years of musical experience, I\'m able to best express what I\'m feeling musically. And all this can be in addition to doing what must be done without feeling the need to post it on social media.'
        },
        {
          type: 'question',
          title: '7. Why do so many Detroit artists end up leaving the city? How could the city better support them?',
          answer: 'It could be a number of reasons. Some artists have families and don\'t want to raise them in Detroit. Others may want a change of scenery to help inspire the art they make. I think the city is becoming more aware of its rich art community and the impact that we have globally, but things like more arts programs are needed. We do have great programs that aren\'t in the schools like Spin Inc. that are keeping the youth engaged in music, but that\'s not enough. My biggest fear is that Detroit becomes a has been, in terms of the art that it creates. Young artists, not just in music, need spaces that they can create and share their art. They are the future of what this city is known for, which is being at the forefront of whatever the next big thing is.'
        }
      ],
      footer_links: [
        {
          name: 'Artist Social',
          url: 'https://www.instagram.com/jonnynabb/'
        },
        {
          name: 'Writer Social',
          url: 'https://www.instagram.com/crystal.mioner/'
        }
      ]
    },
    {
      short_name: 'BLAQKONGO ON "38 DAYS 38 WAYS"',
      name: 'TAKE OFF ON A SONICALLY ENTRANCING JOURNEY WITH BLAQKONGO ON "38 DAYS 38 WAYS"',
      credit: 'Keith Virgo',
      author: 'Lauryn Njeri',
      date: '07/31/2020',
      illus: 'articles/bakongo/bakongo.jpg',
      links: [],
      questions: [
        {
          type: 'question',
          answer: 'South Africa’s electronic music scene is quickly dominating the African continent. Many listeners under the Electronic category across the globe are filling their hearts with the uplifting rhythms from South Africa. One of the key players in this music scene who is surely making heavy strides goes by the name blaqkongo. Currently based in Capetown, South Africa, blaqkongo is a Producer and DJ who’s musical roots are deeply clawed in the electronic music scene exploring various sub-genres including House (Deep and Tech), Techno and everything in between.'
        },
        {
          type: 'question',
          title: '',
          answer: 'At the beginning of the global lockdown, just like most of us dedicated our time to picking up a new hobby, working out, or doing absolutely nothing, blaqkongo and his counterpart; Mr Blasé took on a musical challenge of their own. The electronic music producers embarked on a journey to create one song each week for five weeks which led to the birth of brainchild; “38 Days 38 Ways”. During the five weeks, they both kept their followers engaged with a slew of well-crafted tracks that explored both concepts of easy listening charm, as well as dancefloor heavy-hitters, where of course the electronic music genre is most at home.'
        },
        {
          type: 'question',
          answer: 'Blaqkongo and  Mr Blasé have already released some of the music that was spawned by the project on the 19th June, which has quickly garnered a massive listenership, even gracing the 4th position in the best new Deep House, June, category on the Beatport platform. Blaqkongo has now decided to follow up with a Bonus Tracks EP via his label Blaqkongo Music on which features a rework of his lead single "Somethin\' Bout U" and an instrumental version of the deep and pensive "Always There."'
        },
        {
          type: 'question',
          answer: 'I had the honour of having a chat about how life has been for him during the social distancing era as well as his journey to creating "38 Daya 38 Ways".'
        },
        {
          type: 'question',
          answer: 'As a DJ and producer who gigs regularly, Blaqkongo shared a little on how  his craft has been affected by the global COVID-19 pandemic. "<i>I organize quite a few events in Cape Town - individually and as part of a collective - so this time has been quite tough as this was our main revenue stream.</i>" However, he says "<i>It’s been interesting because whilst I’m not playing as frequently as I used to, beautiful new opportunities to network globally, get gigs, and work on music have become available. On top of that, the challenges that come with this time allow for growth and learning, and for that, I’m grateful.</i>"'
        },
        {
          type: 'question',
          answer: 'We further went on to discuss how the producer has been spending his days during South Africa\'s nationwide lockdown. Just as expected, blakqongo gave away that a typical day in his life would look a little something  like "<i>Produce, DJ, produce, DJ, produce! Nah just messing around.</i>" He laughed. "<i>But the first 5-6 weeks of my lockdown did actually look like that. I did weekly livestreams where I would explore different vibes that I love, including stuff I don\'t usually play out - Jazz, Bossa Nova, Funk, Blues, Percussive Latin and African Music, RnB, Neo Soul amongst my regular stuff like Soulful and Deep House. I made 8 playlists for each week that I did the livestreams which you can find via my Spotify :)</i>"<br>As the neverending days went by however, he let us know "<i>Now, I just take every day as it comes - I wake up and meditate, read, and then just take each moment as it comes.</i>"'
        },
        {
          type: 'quote',
          answer: '"In the past, I struggled to make honest music because I always wanted to make a song like ‘this guy or a banger like that guy. This time, I wasn’t trying to be like someone, making bangers, making deep songs, or any of that, I just wanted to create music that made me happy"'
        },
        {
          type: 'question',
          title: '',
          answer: '"38 Days 38 Ways" is a title that quickly stirred the curiosity within me. Eager to know how it came to be, blaqkongo profoundly shared, "<i>So along with the weekly livestreams, a friend and I also decided to do a "Beat-A-Week" challenge where every Saturday we’d start a song and drop it the following Friday. After 5 and a half weeks, I had made all the songs that are on the EP and the tracks are the most honest music I have ever written.</i>" He highlighted that "<i>The title is reflective of the number of days it took to craft the EP and the cathartic creative process I went through.</i>"'
        },
        {
          type: 'image',
          path: 'articles/bakongo/bakongo1.jpg'
        },
        {
          type: 'question',
          title: '',
          answer: 'Seeing as how he evidently has a mindfully systematic way of doing things, he further went ahead to intricately describe his creative process for this project. He passionately shared, "<i>to me, the process was really about just creating. Nothing more, nothing less. In the past, I struggled to make honest music because I always wanted to make "a song like this guy" or "a banger like that guy". This time, I wasn’t trying to be like someone, making bangers, making deep songs, or any of that, I just wanted to create music that made me happy. That was literally my only measure - does it sound good and feel good to me? Yeah? Okay it’s done then!</i>"',
        },
        {
          type: 'question',
          title: '',
          answer: 'When I first listened to "38 Days 38 Ways" I was immediately struck by the honest emotions it brought forth. Each track led me into a euphoric trance, not to mention the nostalgic feels that took me back to the good old days on the dancefloor at my favourite festivals. The project’s seamless flow can be easily compared to walking through a tunnel filled with comforting baselines, high vibrations and symphonic melodies; each playing with a different part of your psyche in a fun and hypnotic way.'
        },
        {
          type: 'question',
          title: '',
          answer: 'The  EP definitely lives up to blaqkongo’s expectations because when asked what one should expect with this delightful body of work he concurred with my experience by saying "<i>Love, light, joy and euphoria. No jokes, if you give yourself to the project, it’s a beautiful journey</i>". The talented producer was also sure to point out that "<i>The Bonus Tracks EP focuses on creating a re-imagined mood of the lead single from the original project and an instrumental mix of a song called Always There, also from the original EP. My suggestion would be to play the OG EP and then go straight into the Bonus Tracks.</i>"'
        },
        {
          type: 'question',
          title: '',
          answer: 'After this already exhilarating listen, I was excited to know what else blaqkongo has in store for his fans in the near future. He gave his honest word when he stated "<i>It definitely is in my plans to release more music this year but I don’t want to create expectations. I’m working at my own pace to create more authentic music that comes from a pure place. If I create something that feels right, it’s very likely that you’ll hear it sooner than later! I believe music is a spiritual thing and it heals, so I don’t plan on holding records back, the music must be free. Everyone needs it!</i>"'
        },
        {
          type: 'question',
          title: '',
          answer: 'Carried away by my own reminiscence, I was keen to know where blaqkongo would have loved to be fulfilling his passions, say the current global circumstances were different. "<i>First and foremost I would love to be playing at an event I regularly host called Casa Kongo! It focuses on a lot of percussive driven music and we have such a beautiful community of real music lovers who just come with all the right energy!</i>" He shares with much excitement. "<i>Next in line would be two Cape Town based events called Slow Cooked Sundays and We House Sundays - two sunday day-parties that really shake things up on these ends! On the international front, I would have loved to play in Berlin and Amsterdam this summer!</i>"'
        },
        {
          type: 'question',
          title: '',
          answer: 'While COVID has wreaked havoc in the daily routines and livelihood of many,  it is refreshing to hear how these two artists have managed to sidestep some of the sombreness around this period to deliver two releases that breathe new life into the electronic music scene. Awash with low slung grooviness, lush synth work and nimble use of vocal samples, each track on this EP will no doubt find fans among those followers of such groove luminaries as DetroitSwindle, Atjazz and Joe Kay, to name a few.'
        }

      ],
      footer_links: [
        {
          name: 'Blaqkongo on "38 days 38 ways", release date 31st July 2020',
          url: 'http://blaqkongo.bandcamp.com/album/38-days-38-ways'
        },
        {
          name: 'Producer’s social',
          url: 'http://www.instagram.com/blaqkongo/'
        },
        {
          name: 'Writer’s social',
          url: 'https://www.instagram.com/laurynlikethehills_'
        }
      ]
    }]))
    state.current = state.list[payload]
  }
}

export default  {
  namespaced: true,
  state,
  mutations
}
