const state = {
  list: [],
  current: null
}

const mutations = {
  set_current (state, payload) {
    state.list = JSON.parse(JSON.stringify([ {
      short_name: 'JON DIXON’S QUIET GENIUS',
      name: 'JON DIXON’S QUIET GENIUS',
      bandcamp_link: "https://jon-dixon.bandcamp.com/album/times-of-change-ep",
      bandcamp_id: "1091411619",
      credit: 'Chris Thorn',
      author: 'Crystal Mioner',
      date: '07/31/2020',
      illus: 'articles/dixon/dixon.jpg',
      introduction: "With one foot firmly rooted in jazz and the other in techno, producer and keyboardist Jon Dixon is a physical embodiment of the bridge upon which Black music spans. He’s played with everyone from Underground Resistance to Chick Corea in his 30 years of music making. On July 31st, Times of Change, his latest release for his label 4EVR 4WRD, drops on vinyl. Black Bandcamp chatted with Jon to talk about his new 4-track Hi-Tech Jazz project and his musical lineage.",
      links: [
        {
          name: 'Purchase on Bandcamp here',
          url: 'https://jon-dixon.bandcamp.com/album/times-of-change-ep'
        },
        {
          name: 'Purchase on Discogs here',
          url: 'https://www.discogs.com/Jon-Dixon-Times-Of-Change/release/15638403'
        },
        {
          name: 'Purchase on Juno here',
          url: 'https://www.juno.co.uk/products/jon-dixon-times-of-change/766619-01/'
        },
      ],
      questions: [
        {
          type: 'question',
          title: 'How did you meet Mike Banks and get involved with UR?',
          answer: 'I met Mike Banks in 2007 via De\'Sean Jones. The UR band, Galaxy 2 Galaxy, was looking for a keyboardist for a gig at the Montreux Jazz Fest and DeSean, who also recently met Banks at the time, mentioned my name. Mike calls me up one day and says, "If you want to travel the world playing music and get paid for it, stop by the building (Submerge) on Monday at 3 o\'clock. If not, get the f*ck on...are you down?” My immediate response, out of shock and somewhat fear,  was “Yeah!" I show up Monday, ring the bell, and a man with cornrows (Mike) opens the door,takes me upstairs to the 2nd floor, and shows me a keyboard. Mike then said, "play something." I start playing who knows what and about 5 seconds later he says, "Cool, go downstairs, talk to the manager Cornelius about getting your passport. We leave for Switzerland in 2 weeks. Rehearsal starts tomorrow." The rest is history!'
        },
        {
          type: 'question',
          title: 'How did you end up working with Britt Frappier?',
          answer: 'I met Britt through her husband and amazing musician Frap, also known as Andre. They both have a band known as Small Creatures and they called me for a few shows in Detroit a couple years ago. One day while driving and listening to \'Black Rose\', which is nowhere near the tempo of the remix I did, I noticed how amazing Britt\'s vocals and writing were. So I hit her and Frap up about getting the vocals to do a remix just for fun. What turned out as doing something for fun has led to a release to the song, as well as an EP the 3 of us are working on. I also asked her to be on my newest EP \'Times of Change\'. She\'s featured on \'Move 4WRD\'.'
        },
        {
          type: 'image',
          path: 'articles/dixon/dixon1.jpg'
        },
        {
          type: 'question',
          title: 'What does your typical day to day look like in quarantine?',
          answer: 'Since COVID my day to day is a bit more concrete. I spend a lot of time with my almost 2 year old son during the mornings and afternoons. I\'m still able to teach my group piano classes and private students through the week. When he goes down to sleep for his nap and at night is when I work on music, cook, or spend time with my wife.'
        },
        {
          type: 'quote',
          answer:  '"When you care about an artform, the last thing you want to see, is it turned into something it wasn\'t meant to be. To avoid that from happening, you have to invest time and energy and educate those willing to listen and learn."'
        },
        {
          type: 'question',
          title: 'What role do you think that intergenerational mentorship plays in keeping the spirit of Hi-Tech Jazz alive?',
          answer: 'A huge one! It doesn\'t get mentioned enough. When you care about an artform the last thing you want is to see it turn into something it wasn\'t meant to be. To avoid that from happening, you have to invest time and energy and educate those willing to listen and learn. I\'ve been blessed to not only have great mentors in electronic music like Mike Banks, Carl Craig, Waajeed, Amp Fiddler, Goldie, Derrick May, Kai Alce and more, but also Detroit\'s late Godfather of jazz, Marcus Belgrave. As a Detroit artist, I\'m responsible for the generation after me. So why not share what I know to not only help the next generation, but position them to be able to push the music further. I didn\'t get to where I am by myself, so instead of withholding all I was taught, I share it.'
        },
        {
          type: 'question',
          title: 'What upcoming artists do you feel represent the future of Hi-Tech Jazz?',
          answer: 'Although he\'s been on the scene and music industry for a minute, Waajeed is definitely representing the future of Hi-Tech Jazz. Another producer and upcoming artist who is killing it is Darrius Quince. I met him when he was about 7 years old and he played organ at the church I played at. He goes by the alias Inkredibeatz and he has an edit on my last EP entitled \'Want It\'. I just spoke to him yesterday about Bandcamp and am working alongside him to get his music heard by the world. He\'s a bright musician and has a crazy ear for melody and harmony. Kenny Dixon (Moodymann) once said, "some of the greatest music being created you\'ll never hear." There are so many artists, not only in Detroit, but globally who may not have the ability to get themselves or their music out there for the world to hear. They\'re in their studios or on their laptops making some of the most amazing music. And sadly, it could get overlooked. I\'m hopeful that those out there making Hi-Tech Jazz will be heard and maybe some collaborations/releases can happen on my label 4EVR 4WRD.'
        },
        {
          type: 'image',
          path: 'articles/dixon/dixon2.jpg'
        },
        {
          type: 'question',
          title: 'Do you think artists have a responsibility to speak out on injustices?',
          answer: 'It depends on the artist. I can\'t speak for everyone, but for me I want to be able to make the biggest impact in the most realistic way. It could be educating some of the students I teach and prepping them on what to expect when being a black artist. It could also be in the form of music. Coming from the school of UR and having over 30 years of musical experience, I\'m able to best express what I\'m feeling musically. And all this can be in addition to doing what must be done without feeling the need to post it on social media.'
        },
        {
          type: 'question',
          title: 'Why do so many Detroit artists end up leaving the city? How could the city better support them?',
          answer: 'It could be a number of reasons. Some artists have families and don\'t want to raise them in Detroit. Others may want a change of scenery to help inspire the art they make. I think the city is becoming more aware of its rich art community and the impact that we have globally, but things like more arts programs are needed. We do have great programs that aren\'t in the schools like Spin Inc. that are keeping the youth engaged in music, but that\'s not enough. My biggest fear is that Detroit becomes a has been, in terms of the art that it creates. Young artists, not just in music, need spaces that they can create and share their art. They are the future of what this city is known for, which is being at the forefront of whatever the next big thing is.'
        }
      ],
      footer_links: [
        {
          name: 'Follow Jon Dixon',
          url: 'https://www.instagram.com/jonnynabb/'
        },
        {
          name: 'Follow the writer',
          url: 'https://www.instagram.com/crystal.mioner/'
        }
      ]
    },
    {

      short_name: 'BLAQKONGO ON "38 DAYS 38 WAYS"',
      name: 'TAKE OFF ON A SONICALLY ENTRANCING JOURNEY WITH BLAQKONGO ON "38 DAYS 38 WAYS"',
      bandcamp_link: "http://blaqkongo.bandcamp.com/album/38-days-38-ways",
      bandcamp_id: "1667379909",
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
          name: 'Follow Blaqkongo',
          url: 'http://www.instagram.com/blaqkongo/'
        },
        {
          name: 'Follow Lauryn Njeri',
          url: 'https://www.instagram.com/laurynlikethehills_'
        }
      ]
    },
    {
      short_name: 'Josh Caffé talks Collaborating with Honey Dijon',
      name: 'Josh Caffé talks Collaborating with Honey Dijon on Playful New Track \'La Femme Fantastique\'',
      bandcamp_link: "https://honeydijon.bandcamp.com/album/la-femme-fantastique-extended-mix",
      bandcamp_id: "2265069030",
      credit: null,
      author: 'Tanya Akinola',
      date: '08/07/2020',
      illus: 'articles/honey/honey.jpg',
      introduction: "Honey Dijon is globally renowned in the spheres of dance music, art and fashion. However, despite playing across continents at major music festivals and nightclubs, and working with powerhouse fashion brands like Comme des Garçons, Dijon has a long history as an engaged music lover and dancer first. Her earlier days within the underground communities of Chicago and New York’s Black and queer clubs have shaped her artistry, and still deeply inform the work she produces today.<br><br>Her approach to music production also comes from the vantage point of a club-goer. Dijon doesn’t cater to trends, but rather makes timeless feel-good music crafted to elevate dance floors. Her new album, Black Girl Magic, is due out on Luke Solomon & Derrick Carter's <a href=\"https://classicmusiccompany.bandcamp.com/\" target=\"_blank\">Classic Music Company</a> and is set to further expand upon her vivacious sound palette. Today, Dijon releases the second teaser off the album, 'La Femme Fantastique' which features magnetic vocals from London-based musician Josh Caffé.<br><br>Caffé is a multi-talented artist and vocalist who breathes new life into the time-tested pairing of powerful vocals and house music. As co-founder of the club night, talk series and record label <a href=\"https://www.instagram.com/lovechildldn/\" target=\"_blank\">Love Child</a>, Caffé is also a staple in London's queer dance music community.<br><br>'La Femme Fantastique' is a playful track that channels the energy of a sweaty, flirty dancefloor. It’s available through <a href=\"https://honeydijon.bandcamp.com/album/la-femme-fantastique-extended-mix\" target=\"_blank\">Bandcamp</a> this Friday 7th of August with the album to follow later this year. We had a chat with Josh Caffé about how he and Honey Dijon met, what it was like to work together on the track and what inspired his vocal stylings.",
      links: [
        {
          name: 'Purchase on bandcamp here',
          url: 'https://honeydijon.bandcamp.com/album/la-femme-fantastique-extended-mix'
        }
      ],
      questions: [
        {
          type: 'question',
          title: 'First off, how are you?',
          answer: 'Good, thanks! Up and down with everything that\'s going on right now, but staying positive and cracking on with things.'
        },
        {
          type: 'question',
          title: 'When and how did you and Honey link up and get to know one another?',
          answer: 'We have mutual friends in common and met each other at gigs and stuff. Actually, the first time I met Honey properly was at a gig in NY we both played at for Lady Fag called 11:11. It was a weekly party Lady Fag ran at a venue in East Village. Such a great vibe with a sweaty dark basement room and killer sound system to match. Sadly the party stopped in 2017, which was a shame. It was the weekly carry for years.'
        },
        {
          type: 'image',
          path: 'articles/honey/honey1.jpg',
          author: 'Francisco Gomez'
        },
        {
          type: 'question',
          title: 'What was the process like of working together on \'La Femme Fantastique\'?',
          answer: 'Pretty easy, considering we were on different sides of the world. I recorded my vocals in London and we sent stuff back and forth over email. Once we spoke about the idea for the track it was a really easy process for me to write too, I loved the beat and wanted to  imagine this kind of superheroine with the lyrics, hence the title. The studio sessions were pretty quick too, that\'s how we roll :-)'
        },
        {
          type: 'question',
          title: 'This is an incredibly fun track that I can hear drawing people onto the dancefloor. What vibe were you two trying to create with this track?',
          answer: 'Something strong lyrically, fun, seductive and with a nod to Grace Jones who is a big inspiration to both us.'
        },
        {
          type: 'image',
          path: 'articles/honey/honey2.jpg',
          author: 'Robert Rieger'
        },
        {
          type: 'question',
          title: 'The vocals in this are so powerful and seductive - it transports my mind to dancefloors I’ve read and dreamed about from New York, Chicago and Detroit in the 80s and 90s. Were you channelling a specific feeling or period?',
          answer: 'Pretty much what you just described. I\'ve always felt connected to the house vocalists that came from late 70\'s to 80\'s Chicago and it feels crazy to now be able to call some of them friends. These were bold and authentic black artists who broke down barriers with their craft and went on to become icons and legends. I find it very inspiring on so many levels.'
        },
        {
          type: 'question',
          title: 'I feel like there are similarities between both yours and Honey’s music, through the use of vocals and channelling that spirit of really strong, classic dance tracks from earlier days. What is it that you admire about her work?',
          answer: 'I love that Honey is authentic with her sound and DJ sets. Music that came from the birth of house and techno is timeless but I like that honey reimagines this in a progressive way.'
        },
        {
          type: 'question',
          title: 'For most of the world, dancefloors are temporarily closed for business. In the absence of a dancefloor, where is the next best space you suggest people listen to this track in?',
          answer: 'Get yourself down to the local park with a soundsystem and blast this out on repeat. Failing that, a little dance around in your bedroom is always good.'
        },
        {
          type: 'image',
          path: 'articles/honey/honey3.jpg',
          author: 'Mellisa Gardner'
        },
      ],
      footer_links: [
        {
          name: 'Follow Honey Dijon here',
          url: 'https://www.instagram.com/honeydijon/'
        },
        {
          name: 'Follow Josh Caffe here',
          url: 'https://www.instagram.com/josh_caffe/'
        },
        {
          name: 'Follow Tanya Akinola here',
          url: 'https://www.instagram.com/tanyaakinola/'
        }
      ]
    }
    ]))
    state.current = payload
  },
  set_current_by_id(state, payload) {
    state.list = JSON.parse(JSON.stringify([ {
      short_name: 'JON DIXON’S QUIET GENIUS',
      name: 'JON DIXON’S QUIET GENIUS',
      bandcamp_link: "https://jon-dixon.bandcamp.com/album/times-of-change-ep",
      bandcamp_id: "1091411619",
      credit: 'Chris Thorn',
      author: 'Crystal Mioner',
      date: '07/31/2020',
      illus: 'articles/dixon/dixon.jpg',
      introduction: "With one foot firmly rooted in jazz and the other in techno, producer and keyboardist Jon Dixon is a physical embodiment of the bridge upon which Black music spans. He’s played with everyone from Underground Resistance to Chick Corea in his 30 years of music making. On July 31st, Times of Change, his latest release for his label 4EVR 4WRD, drops on vinyl. Black Bandcamp chatted with Jon to talk about his new 4-track Hi-Tech Jazz project and his musical lineage.",
      links: [
        {
          name: 'Purchase on Bandcamp here',
          url: 'https://jon-dixon.bandcamp.com/album/times-of-change-ep'
        },
        {
          name: 'Purchase on Discogs here',
          url: 'https://www.discogs.com/Jon-Dixon-Times-Of-Change/release/15638403'
        },
        {
          name: 'Purchase on Juno here',
          url: 'https://www.juno.co.uk/products/jon-dixon-times-of-change/766619-01/'
        },
      ],
      questions: [
        {
          type: 'question',
          title: 'How did you meet Mike Banks and get involved with UR?',
          answer: 'I met Mike Banks in 2007 via De\'Sean Jones. The UR band, Galaxy 2 Galaxy, was looking for a keyboardist for a gig at the Montreux Jazz Fest and DeSean, who also recently met Banks at the time, mentioned my name. Mike calls me up one day and says, "If you want to travel the world playing music and get paid for it, stop by the building (Submerge) on Monday at 3 o\'clock. If not, get the f*ck on...are you down?” My immediate response, out of shock and somewhat fear,  was “Yeah!" I show up Monday, ring the bell, and a man with cornrows (Mike) opens the door,takes me upstairs to the 2nd floor, and shows me a keyboard. Mike then said, "play something." I start playing who knows what and about 5 seconds later he says, "Cool, go downstairs, talk to the manager Cornelius about getting your passport. We leave for Switzerland in 2 weeks. Rehearsal starts tomorrow." The rest is history!'
        },
        {
          type: 'question',
          title: 'How did you end up working with Britt Frappier?',
          answer: 'I met Britt through her husband and amazing musician Frap, also known as Andre. They both have a band known as Small Creatures and they called me for a few shows in Detroit a couple years ago. One day while driving and listening to \'Black Rose\', which is nowhere near the tempo of the remix I did, I noticed how amazing Britt\'s vocals and writing were. So I hit her and Frap up about getting the vocals to do a remix just for fun. What turned out as doing something for fun has led to a release to the song, as well as an EP the 3 of us are working on. I also asked her to be on my newest EP \'Times of Change\'. She\'s featured on \'Move 4WRD\'.'
        },
        {
          type: 'image',
          path: 'articles/dixon/dixon1.jpg'
        },
        {
          type: 'question',
          title: 'What does your typical day to day look like in quarantine?',
          answer: 'Since COVID my day to day is a bit more concrete. I spend a lot of time with my almost 2 year old son during the mornings and afternoons. I\'m still able to teach my group piano classes and private students through the week. When he goes down to sleep for his nap and at night is when I work on music, cook, or spend time with my wife.'
        },
        {
          type: 'quote',
          answer:  '"When you care about an artform, the last thing you want to see, is it turned into something it wasn\'t meant to be. To avoid that from happening, you have to invest time and energy and educate those willing to listen and learn."'
        },
        {
          type: 'question',
          title: 'What role do you think that intergenerational mentorship plays in keeping the spirit of Hi-Tech Jazz alive?',
          answer: 'A huge one! It doesn\'t get mentioned enough. When you care about an artform the last thing you want is to see it turn into something it wasn\'t meant to be. To avoid that from happening, you have to invest time and energy and educate those willing to listen and learn. I\'ve been blessed to not only have great mentors in electronic music like Mike Banks, Carl Craig, Waajeed, Amp Fiddler, Goldie, Derrick May, Kai Alce and more, but also Detroit\'s late Godfather of jazz, Marcus Belgrave. As a Detroit artist, I\'m responsible for the generation after me. So why not share what I know to not only help the next generation, but position them to be able to push the music further. I didn\'t get to where I am by myself, so instead of withholding all I was taught, I share it.'
        },
        {
          type: 'question',
          title: 'What upcoming artists do you feel represent the future of Hi-Tech Jazz?',
          answer: 'Although he\'s been on the scene and music industry for a minute, Waajeed is definitely representing the future of Hi-Tech Jazz. Another producer and upcoming artist who is killing it is Darrius Quince. I met him when he was about 7 years old and he played organ at the church I played at. He goes by the alias Inkredibeatz and he has an edit on my last EP entitled \'Want It\'. I just spoke to him yesterday about Bandcamp and am working alongside him to get his music heard by the world. He\'s a bright musician and has a crazy ear for melody and harmony. Kenny Dixon (Moodymann) once said, "some of the greatest music being created you\'ll never hear." There are so many artists, not only in Detroit, but globally who may not have the ability to get themselves or their music out there for the world to hear. They\'re in their studios or on their laptops making some of the most amazing music. And sadly, it could get overlooked. I\'m hopeful that those out there making Hi-Tech Jazz will be heard and maybe some collaborations/releases can happen on my label 4EVR 4WRD.'
        },
        {
          type: 'image',
          path: 'articles/dixon/dixon2.jpg'
        },
        {
          type: 'question',
          title: 'Do you think artists have a responsibility to speak out on injustices?',
          answer: 'It depends on the artist. I can\'t speak for everyone, but for me I want to be able to make the biggest impact in the most realistic way. It could be educating some of the students I teach and prepping them on what to expect when being a black artist. It could also be in the form of music. Coming from the school of UR and having over 30 years of musical experience, I\'m able to best express what I\'m feeling musically. And all this can be in addition to doing what must be done without feeling the need to post it on social media.'
        },
        {
          type: 'question',
          title: 'Why do so many Detroit artists end up leaving the city? How could the city better support them?',
          answer: 'It could be a number of reasons. Some artists have families and don\'t want to raise them in Detroit. Others may want a change of scenery to help inspire the art they make. I think the city is becoming more aware of its rich art community and the impact that we have globally, but things like more arts programs are needed. We do have great programs that aren\'t in the schools like Spin Inc. that are keeping the youth engaged in music, but that\'s not enough. My biggest fear is that Detroit becomes a has been, in terms of the art that it creates. Young artists, not just in music, need spaces that they can create and share their art. They are the future of what this city is known for, which is being at the forefront of whatever the next big thing is.'
        }
      ],
      footer_links: [
        {
          name: 'Follow Jon Dixon',
          url: 'https://www.instagram.com/jonnynabb/'
        },
        {
          name: 'Follow Crystal Mioner',
          url: 'https://www.instagram.com/crystal.mioner/'
        }
      ]
    },
    {
      short_name: 'BLAQKONGO ON "38 DAYS 38 WAYS"',
      name: 'TAKE OFF ON A SONICALLY ENTRANCING JOURNEY WITH BLAQKONGO ON "38 DAYS 38 WAYS"',
      bandcamp_link: "http://blaqkongo.bandcamp.com/album/38-days-38-ways",
      bandcamp_id: "1667379909",
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
          name: 'Follow Blaqkongo',
          url: 'http://www.instagram.com/blaqkongo/'
        },
        {
          name: 'Follow Lauryn Njeri',
          url: 'https://www.instagram.com/laurynlikethehills_'
        }
      ]
    },
    {
      short_name: 'Josh Caffé talks Collaborating with Honey Dijon',
      name: 'Josh Caffé talks Collaborating with Honey Dijon on Playful New Track \'La Femme Fantastique\'',
      bandcamp_link: "https://honeydijon.bandcamp.com/album/la-femme-fantastique-extended-mix",
      bandcamp_id: "2265069030",
      credit: null,
      author: 'Tanya Akinola',
      date: '08/07/2020',
      illus: 'articles/honey/honey.jpg',
      introduction: "Honey Dijon is globally renowned in the spheres of dance music, art and fashion. However, despite playing across continents at major music festivals and nightclubs, and working with powerhouse fashion brands like Comme des Garçons, Dijon has a long history as an engaged music lover and dancer first. Her earlier days within the underground communities of Chicago and New York’s Black and queer clubs have shaped her artistry, and still deeply inform the work she produces today.<br><br>Her approach to music production also comes from the vantage point of a club-goer. Dijon doesn’t cater to trends, but rather makes timeless feel-good music crafted to elevate dance floors. Her new album, Black Girl Magic, is due out on Luke Solomon & Derrick Carter's <a href=\"https://classicmusiccompany.bandcamp.com/\" target=\"_blank\">Classic Music Company</a> and is set to further expand upon her vivacious sound palette. Today, Dijon releases the second teaser off the album, 'La Femme Fantastique' which features magnetic vocals from London-based musician Josh Caffé.<br><br>Caffé is a multi-talented artist and vocalist who breathes new life into the time-tested pairing of powerful vocals and house music. As co-founder of the club night, talk series and record label <a href=\"https://www.instagram.com/lovechildldn/\" target=\"_blank\">Love Child</a>, Caffé is also a staple in London's queer dance music community.<br><br>'La Femme Fantastique' is a playful track that channels the energy of a sweaty, flirty dancefloor. It’s available through <a href=\"https://honeydijon.bandcamp.com/album/la-femme-fantastique-extended-mix\" target=\"_blank\">Bandcamp</a> this Friday 7th of August with the album to follow later this year. We had a chat with Josh Caffé about how he and Honey Dijon met, what it was like to work together on the track and what inspired his vocal stylings.",
      links: [
        {
          name: 'Purchase on bandcamp here',
          url: 'https://honeydijon.bandcamp.com/album/la-femme-fantastique-extended-mix'
        }
      ],
      questions: [
        {
          type: 'question',
          title: 'First off, how are you?',
          answer: 'Good, thanks! Up and down with everything that\'s going on right now, but staying positive and cracking on with things.'
        },
        {
          type: 'question',
          title: 'When and how did you and Honey link up and get to know one another?',
          answer: 'We have mutual friends in common and met each other at gigs and stuff. Actually, the first time I met Honey properly was at a gig in NY we both played at for Lady Fag called 11:11. It was a weekly party Lady Fag ran at a venue in East Village. Such a great vibe with a sweaty dark basement room and killer sound system to match. Sadly the party stopped in 2017, which was a shame. It was the weekly carry for years.'
        },
        {
          type: 'image',
          path: 'articles/honey/honey1.jpg',
          author: 'Francisco Gomez'
        },
        {
          type: 'question',
          title: 'What was the process like of working together on \'La Femme Fantastique\'?',
          answer: 'Pretty easy, considering we were on different sides of the world. I recorded my vocals in London and we sent stuff back and forth over email. Once we spoke about the idea for the track it was a really easy process for me to write too, I loved the beat and wanted to  imagine this kind of superheroine with the lyrics, hence the title. The studio sessions were pretty quick too, that\'s how we roll :-)'
        },
        {
          type: 'question',
          title: 'This is an incredibly fun track that I can hear drawing people onto the dancefloor. What vibe were you two trying to create with this track?',
          answer: 'Something strong lyrically, fun, seductive and with a nod to Grace Jones who is a big inspiration to both us.'
        },
        {
          type: 'image',
          path: 'articles/honey/honey2.jpg',
          author: 'Robert Rieger'
        },
        {
          type: 'question',
          title: 'The vocals in this are so powerful and seductive - it transports my mind to dancefloors I’ve read and dreamed about from New York, Chicago and Detroit in the 80s and 90s. Were you channelling a specific feeling or period?',
          answer: 'Pretty much what you just described. I\'ve always felt connected to the house vocalists that came from late 70\'s to 80\'s Chicago and it feels crazy to now be able to call some of them friends. These were bold and authentic black artists who broke down barriers with their craft and went on to become icons and legends. I find it very inspiring on so many levels.'
        },
        {
          type: 'question',
          title: 'I feel like there are similarities between both yours and Honey’s music, through the use of vocals and channelling that spirit of really strong, classic dance tracks from earlier days. What is it that you admire about her work?',
          answer: 'I love that Honey is authentic with her sound and DJ sets. Music that came from the birth of house and techno is timeless but I like that honey reimagines this in a progressive way.'
        },
        {
          type: 'question',
          title: 'For most of the world, dancefloors are temporarily closed for business. In the absence of a dancefloor, where is the next best space you suggest people listen to this track in?',
          answer: 'Get yourself down to the local park with a soundsystem and blast this out on repeat. Failing that, a little dance around in your bedroom is always good.'
        },
        {
          type: 'image',
          path: 'articles/honey/honey3.jpg',
          author: 'Mellisa Gardner',
          format: 'landscape'
        },
      ],
      footer_links: [
        {
          name: 'Follow Honey Dijon here',
          url: 'https://www.instagram.com/honeydijon/'
        },
        {
          name: 'Follow Josh Caffe here',
          url: 'https://www.instagram.com/josh_caffe/'
        },
        {
          name: 'Follow Tanya Akinola here',
          url: 'https://www.instagram.com/tanyaakinola/'
        }
      ]
    }]))
    state.current = state.list[payload - 1]
  }
}

export default  {
  namespaced: true,
  state,
  mutations
}
