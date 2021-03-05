const state = {
 list: [],
 sort: 'oldest',
 current: null
}

const mutations = {
 reset (state) {
  state.list = null
 },
 sort (state, payload) {
  state.sort = payload
 },
 set_current (state, payload) {
  state.list = JSON.parse(JSON.stringify([
  {
   type: "article",
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
     answer: 'I met Mike Banks in 2007 via De\'Sean Jones. The UR band, Galaxy 2 Galaxy, was looking for a keyboardist for a gig at the Montreux Jazz Fest and DeSean, who also recently met Banks at the time, mentioned my name. Mike calls me up one day and says, "If you want to travel the world playing music and get paid for it, stop by the building (Submerge) on Monday at 3 o\'clock. If not, get the f*ck on...are you down?” My immediate response, out of shock and somewhat fear, was “Yeah!" I show up Monday, ring the bell, and a man with cornrows (Mike) opens the door,takes me upstairs to the 2nd floor, and shows me a keyboard. Mike then said, "play something." I start playing who knows what and about 5 seconds later he says, "Cool, go downstairs, talk to the manager Cornelius about getting your passport. We leave for Switzerland in 2 weeks. Rehearsal starts tomorrow." The rest is history!'
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
     answer: '"When you care about an artform, the last thing you want to see, is it turned into something it wasn\'t meant to be. To avoid that from happening, you have to invest time and energy and educate those willing to listen and learn."'
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
   type: "article",
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
     answer: 'Blaqkongo and Mr Blasé have already released some of the music that was spawned by the project on the 19th June, which has quickly garnered a massive listenership, even gracing the 4th position in the best new Deep House, June, category on the Beatport platform. Blaqkongo has now decided to follow up with a Bonus Tracks EP via his label Blaqkongo Music on which features a rework of his lead single "Somethin\' Bout U" and an instrumental version of the deep and pensive "Always There."'
    },
    {
     type: 'question',
     answer: 'I had the honour of having a chat about how life has been for him during the social distancing era as well as his journey to creating "38 Daya 38 Ways".'
    },
    {
     type: 'question',
     answer: 'As a DJ and producer who gigs regularly, Blaqkongo shared a little on how his craft has been affected by the global COVID-19 pandemic. "<i>I organize quite a few events in Cape Town - individually and as part of a collective - so this time has been quite tough as this was our main revenue stream.</i>" However, he says "<i>It’s been interesting because whilst I’m not playing as frequently as I used to, beautiful new opportunities to network globally, get gigs, and work on music have become available. On top of that, the challenges that come with this time allow for growth and learning, and for that, I’m grateful.</i>"'
    },
    {
     type: 'question',
     answer: 'We further went on to discuss how the producer has been spending his days during South Africa\'s nationwide lockdown. Just as expected, blakqongo gave away that a typical day in his life would look a little something like "<i>Produce, DJ, produce, DJ, produce! Nah just messing around.</i>" He laughed. "<i>But the first 5-6 weeks of my lockdown did actually look like that. I did weekly livestreams where I would explore different vibes that I love, including stuff I don\'t usually play out - Jazz, Bossa Nova, Funk, Blues, Percussive Latin and African Music, RnB, Neo Soul amongst my regular stuff like Soulful and Deep House. I made 8 playlists for each week that I did the livestreams which you can find via my Spotify :)</i>"<br>As the neverending days went by however, he let us know "<i>Now, I just take every day as it comes - I wake up and meditate, read, and then just take each moment as it comes.</i>"'
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
     answer: 'The EP definitely lives up to blaqkongo’s expectations because when asked what one should expect with this delightful body of work he concurred with my experience by saying "<i>Love, light, joy and euphoria. No jokes, if you give yourself to the project, it’s a beautiful journey</i>". The talented producer was also sure to point out that "<i>The Bonus Tracks EP focuses on creating a re-imagined mood of the lead single from the original project and an instrumental mix of a song called Always There, also from the original EP. My suggestion would be to play the OG EP and then go straight into the Bonus Tracks.</i>"'
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
     answer: 'While COVID has wreaked havoc in the daily routines and livelihood of many, it is refreshing to hear how these two artists have managed to sidestep some of the sombreness around this period to deliver two releases that breathe new life into the electronic music scene. Awash with low slung grooviness, lush synth work and nimble use of vocal samples, each track on this EP will no doubt find fans among those followers of such groove luminaries as DetroitSwindle, Atjazz and Joe Kay, to name a few.'
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
   type: "article",
   short_name: 'JOSH CAFFÉ TALKS COLLABORATING WITH HONEY DIJON',
   name: 'JOSH CAFFÉ TALKS COLLABORATING WITH HONEY DIJON',
   bandcamp_link: "https://honeydijon.bandcamp.com/album/la-femme-fantastique-extended-mix",
   bandcamp_id: "2265069030",
   credit_illu: 'Crystal Mioner',
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
     answer: 'Pretty easy, considering we were on different sides of the world. I recorded my vocals in London and we sent stuff back and forth over email. Once we spoke about the idea for the track it was a really easy process for me to write too, I loved the beat and wanted to imagine this kind of superheroine with the lyrics, hence the title. The studio sessions were pretty quick too, that\'s how we roll :-)'
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
  },
  {
   type: "article",
   short_name: 'BLACK BANDCAMP SEPTEMBER PICKS: LONDON',
   name: 'BLACK BANDCAMP SEPTEMBER PICKS: LONDON',
   bandcamp_link: "",
   bandcamp_id: "",
   credit: null,
   author: null,
   date: '08/07/2020',
   illus: 'articles/sept2020/sept2020.jpg',
   top_desc: "For this month’s Bandcamp Friday, our co-founder NIKS has reached out to her trusted fellow London selectors, to find out who their top Black Band Camp discoveries and picks of the month are.",
   links: [
   ],
   questions: [
    {
     type: 'bandcamp_picks',
     title: 'DJ Winggold',
     description: 'Founder of <a href="https://www.instagram.com/unboundevents/" target="_blank">Unbound Events</a>, an events platform pushing equality and raising awareness of social issues.',
     links: [
      {
       title: 'Afriqua',
       description: 'Kinda cheating here since I knew about him before Black Band Camp launched but he\'s super talented. He really nails the airy, melodic Afrofuturist vibe whilst keeping things funky. His album on R&S is a serious vibe',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2226738195/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1151574225/transparent=true/" seamless><a href="http://afriqua.bandcamp.com/album/colored">Colored by Afriqua</a></iframe>',
      },
      {
       title: 'Escaflowne',
       description: 'Stumbled on them while scrolling through the Black Band Camp’s \'Techno\' selections. I love the genre classifications on Black Band Camp as it\'s so easy to stumble on something new. I\'m a big fan of the soulful controlled rhythmic weirdness that Escaflowne\'s making.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=4252785561/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1720586635/transparent=true/" seamless><a href="http://escaflowne.bandcamp.com/album/steel-ep">Steel EP by Escaflowne</a></iframe>',
      },
      {
       title: 'Dele Sosimi',
       description: 'One of Fela Kuti\'s old collaborators!! He really nails the laid back Afrobeat grooves that Fela pioneered while keeping the lineage of conscious, uncompromising lyrics.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=631756506/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://delesosimi.bandcamp.com/album/you-no-fit-touch-am">You No Fit Touch Am by Dele Sosimi</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Eliza Rose',
     description: 'I’m a long time record enthusiast, singer, <a href="https://www.instagram.com/rhythm_sister/" target="_blank">Rhythm Sister</a> member with a weekly Rinse FM and monthly Balamii show. Lover of anything with soul.',
     links: [
      {
       title: 'Honey Dijon ft Josh Caffe',
       description: 'The Queen and the King on collaboration duties. Both are icons and the track is an instant Classique.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2265069030/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://honeydijon.bandcamp.com/album/la-femme-fantastique-extended-mix">La Femme Fantastique (Extended Mix) by Honey Dijon featuring Josh Caffe</a></iframe>'
      },
      {
       title: 'ANZ',
       description: 'An amazing producer and very inspirational. I LOVE this track, it makes me feel like an alien robot in New York in the late 80s.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2440068854/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://anzdj.bandcamp.com/album/invitation-2-dance">Invitation 2 Dance by Anz</a></iframe>'
      },
      {
       title: 'Tim Reaper',
       description: 'Whilst jungle is not something I play out a lot, I do still buy bits. I love it and I think Tim Reaper seamlessly compliments his jungle with soul. Feels proper old school.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=573351339/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://timreaper.bandcamp.com/album/pony-fridge-magnets">Pony / Fridge Magnets by Tim Reaper</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Helena Star',
     description: 'My name is Helena Star, I am a selector and presenter who promotes and shares the love of house and techno across London and on my bi-monthly radio show on <a href="https://foundation.fm/people/helena-star/2" target="_blank">Foundation FM</a>.',
     links: [
      {
       title: 'Delroy Edwards',
       description: 'I stumbled across this EP on Black Band Camp mainly because I was intrigued by the cover (like most of my finds tbh) and was even more intrigued when I hit play, hearing these bare, head hitting hi-hats that got me so excited. One track that I can just imagine losing my sh*t to in the club is \'Nitemare House\' - I feel like there is a sneaky bassline in there that needs a fat system to set it free!',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1313070075/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://liesrecords.bandcamp.com/album/slap-happy">Slap Happy by Delroy Edwards</a></iframe>'
      },
      {
       title: 'Kenny Larkin',
       description: 'A \'house\'-hold name and amazing producer whose catelogue I hadn\'t looked much into on Bandcamp, but when stumbling across his name on Black Band Camp, having a listen to \'Keys, Strings and Tambourines\' was such a joy. An album that came out 8 years ago in 2012 and still feels fresh and exciting - you can understand why his style has been so influential to many, myself included. Stand out track for me was \'You Are\'',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1592495196/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1936042545/transparent=true/" seamless><a href="http://kennylarkin.bandcamp.com/album/keys-strings-tambourines">Keys, Strings, Tambourines by Kenny Larkin</a></iframe>'
      },
      {
       title: 'Space Ghost',
       description: 'I cannot explain how excited I was listening to the new release, I don\'t think I have hit download so fast in ages. \'Time to Dance\' as an entire EP has blown me away, but the single I will be playing out at every set for the next year that\'s for certain. Obsessed.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3217669814/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1745390047/transparent=true/" seamless><a href="http://space-ghost.bandcamp.com/album/time-to-dance">Time To Dance by Space Ghost</a></iframe>',
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'internationalJOE',
     description: 'All round selector whose only real goal behind the decks is to get and keep the people dancing. I organize raves and DJ mentoring workshops in London with The <a href="https://www.instagram.com/os_community" target="_blank">OS Community</a>.',
     links: [
      {
       title: 'Martyn Bootyspoon',
       description: 'A friend recommended that I listen to the new ‘Lickity Split’ EP. My favorite track was Resonant Freq - The track reminds me of old school grime tracks I grew up listening to from the likes of Lethal B and Dizzie Rascal. The whole track is infectious and gets you bouncing and on your feet from the onset.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2647734678/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3274972274/transparent=true/" seamless><a href="http://martynbootyspoon.bandcamp.com/album/lickety-split">Lickety Split by Martyn Bootyspoon</a></iframe>',
      },
      {
       title: 'DJ Nativesun',
       description: 'I discovered this track and the artist while listening to Haus of Altr 011. Immediately I recognized the Mos Def ‘No Panties’ sample used. It was also released during the BLM protests that were happening over the summer. The message repeated during the track is to relax, and I must say the track has helped me to feel relaxed and at ease while dealing with the horrific injustices Black people are going through worldwide.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1268537946/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3096470586/transparent=true/" seamless><a href="http://hausofaltr.bandcamp.com/album/hoa011">HOA011 by Dj Nativesun</a></iframe>',
      },
      {
       title: 'Galcher Lustwerk',
       description: 'I had previously heard and played a few tracks by Galcher Lustwerk, but it wasn\'t until I heard the track \'Retire\' on the Haus of Altr 10 release that I decided to dig further into his collection of tracks. I especially love how he talks/raps on several of his works giving the listener another layer to enjoy.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1435999462/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=4059670016/transparent=true/" seamless><a href="http://hausofaltr.bandcamp.com/album/hoa010">HOA010 by Galcher Lustwerk</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Mr. Redley',
     description: 'I\'m a DJ and presenter from North London. I generally lean towards Detroit/Chicago House in my sets, but always see where the night takes me. I also work as label supervisor for Steven Julien\'s <a href="https://www.instagram.com/apronrecords/?hl=en" target="_blank">Apron Records</a>.',
     links: [
      {
       title: 'Huey Mnemonic',
       description: 'I was scrolling through the Detroit section of the website and this guy\'s productions instantly caught my ear. That sultry tremolo\'d synth with those sharp jacking drums...just how I like it!',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=332277003/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://hueymnemonic.bandcamp.com/album/joyous-occasion">Joyous Occasion by Huey Mnemonic</a></iframe>'
      },
      {
       title: 'J. Bevin',
       description: 'I\'ve never heard of J. Bevin, but my oh my I\'m all about this kinda sound. Deep grooving house, and he\'s from right here in London. What\'s not to like?',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3913003954/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1364628936/transparent=true/" seamless><a href="http://jbevin.bandcamp.com/album/tint-tone-ep">Tint &amp; Tone EP by J.Bevin</a></iframe>'
      },
      {
       title: 'Urban Tribe',
       description: 'I felt a bit silly that I hadn\'t heard of this group. Coming out of Detroit in the 1990s with former members including Kenny Dixon, Carl Craig and Shake Shakir. I think \'Syncophant\' is my favourite. Making you feel like you\'re underwater staring up at the sun...',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3789082051/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1705368593/transparent=true/" seamless><a href="http://urbantribe.bandcamp.com/album/loyal-opposition">Loyal Opposition by Urban Tribe</a></iframe>'
      },
      {
       title: 'Blixaboy',
       description: 'Dark, driving, and dirty. I was flicking through the electro section and Blixaboy immediately captured my ears. Makes me want to be in a dark room with some big ol\' speakers.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3311559997/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=912334242/transparent=true/" seamless><a href="http://stereoonstrike.bandcamp.com/album/azanian-funk">Azanian Funk by Blixaboy</a></iframe>'
      },
      {
       title: 'Black Cadmium',
       description: 'Simply put, \'Stairway\' reminds me of Terrence Dixon\'s \'The Parkhurst\'. I\'m all about that. Again, I stumbled across these duo searching through the Electro section of BBC.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1118391730/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3927587844/transparent=true/" seamless><a href="http://vaultwax.bandcamp.com/album/muted-chaos-ep">Muted Chaos EP by Black Cadmium</a></iframe>'
      },
      {
       title: 'Simba',
       description: 'This guy is effortless pulling together these dubs. Can’t go wrong really. I found him under the \'house\' tab on Black Band Camp funnily enough. Club cuts of some of the finest funk and disco.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1996097601/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=330549788/transparent=true/" seamless><a href="http://simbaselecta.bandcamp.com/album/stashbox-goodies-3">STASHBOX GOODIES 3 by simba</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'OK Williams',
     description: 'Hi, I\'m OK Williams and I (used to) bring vibes to London dancefloors and host a monthly radio show on <a href="https://www.nts.live/shows/ok-williams" target="_blank">NTS</a>.',
     links: [
      {
       title: 'Cyberia',
       description: 'My first selection are Cyberia, a duo from Atlanta. I found them on the Black Band Camp website just browsing genres and really liked the track \'Distant Messenger\'.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1109812344/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1296590890/transparent=true/" seamless><a href="http://cyberiaworld.bandcamp.com/album/distant-signal-physical-aid-pack">Distant Signal (Physical Aid Pack) by CYBERIA</a></iframe>'
      },
      {
       title: 'Rimarkable',
       description: 'Next is Rimarkable from Detroit with the track \'I\'m in Trouble\', a killer house tune with a very sassy vocal. Another artist I found scrolling through the site looking for womxn producers.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3370506159/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://rimarkable.bandcamp.com/album/im-in-trouble">I&#39;m In Trouble by Rimarkable</a></iframe>'
      },
      {
       title: 'RHR',
       description: 'Another artist is RHR from Brazil, with "electro, baile funk and favela roots". Favourite track is \'Maloca\'.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3202389260/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=2348372538/transparent=true/" seamless><a href="http://gowpe.bandcamp.com/album/maloca">Maloca by RHR</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Ross',
     description: 'I am part of <a href="https://www.instagram.com/coopaudio/?hl=en" target="_blank">Coop Audio</a> which is a non-profit collective originally born in Bristol but now functioning out of London. I host our monthly radio show on Threads radio with my partner where we go by "Couples Therapy".',
     links: [
      {
       title: 'T. Williams',
       description: 'Found this tune using the filters on top of Black Band Camp. Kept it \'London\' and \'House\' and we got a big big tune. Pure bass heavy jam clearly designed for the club to get everyone\'s faces scrunched up. Just the type of tune I like to play on our radio show to warm people up before they head out for the night.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=1132097993/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://twilliamsmusic.bandcamp.com/track/be-alone">Be Alone by T.Williams</a></iframe>'
      },
      {
       title: 'Scuffed Presents 004',
       description: 'I discovered this label on Black Band Camp and I’m glad I did because this release is full to the brim of interesting left of centre club music, breaks, 2-step and everything in between. Stand out track for me is the A1 with it\'s pure gun finger vibes! Would sound insane on a good system.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2666486115/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://scuffedrecs.bandcamp.com/album/scuffed-presents-004">Scuffed Presents 004 by Various Artists</a></iframe>',
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'T-Dunn',
     description: 'I’m a DJ from West London and run vinyl label <a href="https://www.timehri.world/about" target="_blank">Timehri</a> pushing underground electronic music.',
     links: [
      {
       title: 'James Bangura',
       description: 'I was trawling through some stuff late at night and James\' stuff really stood out. It struck a chord with my mood at the time and I just remember thinking like rah how have I never heard of this guy? Been following him ever since. Every track on his latest EP All Smoke No Mirrors is proper.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1450596680/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://jamesbangura.bandcamp.com/album/all-smoke-no-mirrors-ep">All Smoke No Mirrors EP by JamesBangura</a></iframe>'
      },
      {
       title: 'Ariwa (Label)',
       description: 'Absolute big boy label. Had no idea they were on Bandcamp! Fave tune has gotta be ‘Aisha - Jah Vengance’. She murdered that riddim. There\'s so much stuff on there so anybody into dub/reggae should spend some time digging through their catalogue. Serious waves.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=186212718/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://sisteraisha.bandcamp.com/album/the-first-lady-of-dub">The First Lady Of Dub by Aisha</a></iframe>'
      },
      {
       title: 'Korrē',
       description: 'The way this guy draws inspiration for his tracks is mad. I spent the whole evening trying to find out if he\'d made anything more, going through his Soundcloud and stuff. Excited to see what else he\'s got. Everything on this is special but silver is the one for me.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2400214373/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://korre.bandcamp.com/album/cathexis-sessions-vol-1">Cathexis Sessions Vol.1 by Korrē</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'The Baker',
     description: 'London based promoter, selector, writer and former label manager. Have worked with various brands and venues such as Origins, Tuckshop, Micks Garage and NT\'s Loft.',
     links: [
      {
       title: 'Evan Baggs',
       description: 'I\'ve known about Evan Baggs for a little while now and he\'s someone I truly admire so I feel its best I start with him. When scrolling through the genre selections, I had to click on the customary \'techno\' tab, hence finding Man like Evan, as I like to call him. Originating from America, living in Europe, pioneering a sound that is still seen as somewhat \'underground\' - all of which is for crowds and audiences that severely lack and racial diversity in all aspects, is something that I don\'t think many people understand. A POC in some of these eastern states is a true testament to his strength. Really like this track \'As It Stands\', nice mixture of galactic space top line elements and a fulfilling groove laden bass line.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3896250958/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1742139497/transparent=true/" seamless><a href="http://parttrec.bandcamp.com/album/201-new-langage-ep">2.01 New Langage EP by Evan Baggs</a></iframe>'
      },
      {
       title: 'Millia Rage',
       description: 'Again trawling through the \'techno\' section was draw to the striking name. Really liked this track \'Half-Loiner\' with its euphoric tinged begging leading into an energetic breakbeat closing. Nice to hear this sound design coming from America.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=184602861/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://milliarage.bandcamp.com/track/half-loiner">Half-Loiner by Millia Rage</a></iframe>'
      },
      {
       title: 'Veda Black',
       description: 'They say soul music cures the soul, so during lockdown I\'ve been continuing to expand my horizons with this amazing genre to help my soul, you could say. While flicking through the \'R&B/soul\' selection, I came across Veda Black and her \'Sad Girls Club\' Album. The whole thing is amazing, but my pick has to be \'Serious\'. Its powerful lyrics over that guitar and piano has me transporting between a 2020 and 1980s/1990s soul fusion paradigm.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=557015143/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3582788796/transparent=true/" seamless><a href="http://vedablack.bandcamp.com/album/sad-girls-club-2">Sad Girls Club by VEDA BLACK</a></iframe>'
      }
     ]
    },
   ]
  },
  {
   type: "article",
   short_name: 'PREMIERE: A DYNAMIC DOUBLE PACK FROM HLX-1',
   name: 'PREMIERE: A DYNAMIC DOUBLE PACK FROM HLX-1',
   credit: null,
   author: 'Crystal Mioner',
   illus: 'articles/hlx1/hlx1.png',
   credit_illu: 'Crystal Mioner',
   date: '08/07/2020',
   introduction: 'Just in time for labor day, HLX-1 give us the duality of Detroit techno, meeting somewhere between ghettotech and hi-tech jazz. The untitled two track teaser, a joint venture from Underground and Black\'s The AM and SCAN 7\'s Mr. Hooper, features the raunchy and raw \'I Can Tell You Can F***\' and \'The Cosmos\', a slowed down trip through time and space. Informed by The AM\'s experience as a 90\'s raver and Mr Hooper\'s technical skills honed over the past 6 years with the mysterious SCAN 7, the tracks are a taste of an EP coming later this year.<br><br> \
   Since moving back to Detroit from Miami last year, The AM has been trying to find a semblance of the energetic culture she remembers from coming of age in warehouse parties around the city.<br><br> \
   "I\'m determined to bring the energy back", she exclaims when I ask her about the duo\'s hopes. "I didn’t know anything about music and it was just me and my sister (Ash Lauryn) losing ourselves. Detroit needs that, that ability to just have fun."<br><br>\
   This is Mr Hooper’s first release outside of the Scan 7 umbrella. While not new to the game, he\'s making a new name for himself by "looking forward and creating a fresh and futuristic vibe."<br><br>\
   The two tracks are available now on <a href="https://hlx-1.bandcamp.com/" target="_blank">Bandcamp</a>.',
   embed_links: [
    '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=3846929570/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://hlx-1.bandcamp.com/track/the-cosmos">THE COSMOS by HLX-1</a></iframe>',
    '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=1858466569/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://hlx-1.bandcamp.com/track/i-can-tell-you-can-f">I CAN TELL YOU CAN F*** by HLX-1</a></iframe>'
   ]
  },
  {
   type: "article",
   short_name: 'LOVE IS BLUE: FINDING WARMTH IN AHYA SIMONE\'S FROSTBITE',
   name: 'LOVE IS BLUE: FINDING WARMTH IN AHYA SIMONE\'S FROSTBITE',
   author: 'Crystal Mioner',
   illus: 'articles/ahyasimone/ahyasimone.jpg',
   credit_illu: 'Jayne Lies',
   date: '08/07/2020',
   introduction: '',
   questions: [
    {
     type: 'question',
     title: '',
     answer: 'We\'re locked in a dream state, a version of Detroit that’s real and unreal, and what Ahya Simone describes as "an iridescent reality". Blue tinges everything, blurring the sky and the mouths of Ahya and her friends, fellow artists <a href="https://www.instagram.com/supercoolwicked/?hl=en" target="_blank">Supercoolwicked</a> and <a href="https://www.instagram.com/kesswa_/?hl=en" target="_blank">Kesswa</a>. The forthcoming video for Frostbite, directed by Jayne Lies, provides an experimental slant to the spaces created with the homegirls versus the space we inhabit alone. In this, her debut single and subsequent video release made by the audiovisual label <a href="https://www.instagram.com/pique.records/" target="_blank">Pique</a>, Ahya finds her release from the confines of isolation.'
    },
    {
     type: 'question',
     title: '',
     answer: 'Frostbite was written three years ago after a period of personal trauma that Ahya remembers being full of days spent in bed. "Frostbite came around as a way to speak to that feeling of isolation, when you don’t feel like you have people who care about you, or the people who care about you are out of your life," she says. It was after the death of two of her aunts, the end of a job, and her first time living alone that Ahya gave voice to the process of change and heartbreak.'
    },
    {
     type: 'question',
     title: '',
     answer: 'The song begins with a tender progression of notes, before Ahya’s delicate mezzo-soprano fills the room, reverberating in time with twinkling bursts from her harp. It’s grounded by the initial progression but Ahya isn’t afraid to experiment with different effects, a key reason for her stepping away from the path of traditional harp players, confined to an orchestral pit. "I wanted to play R&B music and experimental music, things I listen to in real life. I wanted to do something that felt more like ME," she expresses.'
    },
    {
     type: 'question',
     title: '',
     answer: 'After graduating from Wayne State in 2015, Ahya took a hiatus from playing harp to reflect on her path. Her time in college, while giving her the ability to sharpen her technical skills, took a toll on her mental health and triggered a dysphoria around her first instrument: her voice. She initially pursued music to sharpen her vocal skills, but was dissuaded by instructors who were too nervous to work with her shifting vocal range as she navigated her transition.'
    },
    {
     type: 'question',
     title: '',
     answer: 'She took guidance from multiple musical visionaries, namely fellow black women from Detroit: Alice Coltrane and Dorothy Ashby. Their willingness to make their own route in jazz - Ashby at a time when harp wasn’t seen as a credible instrument in the genre and Coltrane carving a path for herself outside of her husband’s legacy - influenced Ahya’s ideas of what it means to be a non-traditional harpist. Later, she stumbled upon Brandee Younger, a harpist who blends soul, funk and jazz, reminiscent to Ahya’s own musical upbringing.'
    },
    {
     type: 'question',
     title: '',
     answer: 'The concert grand harp, Ahya’s tool of choice, is a big instrument averaging a height of 6 feet with a width of 3 feet. Ahya says the size, rather than limiting her ability to play anywhere, has allowed her to go where she fits. "If I don’t fit, I don’t fit," she explains defiantly. "Part of it is the physicality of my instrument. But my instrument also creates boundaries for me. You have to make space for me." She applies this philosophy to performances, letting opportunities flow organically to her gravitational pull.'
    },
    {
     type: 'question',
     title: '',
     answer: 'Over the past few years, Ahya has drawn abundance to herself. While still navigating her signature sound, she has stacked performances globally, ranging from local Detroit clubs, to experimental festivals with artists such as Juliana Huxtable, Martha Reeves and the Vandelles, Tunde Olanarian, and Esperanza Spalding. In 2018, she landed a place on "Take Me a_Part, the Remixes", the critically acclaimed remix album by dance music artist Kelela'
    },
    {
     type: 'question',
     title: '',
     answer: 'In addition to her work as a musician, Ahya is a cultural worker hoping to advance the arts and cultural output of the Black LGBTQ+ community in Detroit. Her work with <a href="https://fqchronicles.com/" target="_blank">Femme Queen Chronicles</a>, a webseries following the lives of four Black trans women in Detroit, has achieved national acclaim on the film festival circuit. Rather than falling into the limiting position of being a voice for Black trans women, she\'s working to empower her community to find their own voices. In the hypermasculine musical landscape of Detroit, these efforts are sorely needed to give balance but are given little funding.'
    },
    {
     type: 'question',
     title: '',
     answer: 'With all of her personal accomplishments, she states how much capitalism has made her ability to focus on her work challenging. During our interview she was in New Mexico for vacation but still working on grant applications to finance her art. "It\'s the grind that takes away from me and feeling like I always have to perform to make money and to make art," she explains. With proper stability and financial support, you can only imagine the impact Ahya’s imaginative music will make on the Black canon.'
    },
    {
     type: 'question',
     title: '',
     answer: 'Ahya is currently crowdfunding for a new harp. You can donate <a href="https://www.gofundme.com/f/ahya039s-harp-fund" target="_blank">here</a>.'
    },

    {
     type: 'question',
     title: '',
     answer: 'Look out for the full \'Frostbite\' video dropping next week. Single available for purchase now on <a href="https://ahyasimone.bandcamp.com/track/frostbite" target="_blank">Bandcamp</a>.'
    }
   ],
   embed_links: [
    '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=479447337/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://ahyasimone.bandcamp.com/track/frostbite">Frostbite by AHYA SIMONE</a></iframe>'
   ]
  },
  {
   type: "article",
   short_name: 'BAKHITA REFLECTS ON HER MAGICAL EP \'CHAMO MILE:PYE\'',
   name: 'BAKHITA REFLECTS ON HER MAGICAL EP \'CHAMO MILE:PYE\'',
   bandcamp_link: "https://bakhita.bandcamp.com/album/chamo-mile-pye",
   bandcamp_id: "1733537500",
   credit: '',
   credit_illu: 'Nala',
   author: 'Lauryn Njeri',
   date: '07/31/2020',
   illus: 'articles/bakhita/bakhita.jpg',
   introduction: "Dabbling heavily in neo jazz and alternative soul, Bakhita is a recording, performing and visual artist reigning from the buzzing city of Nairobi, Kenya. This Friday 11th of September, the multifaceted artist releases '<b>Chamo Mile:PYE</b>', a 7-track EP that showcases her honeyed vocals and spiritually elevating penmanship intertwined with fun, lively beats and electrifying bass.<br><br>Black Band Camp had a chat with Bakhita to get some insight on her journey of creating meaningful spaces as she navigates Nairobi's dynamic creative scene as a queer, alternative artist.",
   links: [],
   questions: [
    {
     type: 'question',
     title: 'How has 2020 been for you so far?',
     answer: 'I feel like I started 2020 already having set my mind to conquer the things that were preventing me from putting out work and creative input and all of that stuff. I started 2020 saying "this year I\'m going to take charge, take control", and as much as it has been very unexpected and full of ups and downs from our social dynamic and economic spaces, it\'s been great, it\'s really been great.<br><br>Honestly I\'m most appreciative of quarantine, because it\'s given up-and-coming artists a lot of time to put out our work. Now we\'re able to represent ourselves and not wait to be given gigs, because there\'s no work like that right now so we’re literally able to promote ourselves and have more people listen to us. So 2020 has been great because it opened doors and kind of alleviated the gatekeeping that has been present in the Nairobi art industry.',
    },
    {
     type: 'question',
     title: 'Let\'s get right into the music - how does the title of the EP reflect your journey to creating \'Chamo Mile\'?',
     answer: 'Wow! ‘Chamo Mile’ is something that I\'ve been contemplating and putting together unconsciously for some time. The title is a reflection of me, and how I’ve had to work towards certain things and even had to hide sometimes or disguise myself to be able maneuver this industry and get recognition or support. So this is kind of an ode to all of the sacrifices I\'ve had to make, and a celebration of me being able to now disguise myself from the evil while still staying true to me. Chamo means to hide in plain sight, camouflage my essence so that I can protect it from evildoers and leeches and all of that.<br><br>The title also reflects the entire journey of the creation of the songs. I started the songwriting process with ‘Upstairs’, ‘Funk’ and ‘Most Days’ before quarantine began. Already by that time I was exhausted by how our industry makes us feel; how people assume to know us without taking the time to get to know us, and then try to project their assumptions of us as our reality which is crazy to me. I was in a space where I had to camouflage myself from people around me, from people in the industry and just recuperate and take time.<br><br>I also struggled a lot with mental health issues so \'Chamo Mile\' is an appreciation for the fact that I had to build and grow from a space of complete loneliness and sadness, as well as a celebration that I\'m able to be here fighting.<br><br>The other reason I wanted \'chamo\' and \'mile\' is that it\'s a reminder that it\'s a continuous fight. We’re all in constant motion, growing and changing. I\'m always finding ways to be better and I felt ‘Chamo Mile’ is a reflection of everything that\'s happened until now and I\'m appreciative to be able to share this with everyone.'
    },
    {
     type: 'question',
     title: 'Where do you draw your inspirations and musical influences from?',
     answer: 'This is a question that has always been difficult for me to answer, mostly because I draw a lot of my musical inspiration from things that aren\'t necessarily tangible - such as nature and the different sounds that we hear, the different movements and weather changes, or the moon and how we observe different astro events and how I believe they affect us. I get a lot of inspiration from things building around that.<br><br>Aside from nature and even animals, I get inspiration from my interactions with people. It could be something as easy as a conversation. If I feel like it\'s a conversation that has been echoing in my mind for some time and I wasn\'t able to really pinpoint, I find myself sitting and writing a song about that thought and it\'s really magical.<br><br>My biggest influence in making music has been my mental health. My ability to create has been very much affected by how well I am doing mentally, so it\'s taken a lot of reflection, shadow work and trauma work to uncover whatever sadness has been clouding my mind.<br><br>The artists that surround me are also a major motivation. I find that I really enjoy listening to music that hasn\'t been tainted by the mainstream media. I get inspired by listening to other artists who put their entire hearts into their music, and I feel a lot of that from unpopular music and artists around me who are also up-and-coming. They inspire me a lot because they give me a lot of faith in the universal consciousness. I always find out that we kind of have a similar message behind what we talk about, which is very encouraging and magical to experience.'
    },
    {
     type: 'quote',
     answer: '"We\'re all in constant motion, growing and changing. So I\'m always finding ways to be better, and I felt \'Chamo Mile\' is a reflection of everything that\'s happened until now and I\'m appreciative to be able to share this with everyone."'
    },
    {
     type: 'question',
     title: 'Can you walk me through your experience creating this body of work?',
     answer: 'Honestly it\'s been so magical. It\'s felt like a dream, but a waking dream. Everything has flowed so easily and smoothly. Everything aligned when it needed to align, and things failed when they needed to fail to give me time to rebuild on that failure. So, wow! It\'s been such a magical process.<br><br>\'Chamo Mile\' isn\'t just an audio project, it\'s also a body of visuals, both video and fine art. The journey began from the painting that you now see on the cover art. I knew that I needed to be in this space of isolation, growth and wanting to rebuild and protect myself from being eaten by the outside world. Granting myself that space, and then being given the space to express that through quarantine, just makes me lost for words at how much magic this process has been.<br><br>Putting it out and sharing it with everyone I\'d say is the most stressful part that I\'ve experienced thus far, because I now have to consider everyone else. Otherwise it\'s been so much passion and happiness on my end from the people who have supported me on this journey.<br><br>Working with the producer, Lemi, who I\'ve been working with for a very long time made it seem like second nature. Even in creating the visuals, all the people I worked with, I\'ve worked with before and it has been so magical and uplifting.<br><br>As an artist, through it I\'ve grown. I\'m able to understand myself better, know my limitations, my expectations and express them properly without getting sad when things don\'t go right, or offended when people don\'t see my vision. It\'s also been such a humbling process allowing myself to let go, as well as forcing myself to let go - wow! I wish I could always be in the creation stage of things. Creating things is always such a beautiful experience for me and this has been my favourite project yet.'
    },
    {
     type: 'image',
     path: 'articles/bakhita/bakhita2.jpg'
    },
    {
     type: 'question',
     title: 'How is it navigating as a queer artist in the Nairobi art space?',
     answer: 'Hmm, I\'d say it\'s... interesting. Sometimes it\'s amazing because you get to meet and interact with more queer people which is always great. I don\'t think I\'d ever have gotten as much exposure to queerness if not through the art scene and getting to meet all these creatives.<br><br>Sometimes it\'s intoxicating because of how queerness has been sexualised in the entertainment industry. A lot of the time, you\'ll find your sexuality is glorified or wanting to be used for promotion of something, which is exhausting. It gives this false illusion of what queerness is. Queerness is so much more than just sex and I personally dont think the focus should be on the sexual aspect alone.<br><br>Things like this have made navigating life as a queer artist in Nairobi a little tricky. As it is, the entertainment industry demands a lot of sexualisation from women especially, so there is a lot of expectation for you to present yourself sexually having all of these interactions with different women or men.<br><br>Another very frustrating aspect is the misunderstanding of different queer terms. Seeing people living the trans experience not gain the kind of respect that someone else who is cis or bisexual would is so crazy. I\'m really grateful for the people that I\'ve met who have built me along the way and taught me to have patience, love and faith in the queer community which I\'m grateful for having found.'
    },
    {
     type: 'question',
     title: "How are you able to balance creative freedom and experimentation with the pressure to make 'hits' especially as an upcoming artist?",
     answer: "It's such a gut wrenching process honestly. Writing music and not knowing whether people will resonate with it or if it will be liked or even supported at all, is so overwhelming and so full of anxiety. I struggle with anxiety and paranoia so it comes in waves of uncertainty and self-doubt, but I'd say that this year I've been able to balance this a lot better. I'm aware when I'm creating for myself and I allow myself to experiment more. That way I'm not judging myself, I just give myself the space to be and to create whatever it is that I want to.<br><br>Especially now in 2020, I've gotten into a lot of production. I've played piano for 15 years but I’d never found a way to integrate it into my production because I was afraid of the experimental stage of doing things because I wanted to make 'hits'. But when you’re doing it for yourself, you give yourself a lot more space to experiment because you’re not putting that pressure on yourself - and even if you are, it's to learn rather than to tear yourself down.<br><br>Also, understanding the language that I have with myself has given me the space to balance creative freedom and experimentation. Otherwise you do have to be conscious and aware of the implications of what it is that you are creating and it has to be in a way that people are ready to accept the information. There is a lot of pressure to make what you are putting out palatable, but it shouldn't prevent us from being and creating art.<br><br>Another way I've been able to strike this balance is by simply sitting on projects. I will sit on something until I feel like it's great so that even if I release it and it doesn't catch on as a hit, I still know that I've done the best that I’m able to. This has really helped me because I know when to let go and say \"yeah this sounds good as it is\" or when to say \"no, this still needs some time\". It doesn’t give me as much pressure."
    },
    {
     type: 'question',
     title: "What role do you think your immediate society can play to enable artists like yourself to have a bigger platform?",
     answer: "For one, just sharing our work. People would be surprised but a repost, retweet or a share of a body of work is so powerful because the people around you see it and that causes a ripple effect. It's how the artists who are now ‘big leagues’ got established. I think a big part of it is through spreading the word, liking the videos, being present and following artists.<br><br>Another way that we could really get more support from society is by just keeping up with our work, doing the research when they hear about us and even media stations. They barely give any energy or time to up-and-coming artists because they don't want to take the risk of not satisfying their consumers when in reality the consumer is always looking for something new. Up-and-coming artists being able to package new experiences so well because we are new artists is something I really would urge the media to take advantage of.<br><br>Aside from the entertainment industry, I wish our government gave us grants and opportunities or ways for us to have a steady income. Especially as a growing artist, the chances of having a steady cash flow are so scarce and even if you do, it's very hard to maintain because you might end up having to sacrifice your creation process to maintain this work. If we were given opportunities by the government, that would give us a lot more breathing room to just create and do better.<br><br>Another thing is to stop the assumption that Kenyan music has to sound a certain way and accept that as long as it's made in Kenya, it's Kenyan. However, I'm so glad to be up-and-coming in a time when this is a lot more possible, and I just hope that it continues to be taken more seriously."
    }
   ],
   footer_links: [
    {
     name: 'Purchase on bandcamp here',
     url: 'https://bakhita.bandcamp.com/album/chamo-mile-pye'
    },
    {
     name: 'Follow Bakhita here',
     url: 'https://www.instagram.com/lunar_consciousness/'
    },
    {
     name: 'Follow Lauryn Njeri here',
     url: 'https://www.instagram.com/laurynlikethehills_/'
    }
   ]
  },
  {
   type: "article",
   short_name: 'MILES FROM KINSHASA\'S \'BELOVED\' EP CONVEYS THE POWER OF VULNERABILITY',
   name: 'MILES FROM KINSHASA\'S \'BELOVED\' EP CONVEYS THE POWER OF VULNERABILITY',
   bandcamp_link: "https://milesfromkinshasa.bandcamp.com/album/beloved",
   bandcamp_id: "1239573186",
   credit: '',
   credit_illu: 'Elena Cromona',
   author: 'Lauryn Njeri',
   date: '07/31/2020',
   illus: 'articles/vivien/vivien.jpg',
   introduction: "After stirring curiosity with 'Wearing Smiles', 'Lookin 4 U' and 'Motionz', <b>Miles from Kinshasa</b> now brings forth a sombre, jazz-inflicted body of work with '<b>Beloved</b>'. The 8-track EP is a light blend of reverberating sax, plush chords and bossa nova rhythms detailing the digital disconnect and mystery within hyper millennial relationships.<br><br>Miles, real name <b>Vivien Kongolo</b> is a London-based Congolese singer, songwriter and producer who creates hybridised songs that pull from strands in his nomadic life. His latest piece of work, 'Beloved' wryly zones into the fluidity of contemporary expression.<br><br>Speaking on the overall concept of the EP, <b>Kongolo</b> explains, \"<i>Beloved is an honest project about vulnerability and growth through the lenses of a millennial. It’s millennial blues to get us through the times soaked in nostalgia.</i>\"Marking a shift in creative direction and the start of a new chapter, 'Beloved' is the work of a complex, singular artist with bags of talent. Miles shares with us details about the EP and the power of vulnerability in his work.",
   links: [],
   questions: [
    {
     type: 'question',
     title: "How have you been keeping yourself busy during quarantine?",
     answer: "Just taking it a day at a time, trying to create when I can and rest when I can't think of anything. This is the longest summer holiday we’ve ever had and may as well make the most of it."
    },
    {
     type: 'question',
     title: "What is the story behind your artist name 'Miles From Kinshasa'?",
     answer: "I always wanted to have a striking and meaningful name, so it just kind of worked when I called a song of mine Miles from Kinshasa and one day it just came to me that it would work as an alias and boom, it just makes sense."
    },
    {
     type: 'question',
     title: "The tracks on ​Beloved ​all seem deeply personal. Do the stories all stem from personal experiences?",
     answer: "Yeah, they are mostly lived experiences. I tried to stay away from fantasy on this one, and I think the project benefits from that."
    },
    {
     type: 'quote',
     answer: '"I think the only way you can truly connect with people is by being vulnerable"'
    },
    {
     type: 'question',
     title: "What is the difference between your past EP <i>Limbo</i> and this new body of work? Do you feel you have grown in between the EPs?",
     answer: "I hope so, at least I think I've grown as a person and become a bit more open which has allowed me to be more honest with myself. Creatively you can hear it. I've had to push myself to find better and clearer ways to get my message out. Beloved is just a more efficient project. I don't think the quality ever dips which is important for me."
    },
     {
     type: 'question',
     title: "I admire how raw you are when it comes to conveying your emotions which is something that is lacking in the age of the millennial. What encourages you to be so vulnerable?",
     answer: "I think the only way you can truly connect with people is by being vulnerable. It's all therapy for me because I'm talking about my life out loud whilst also addressing them, well trying to anyway."
    },
    {
     type: 'image',
     path: 'articles/vivien/vivien2.jpg'
    },
    {
     type: 'question',
     title: "What is your favourite song off ​Beloved ​and why?",
     answer: "'Dice Games'. It changes every week, but 'Dice Games' has so many moments. It sounds fresh to me but also very familiar. I love the ad libs too. \"NUMBERS\"!"
    },
    {
     type: 'question',
     title: "What's next for Miles From Kinshasa?",
     answer: "We're gonna do some more cool stuff for Beloved. New music isn't too far away either, don't sleep."
    }
   ],
   footer_links: [
    {
     name: 'Purchase on bandcamp here',
     url: 'https://milesfromkinshasa.bandcamp.com/album/beloved'
    },
    {
     name: 'Follow Mile From Kinshasa here',
     url: 'https://www.instagram.com/milesfromkinshasa'
    },
    {
     name: 'Follow Lauryn Njeri here',
     url: 'https://www.instagram.com/laurynlikethehills_/'
    }
   ]
  },
  {
   type: "article",
   short_name: 'BLACK BANDCAMP OCTOBER PICKS: NAIROBI',
   name: 'BLACK BANDCAMP OCTOBER PICKS: NAIROBI',
   bandcamp_link: "",
   bandcamp_id: "",
   credit: null,
   author: null,
   date: '08/07/2020',
   illus: 'articles/oct2020/oct2020.jpg',
   top_desc: "For this month's Bandcamp Friday, our core team member KMRU hit up some artists in his hometown of Nairobi to find out who their top Black Bandcamp discoveries and picks of the month are.",
   links: [
   ],
   questions: [
    {
     type: 'bandcamp_picks',
     title: 'M³',
     description: 'Musician & Record Producer from Nairobi, Kenya just trying to create music (art) that I feel should exist.',
     links: [
      {
       title: 'Learn To Love - Anais & Azekel',
       description: 'I stumbled upon this duo on the Black Bandcamp site, just clicking the (very cool) random shuffle button & by the 10th second I was already drawn in. The simple & airy production just makes me fall in love with the song. How their voices blend so well together and the building of the instrumentation throughout the song just amazed me. Definitely one of those songs that I have already added to my playlists and sharing it with everyone around me.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=236942556/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://anaiszero.bandcamp.com/track/learn-to-love">Learn to Love by anaïs &amp; Azekel</a></iframe>',
      },
      {
       title: 'Tatizo Pesa - Jay Mitta',
       description: 'Being a huge fan of Nyege Nyege Festival, I have always admired their work and the artists they support. Never had the chance to attend one yet, but if (when) I do, I hope I\'ll be performing. This song \'Tatizo Pesa\' by Jay Mitta is packed with so much energy that you just cannot contain the dance in you. The fast beat and Swahili lyrics are so infectious.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=4027928840/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://nyegenyegetapes.bandcamp.com/album/tatizo-pesa">Tatizo Pesa by Jay Mitta</a></iframe>'
      },
      {
       title: 'Source - Nubya Garcia',
       description: 'The blend of the reggae groove with the jazz format and characteristics is everything for me. Another discovery off the Black Bandcamp website. From an audio engineer view I enjoyed how the instruments mixed, especially the drums. Plus, the background vocals that come in are a very lovely touch. The 12-minute song can really put you in a proper trance.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1916787340/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://nubyagarcia.bandcamp.com/album/source">SOURCE by Nubya Garcia</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Nabalayo',
     description: "I’m Nabalayo. A Nairobi based music maker, ethnomusicology enthusiast and the mother of the Changanya genre.",
     links: [
      {
       title: 'Xenia Franca',
       description: "I have a weakness for Brazilian music and that’s how I found her. The folk meets modern aura really gives me the feeling of home away from home.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1637863900/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1068746171/transparent=true/" seamless><a href="https://180g-xeniafranca.bandcamp.com/album/xenia">Xenia by Xenia França</a></iframe>'
      },
      {
       title: 'Zara McFarlane',
       description: "Found her going through the soul selection. I definitely get timeless Afro futuristic vibes from her. If I was on a spaceship doing some intergalactic travel she would definitely make it to my playlist.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1613241991/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3738932123/transparent=true/" seamless><a href="https://zara-mcfarlane.bandcamp.com/album/songs-of-an-unknown-tongue-2">Songs Of An Unknown Tongue by Zara McFarlane</a></iframe>'
      },
      {
       title: 'Thanya Iyer',
       description: "Found her by total coincidence. Her cover art attracted me because I am an illustrator as well. The fusion and balance of smooth vocals, acoustic and electronic sounds is beautifully executed in her music. Also being an orchestra nerd, I was excited to learn that she is a violinist as well and it features in her music.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2607222951/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=960911572/transparent=true/" seamless><a href="https://thanyaiyer.bandcamp.com/album/kind">KIND by Thanya Iyer</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Janice Iche',
     description: "My name is Janice Iche. I am an artist currently working in the field of music. I sing, write songs, produce etc. Music revives me and I am here to share the energy. For this selection, I wanted to keep it East African. It was fun for me to search for and discover sounds from my region. I tried to keep it strictly women but that was more difficult than anticipated. So here we go:",
     links: [
      {
       title: 'Nabalayo',
       description: "From Kenya. Wow. I felt like I had been asleep and only woke up once I heard 'Mwana Wa Gorofa. It ignited something in me that has since been fueling the wonder and excitement of my days, and the growing desire I have to create and share music. She is pioneering a sound she has coined 'Changanya' and I am all here for it. Might I add that she is her own producer (and illustrator!). Damn! As an East African Coastarian, this song is one I needed to hear as it is connecting the wealth of my pasts to the possibilities of my futures, helping me see better the beauty of the music we are creating today and the possibilities of the sounds that we will be creating tomorrow. I am so happy that this music is here. She is releasing her debut project soon so keep an eye out for her. Also has some other releases on her Bandcamp so check that out. Please enjoy, 'Mwana Wa Gorofa'.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=2517284500/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://nabalayo.bandcamp.com/track/mwana-wa-gorofa">Mwana Wa Gorofa by Nabalayo</a></iframe>'
      },
      {
       title: 'Siti Muharam',
       description: "From Tanzania. I have been listening to Taarab lately and it was a pleasant delight to find this project. I think Siti Muharam is the granddaughter to Taarab legend Siti Binti Saad. This particular track ‘Sikitiko’ tugs at my heart strings, the mood and lyrics of the song are somber and display feelings of a painful love that I have felt too many times. I am attracted to music that tells a story I have lived. I also first heard this song performed by another Taarab legend, Bi Kidude, so this is just a gift to find on Black Bandcamp.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3772336838/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3523396614/transparent=true/" seamless><a href="https://sitimuharam.bandcamp.com/album/siti-of-unguja-romance-revolution-on-zanzibar">Siti of Unguja (Romance Revolution On Zanzibar) by Siti Muharam</a></iframe>'
      },
      {
       title: 'ODD OKODDO',
       description: "A Kenyan-German duo. I've really been into listening to modern-traditional sounds, the music that we are making now influenced by our African traditional sounds. This seems like quite the duo. I was interested in hearing what such a project could sound like and I can say that it does not disappoint. The production is heavily electronic, paired with a traditional kind of high-pitched call and response singing giving it a good and interesting balance to its sound.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1691327597/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1580539519/transparent=true/" seamless><a href="https://oddokoddo.bandcamp.com/album/auma">AUMA by ODD OKODDO</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Jinku',
     description: "Jinku makes Tribal Downtempo and Organica. He is part of the NuNairobi sound that he is shaping along with his team EA Wave. The site has such a great filter function, and the shuffle has introduced me to some amazing finds, here are my faves so far.",
     links: [
      {
       title: 'Ash Walker - Aquamarine',
       description: "I am really feeling nostalgic as of late, looking for warmer sounds to counteract the state of the world. This album feels very warm to me.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=506480334/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://ashwalker.bandcamp.com/album/aquamarine">Aquamarine by Ash Walker</a></iframe>'
      },
      {
       title: 'BCUC - The Healing',
       description: "These guys came down to Nairobi for a liveshow and I have been hooked ever since! Mad tribal, how I love it.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=449580511/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://bcuc.bandcamp.com/album/the-healing">The Healing by BCUC</a></iframe>'
      },
      {
       title: 'Kampire - Gatluak (Gan Gah, Cardi Monáe & Kampire Remix)',
       description: "This song slaps in all kinds of ways. I loved the original, but this, this feels like outside.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=1071545326/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://kampire.bandcamp.com/track/gatluak-gan-gah-cardi-mon-e-kampire-remix">Gatluak (Gan Gah, Cardi Monáe &amp; Kampire Remix) by Kampire</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: '[MONRHEA]',
     description: "[Monrhea] is a DJ and Producer, brewing in the experimental music scene in Nairobi and beyond.",
     links: [
      {
       title: 'DJ RAPH',
       description: "It's always hard to leave him out of any of my lists where I point out my favorite artists. He is one of the best examples of producers who archives our African traditional rhythms through blending with modern electronic sounds.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2384377729/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3496777140/transparent=true/" seamless><a href="https://djraph.bandcamp.com/album/sacred-groves">Sacred Groves by Dj Raph</a></iframe>'
      },
      {
       title: 'ODD OKODDO',
       description: "I just think this track is beautiful. Another example of well-blended African rhythms.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1691327597/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1893951686/transparent=true/" seamless><a href="https://oddokoddo.bandcamp.com/album/auma">AUMA by ODD OKODDO</a></iframe>'
      },
      {
       title: 'AFALFL',
       description: "Recently, I have been finding interest in music made using code. Here's one :)",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1578656020/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://afalfla.bandcamp.com/album/androrythmes">Androrythmes by AFALFL</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Coco Em',
     description: "I'm Coco Em and I'm a DJ and producer based in Nairobi Kenya. I am part of a bubbly and energetic music scene with diverse sounds from afro house and dance music to gengetone and shrap. I have performed on stages such as Boiler room, Afro punk, Trans Musicales and more. As part of my amazing Nairobi community, I am working toward offering more support to young artists, DJs and producers - most of whom are just breaking into their own careers. I am a filmmaker and I’m currently starting a project to offer quality music videos to artists. I am also part of a music collective Santuri EA which supports the electronic music scene in the East African region through workshops, creative challenges and an informative and engaging music podcast founded by DJ Huilly Huile called Santuri Signal. I have also recently formed an arts collective Sim Sima in conjunction with the creative body Chilli Mango which will focus on music production training, film and fine art training as well as collaborative community events with extra support given to femme and marginalized peoples in our community.",
     links: [
      {
       title: 'Ekiti Sound',
       description: "I found Ekiti Sound after randomly going through Black Bandcamp. I was first introduced to Black Bandcamp by my friend and Nairobi based producer KMRU. ‘A song for Lara’ opens with a lovely blend of electro disco synths, a thumpy bassline and smooth vocals.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2074360769/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1651396898/transparent=true/" seamless><a href="https://ekitisound.bandcamp.com/album/abeg-no-vex-remixes-vol-1">Abeg No Vex Remixes VOL.1 by Ekiti Sound</a></iframe>'
      },
      {
       title: 'Ase Manual',
       description: "My partner DJ Huilly Huile introduced me to the sounds of Ase Manual back in 2019 and I've been hooked since. I am drawn to his heavy bass lines and lots of percussion which give me interesting blends while I play my sets.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1902038683/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3266219211/transparent=true/" seamless><a href="https://asemanual.bandcamp.com/album/ase-manual-black-liquid-electronics-deluxe">Ase Manual - Black Liquid Electronics (Deluxe) by Ase Manual</a></iframe>'
      },
      {
       title: 'Nazar',
       description: "My last pick is from a new favourite of 2020, Nazar. I was led to his page by my love for Cooly G and the label that reps her, Hyperdub. Nazar is a fresh inclusion to the label and his music is out of this world. I would put up a whole album here but since I'm only allowed a track I select 'Airstrike'.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=729183487/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=2895578494/transparent=true/" seamless><a href="https://nazar.bandcamp.com/album/enclave">Enclave by Nazar</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'slikback',
     description: "Experimental producer and DJ from Kenya. ",
     links: [
      {
       title: 'Duma',
       description: "Loved the sounds of Duma from the moment I saw their live performance (dark, aggressive metal). I found this record through Nyege Tapes, a Ugandan label and collective.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=740785244/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://nyegenyegetapes.bandcamp.com/album/duma">Duma by Duma</a></iframe>'
      },
      {
       title: 'Menzi',
       description: "I first heard the record before it's release as we shared music among ourselves within Hakuna Kulala (the crew I am in) and instantly fell in love with it's fresh take on gqom.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=830547674/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://hakunakulala.bandcamp.com/album/impazamo">Impazamo by Menzi</a></iframe>'
      },
      {
       title: 'KMRU',
       description: "Kamaru's ambient works are always a go to for me for its calming structures. I found the record when he posted about it on his twitter and instantly connected with it.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1944326644/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://seilrecords.bandcamp.com/album/jar">Jar by KMRU</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'MR.LU*',
     description: "A self-proclaimed social experiment, Kenyan producer, deejay and composer MR. LU* has quickly turned into one of the Nairobi scene's go-to producers, working with artists such as Taio and Karun, as well as putting out music as part of the XPRSO. collective consisting of RVMP, Mars Maasai and Baby’s Breath.",
     links: [
      {
       title: 'Knxwledge',
       description: "knxwledge is one artist I bump nearly, if not every day, of my life. I especially love his music because of the consistency he displays with each project.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3915591256/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1123395718/transparent=true/" seamless><a href="https://knxwledge.bandcamp.com/album/vgms-prt-4">VGM&#39;s​​.​​PRT_4 by Knxwledge.</a></iframe>'
      },
      {
       title: 'Ohbliv',
       description: "ohbliv makes me feel like I am in ohblivion (see what i did there 😂). His unquantized takes on samples inspire me to get up and try stuff I've never tried musically.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=914006972/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1780596001/transparent=true/" seamless><a href="https://ohbliv.bandcamp.com/album/ez-widas">EZ Widas by Ohbliv</a></iframe>'
      },
      {
       title: 'XPRSO',
       description: "Automatic certified banger by the gang. This will definitely get you up on your feet. If you're doing chores, just be careful not to break the dishes dancing.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2434179039/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1793209958/transparent=true/" seamless><a href="https://xprso.bandcamp.com/album/nairobass-2">NAIROBASS by XPRSO</a></iframe>'
      }
     ]
    },
   ]
  },
  {
   type: "article",
   short_name: 'LEX AMOR GOES INWARD',
   name: 'LEX AMOR GOES INWARD',
   bandcamp_link: "https://lexamor.bandcamp.com/album/government-tropican",
   bandcamp_id: "893411503",
   credit: '',
   credit_illu: '',
   author: 'Lauryn Njeri',
   date: '07/31/2020',
   illus: 'articles/lexamor/lexamor.jpg',
   introduction: "One immediately feels the comfort that lies perfectly in between the arts of poetry and rap when they listen to <b>'Government Tropicana'</b>. The album is a deeply personal account of introspection informed by cultural memory from the North London-based multifaceted artist <b>Lex Amor</b>.<br><br>It’s impossible to miss the bravado in her transcendental whispers, where she lets us in on her bid to trace the evolution of her hometown and her role within it. <i>\"Government Tropicana is the story of first-generation working-class London; an attempt to articulate the nuance of my lived experience,\"</i> Lex explains. <i>\"This project is a celebration of collective cultural norms and an exploration of my life to this point.\"</i>",
   links: [],
   questions: [
    {
     type: 'image',
     path: 'articles/lexamor/lexamor2.jpg'
    },
    {
     type: 'quote',
     answer: "\"This project is a celebration of collective cultural norms<br>and an exploration of my life to this point.\""
    },
    {
     type: 'question',
     title: "",
     answer: "The 9-track EP is led by mellow beats and hushed sedating vocals. This gives way for easy listening to internalize the memoirs of her life in-between the lines of her slick wordplay. <i>\"Whilst writing this project I engaged with concepts of home, detachment, disillusionment, perseverance, power and community. It is the fruit of my lifelong introspection. Tap water - government juice - making the most of what we were given: Government Tropicana.\"</i><br><br>Lex Amor comfortably establishes herself as one to watch. Her ability to touch on cultural, political and personal perspectives in her bold bars, all while maintaining a laidback aura and sense of humour makes her one of the brightest lights to emerge from the UK hip-hop scene in recent years."
    },
    {
     type: 'question',
     title: "",
     answer: "<b>'Government Tropicana'</b> is available for purchase on Lex Amor’s Bandcamp page."
    }
   ],
   footer_links: [
    {
     name: 'Purchase Government Tropicana here',
     url: 'https://lexamor.bandcamp.com/album/government-tropicana'
    },
    {
     name: 'Follow Lex Amor here',
     url: 'https://www.instagram.com/lexysaluteme/'
    },
    {
     name: 'Follow Lauryn Njeri here',
     url: 'https://www.instagram.com/laurynlikethehills_/'
    }
   ]
  },
  {
   type: "article",
   short_name: 'BLACK BANDCAMP NOVEMBER PICKS: NAARM',
   name: 'BLACK BANDCAMP NOVEMBER PICKS: NAARM',
   bandcamp_link: "",
   bandcamp_id: "",
   credit: null,
   author: null,
   date: '08/07/2020',
   illus: 'articles/nov2020/nov2020.jpg',
   top_desc: "For this month's Bandcamp Friday, we hit up creatives in Naarm (Melbourne) to find out who their top Black Bandcamp discoveries and picks of the month are.",
   links: [
   ],
   questions: [
    {
     type: 'bandcamp_picks',
     title: 'Beź Zewdie',
     description: "<a href='https://www.instagram.com/bezography/' target='_blank'>Beź Zewdie</a> is an African-Australian content and events producer, presenter of <a href='https://www.rrr.org.au/explore/programs/represented' target='_blank'>'Represented'</a> on Triple R 102.7FM, and creator of the <a href='https://www.youtube.com/watch?v=G6NLZcK8pyw&list=PLaF17q8yqWmIUeUkWqmL5-nOrJfIp4ksP&index=1&ab_channel=Be%C5%BA.' target='_blank'>SHADES</a> podcast: an exploration of social issues through the lens of Australian hip hop music.",
     links: [
      {
       title: 'Crystal Axis - Take the Throne',
       description: "African metal & punk music is so grossly underrated. This five-piece is precisely why you should start taking notice. Rock music IS Black music, and it's high time we take ownership of it.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=4228169348/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://crystalaxis.bandcamp.com/track/take-the-throne">Take The Throne by Crystal Axis</a></iframe>'
      },
      {
       title: "DRMNGNOW ft. Kee'ahn & Riverboy - Ancestors",
       description: "On this track, three of Melbourne's most promising, up-and-coming talents come together on a powerful track that never fails to give me chills. Riverboy's production is hypnotic, Kee'ahn's vocals haunting, and DRMNGNOW's poetry empowering and uplifting.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=2447037193/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://drmngnow.bandcamp.com/track/ancestors">Ancestors by DRMNGNOW</a></iframe>'
      },
      {
       title: 'Stevan - No More Regrets',
       description: "Stevan tells coming-of-age stories to the backdrop of eclectic, indie rnb music. His melancholy vocals top off his altogether warm and dreamy output.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=3493204280/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://stevanofficial.bandcamp.com/track/no-more-regrets">No More Regrets by Stevan</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Darcy Justice',
     description: 'My name is Darcy Justice and I DJ sometimes. I enjoy music and try not to take myself too seriously, at the end of the day I’m just pressing play.',
     links: [
      {
       title: 'Equiknoxx - Bird Sound Power',
       description: "Going to highlight a small little part of the world which I hold closely to my heart, Jamaica. Found this awesome \"forward thinking Jamacian music collective\" putting out some heavy beats and nice rhymes. Equiknoxx is the name and this album Bird sound power is my favourite but all albums are equally wicked.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=745435535/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=2592718917/transparent=true/" seamless><a href="https://equiknoxx.bandcamp.com/album/bird-sound-power">Bird Sound Power by Equiknoxx</a></iframe>'
      },
      {
       title: 'Shanique Marie - Freak',
       description: "Delved deeper into the Equiknoxx collective and have officially fallen in love with Shanique Marie. A Slick rapper with a beautiful singing voice also! Paired with some Gavsborg beats and it's unstoppable. Cant help but bop about.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2905252228/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=37227733/transparent=true/" seamless><a href="https://shaniquemarie.bandcamp.com/album/freak">Freak by Shanique Marie</a></iframe>'
      },
      {
       title: 'Riddlore- Afromutations',
       description: "Came across the label Nyege Nyege tapes and clicked onto the album Afromuations and was sent elsewhere. BeautIful field recordings mixed with real strong and groovy beats . Made my little afrobeat section in my heart melt and my body two step.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2306200836/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3082048501/transparent=true/" seamless><a href="https://nyegenyegetapes.bandcamp.com/album/afromutations">Afromutations by Riddlore</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Paul Gorrie',
     description: "My name is <a href=\"https://www.instagram.com/lil_p_geezy/\" target=\"_blank\">Paul Gorrie</a> and I am a Gunai/Kurnai & Yorta Yorta man. I’m a radio presenter (<a href='https://www.rrr.org.au/explore/programs/still-here' target='_blank'>RRR</a>), DJ (<a href='https://soundcloud.com/dj-pgz' target='_blank'>dj pgz</a>), assistant music producer (<a href='https://www.rising.melbourne/' target='_blank'>Rising Festival</a>), filmmaker (<a href='https://www.sbs.com.au/ondemand/program/treaty' target='_blank'>Young Mob Questioning Treaty</a>), and drummer (<a href='https://drmngnow.bandcamp.com/' target='_blank'>DRMNGNOW</a> & <a href='https://www.keeahn.com/' target='_blank'>Kee’ahn</a>).",
     links: [
      {
       title: 'Water Streets - Blvck',
       description: "They’re coming out of FNQ and they have a freshness and steeze that is reminiscent of an East Coast vibe from NYC, Turtle Island while also spitting realness about being a blakfulla from so-called Australia. These fullas are the next generation of hip hop coming out of so-called Australia to keep an eye on. Water Streets is made up of Jamahl (Wanyii), Bardi who is Wagiman (Darwin), St Paul (Torres Strait Islands), Marshal from Darnley Island (Torres Strait Islands).",
       embed: '<a href="https://waterstreets.bandcamp.com/" target="_blank">https://waterstreets.bandcamp.com/</a>'
      },
      {
       title: 'Mulalo - FTN + Chargin',
       description: "If you are a fan of the likes of Megan Thee Stallion, Rico Nasty, and Bbymutha - you will have to acquaint yourself with Mulalo. Coming out of Naarm/Melbourne, she brings a rawness and style that quite hasn’t been filled over here. Mulalo refers to her music as “bad b***h music” and it is the baddest. She also has another single out called Check that isn’t on bandcamp that is worth checking out too.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3057282832/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=833411451/transparent=true/" seamless><a href="https://mulalo.bandcamp.com/album/ftn-chargin">FTN + Chargin by Mulalo</a></iframe>'
      },
      {
       title: 'Ase Manual - Eat It Up',
       description: "I am a fan of club music, and as a DJ with an interest in underground, bassy, dark, trippy and high tempo sounds. For those very reasons; Ase Manual is someone who has found their way into my library. The Yoruba - American DJ and producer that can do no wrong. Especially with the track Eat It Up taken from their project Fuji Club Music.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2524858663/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=16609845/transparent=true/" seamless><a href="https://asemanual.bandcamp.com/album/fuji-club-music">Fuji Club Music by Ase Manual</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'C.FRIM',
     description: '<a href="https://www.instagram.com/c.frim" target="_blank">C.FRIM</a> is a Melbourne (Naarm) based selector and presenter who pushes forward-thinking sounds via a monthly show on <a href="https://skylab-radio.com/shows/shakedown-e1" target="_blank">Skylab Radio</a>.',
     links: [
      {
       title: 'Shyboi - Head Top',
       description: "I can't explain how gassed up I was for this release. This track effortlessly cultivates techno and merges it with dancehall roots - I'm not sure whether to 2-step or dutty wine. Best believe I'll be smashing that cue button for this one post-Corona.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=309365031/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=558036070/transparent=true/" seamless><a href="https://djshyboi.bandcamp.com/album/rave-down-babylon">Rave Down Babylon by SHYBOI</a></iframe>'
      },
      {
       title: 'Tygapaw - Run 2 U',
       description: "This new single out from her forthcoming album 'Get Free' pulses with so much energy and reminds me why techno is and has always been Black. I was lucky enough to support Tygapaw at her Naarm show last year and she was just dropping hit after hit. So fire!",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2101995501/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://tygapaw.bandcamp.com/album/get-free">GET FREE by TYGAPAW</a></iframe>'
      },
      {
       title: 'Rey Sapienz - Dancehall Pigmé',
       description: "'Mushuro' as a complete EP is incredible, but 'Dancehall Pigmé' is the track that I always come back to. The scene in Kampala, Uganda is really pushing this distinct and progressive sound that is mad inspiring.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3759814304/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1244531193/transparent=true/" seamless><a href="https://hakunakulala.bandcamp.com/album/mushoro">Mushoro by Rey Sapienz</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Soju Gang',
     description: "Yo, I’m <a href=\"https://www.instagram.com/soju_gang/\" target=\"_blank\">Soju Gang</a>; I’m a Melbourne based DJ, designer and owner of my own street wear label called <a href=\"https://www.instagram.com/sawft.wear/\" target=\"_blank\">SAWFT</a>, and an all round creative in Melbourne’s nightlife scene.",
     links: [
      {
       title: 'Nooky - Black Future',
       description: "Nooky is a talented artist from NSW, Aus who has lately been pushing out some age defining music that’s highlighting the lived experience and disparity of the Blak community of Australia as we move through our own BLM movement.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=447853956/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://nooky.bandcamp.com/track/black-future">Black Future by Nooky</a></iframe>'
      },
      {
       title: 'Boston Chery - Summers with you Vol III',
       description: "As a DJ I’m always looking for unique, eclectic, energy-filled remixes and Boston delivers. New York DJ and producer, Boston’s sound is so vast that there’s always something new.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=341680357/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://bostonchery.bandcamp.com/album/summers-with-you-vol-3">Summers With You Vol. 3 by Boston Chery</a></iframe>'
      },
      {
       title: 'Tera Kòrá - The Legend of Kòrá Remixes & Edits ~Book One~',
       description: "Tera Kora is one of my faves for mixes; from Rotterdam this creative puts together some really funky, smooth remixes that I adore. Tera is also a member of Soulection.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2550163810/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1559400132/transparent=true/" seamless><a href="https://terakora.bandcamp.com/album/the-legend-of-k-r-remixes-edits-book-one">The Legend of Kòrá Remixes &amp; Edits ~Book One~ by Tera Kòrá</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Afrodisiac',
     description: "For all things musical I go by <a href=\"https://www.instagram.com/gabby.au/\" target=\"_blank\">Afrodisiac</a>. As a DJ I'm not too interested in tracks I can't dance to and I've reflected this below by choosing 3 superb remixes.",
     links: [
      {
       title: 'Sudan Archives - Glorious (Nídia Remix)',
       description: "My first selection is an enchanting remix of Sudan Archives' Glorious by Portugese producer Nidia. I found this through the Black Bandcamp website using the genre search and clicked through to Sudan Archives' Bandcamp. At a smooth 100bpm it's the type of track that's easy to get your body warmed up to move and the violin, claps and drums really did transport my brain to a happier place.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=968590833/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://sudanarchives.bandcamp.com/track/glorious-n-dia-remix">Glorious (Nídia Remix) by Sudan Archives</a></iframe>'
      },
      {
       title: 'KOKOKO! - Tokoliana (Citizen Boy Remix)',
       description: "I found this next track by using the location search. Hailing from the DR Congo the collective KOKOKO! produces massively rhythmic and hypnotic dance tracks that I could listen and groove to all day. In this remix it's the tension and suspense of the percussions and vocals that have me hooked.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=27355656/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=801890419/transparent=true/" seamless><a href="https://kokokomusic.bandcamp.com/album/remixes">Remixes by KOKOKO!</a></iframe>'
      },
      {
       title: 'Ekiti Sound - Abeg No Vex Remixes VOL​.​1',
       description: "This last recommendation was found again through the location search. It's a remix by Soul Edifice of Nigerian producer Ekiti Sound's song Alutere. The original release is 52 seconds in length so this 7:32min remix is a d-floor blessing. It's the perfect combination of afro infused acid lines, techno and breaks.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2074360769/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://ekitisound.bandcamp.com/album/abeg-no-vex-remixes-vol-1">Abeg No Vex Remixes VOL.1 by Ekiti Sound</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Areej Nur',
     description: "<a href=\"https://www.instagram.com/areejrun/\" target=\"_blank\">Areej Nur</a> is a Melbourne based co-founder of African artist collective, <a href=\"https://www.instagram.com/stillnomads/?hl=en\" target=\"_blank\">Still Nomads</a> and presenter of <a href=\"https://www.rrr.org.au/explore/programs/the-rap\" target=\"_blank\">The Rap</a> on Triple R.",
     links: [
      {
       title: 'Genesis Owusu - WUTD',
       description: "I have to start with Genesis because this young man is hands down one of the best live performers this country has to offer. Listening to Genesis Owusu is a different experience after you've seen him live. Besides the authentic style and unique flow, I feel his heart in so much of the music and WUTD is no exception.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=2982205487/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://genesisowusu.bandcamp.com/track/wutd">WUTD by Genesis Owusu</a></iframe>'
      },
      {
       title: 'KOKOROKO - Carry Me Home',
       description: "The jazz ensemble of my dreams. I can't believe how much jazz is coming out of London right now especially by young Black geniuses. 2020 is the year of really feeling like being held, and 'Carry Me Home' holds so much. KOKOROKO does everything right.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2323173687/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=577851728/transparent=true/" seamless><a href="https://kokoroko.bandcamp.com/album/carry-me-home">Carry Me Home by KOKOROKO</a></iframe>'
      },
      {
       title: 'Kaiit - Miss Shiney',
       description: "I knew all the words to Kaiit's first few singles before she even dropped them. This young sis was singing around Melbourne for a little while before making any official releases and already had a loyal following, of which I am and always will be a part of. Kaiit's voice, energy and soft strength is unmatched - she is such an integral part of the Black music culture in Melbourne and Miss Shiney is a hit!",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=1324757541/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://kaiit.bandcamp.com/track/miss-shiney">Miss Shiney by Kaiit</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Claudia Jones',
     description: "My name is Claudette Justice, I release music under <a href=\"https://www.instagram.com/claudiajoneslive/\" target=\"_blank\">Claudia Jones</a>, <a href=\"https://www.instagram.com/glamouratz/\" target=\"_blank\">Glamouratz</a>, <a href=\"https://www.instagram.com/claudyknight/\" target=\"_blank\">Claudy Knight</a> and <a href=\"https://www.instagram.com/claddywood/\" target=\"_blank\">Claddy</a>. I never ever wanna put myself in a box. I’m a woman of many things. I’m a jazz singer who writes disco, pop and house music. I often get sultry melodies come to me at all hours of the day. I refuse to limit myself by sticking to one genre. I’m a DJ, musical curator who runs parties, forever uplifting & growing with BIPOC community. I also run a couple of Naarm (Melbourne, Australia) based radio shows, <a href=\"https://skylab-radio.com/shows/justicescape-e3\" target=\"_blank\">'JusticEscape'</a> on Skylab Radio & ‘Signal’ on Lossless Radio. Put simply, music is my love language, my heart and my soul.",
     links: [
      {
       title: 'AMARAFLEUR - dontletgo’ ',
       description: "I am a sucker for a good pop track with an original sound. I could listen to ‘dontletgo’ on repeat for hours. Found in the electro soul genre, Amara Fleur, hailing from Johannesburg, South Africa was an incredible find. ‘Dontletgo’ has a lo-fi, hip hop style beat with beautiful, textured, jazzy, rnb vocals. Perfect tune to light a joint to, and simmer deep into the nostalgic waves of emotion.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=3788921813/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://amarafleur.bandcamp.com/track/dontletgo">DontLetGo by AMARAFLEUR</a></iframe>'
      },
      {
       title: 'Carlos Do Complexo - Mistakes',
       description: "Found in the rnb genre section, hailing from Brazil, Carlos Do Complexo gives us the smoothest, soulful vibes with a groovy electronic twist. There’s a sound in there that makes me think he sampled the x-files theme song. Add raw honest vocals from Lexie Palms and you’ve got yourself a new age rnb classic. Let’s be real though, anything that comes from Brazil is magic.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=3294440085/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://carlosdocomplexo.bandcamp.com/track/mistakes">MiSTAKES by Carlos do Complexo, Lexie Palms</a></iframe>'
      },
      {
       title: 'Saine & Smith - Dirty Games',
       description: "I’m constantly digging for new music, not only to share with the collective but to keep my ears and heart active and happy. I found ‘Dirty Games’ whilst digging in the Afro-Caribbean section. As a Jamaican blooded woman who’s grown up in the club filled with house music, this track touched all the right places. It has an analog, old school feel to it. Repeating bass line (always a fave) deep house groove with a powerful, top vocal. Perfect dance floor meditation to drop in the club at any moment.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=8294460/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=2860972202/transparent=true/" seamless><a href="https://sainesmith.bandcamp.com/album/dirty-games">Dirty Games by Saine &amp; Smith</a></iframe>',
      }
     ]
    },
   ]
  },
  {
   type: "article",
   short_name: 'BETINA QUEST: ALWAYS EVOLVING',
   name: 'BETINA QUEST: ALWAYS EVOLVING',
   bandcamp_link: "https://betinaquest.bandcamp.com/track/ikangure",
   bandcamp_id: "2360356237",
   isSingle: true,
   credit: '',
   credit_illu: 'Tommy Wá',
   author: 'Tanya Akinola',
   date: '07/31/2020',
   illus: 'articles/betinaquest/betina.jpg',
   introduction: "Having now settled in Ghana after living across several countries and continents, German-Burundian artist Betina Quest channels her physical and sonic explorations into her most compelling piece of work yet. Fusing neo-soul and R&B with afro influences, her debut LP 'room in a room' emerges as an innovative cross-media art piece of music, poetry and photography that centres the experiences of African women. As Betina Quest explains: \"We have to own our stories to heal. And we have to heal to form healthier, saner societies. I often wondered how I could contribute to the change I want to see. This is it.\"<br>'room in a room' is out on the 11th of November and the full album is available exclusively through Betina Quest's website.",
   links: [],
   questions: [
    {
     type: 'question',
     title: 'How are you and how have you been spending your time during this period of semi-lockdown?',
     answer: "I am well thank you. I am mostly in the house either working, working out, catching up with my family and friends, cooking or just enjoying the silence."
    },
    {
     type: 'question',
     title: "Your latest body of work, 'room in a room' is due to release on the 11th of November. This will be your debut LP after releasing two EPs, the 'Questapes'. How are you feeling about it and how does this LP differ from your previous releases in your opinion?",
     answer: "I’m very excited for the project to come out, because it’s very special to me. Comparatively it took a lot longer to come together than the questapes, so the story is more extensive, there are a lot more details to discover and it’s also the first time I implemented poetry and photography in a project. Musically as well, as personally I have grown a lot since my last questape which also sets ‘room in a room’ apart from my previous releases."
    },
    {
     type: 'question',
     title: "You explore themes on this album that I'm sure many members of the African diaspora are familiar with, such as: defining 'home', returning to your ancestral land, the barriers of language and defining oneself when you've lived between cultures. As you said, \"room in a room is about the human experience from a Black African female’s perspective.\" This LP is quite raw and personal, almost a diary of your experiences. Would you agree and did you intend to create an album with a specific message or did it just come together naturally?",
     answer: "I would definitely agree with the project being very personal. It’s the only kind of art I know how to make. At the same time though, I believe I am telling not just my story, but someone else’s as well. At the very least I am sharing the story to encourage others to own theirs. I can’t say I had a specific message in mind when I first started putting the project together. As much as I generally gravitate towards genuine storytelling I wouldn’t say I knew exactly where I was going. Rather it came together naturally.",
    },
    {
     type: 'question',
     title: "You've lived in a few different countries over the past decade. How has living across different countries and cultural experiences and now settling in Ghana shaped 'room in a room' and your approach to creating music?",
     answer: "All the cultures inhabiting me certainly shape my story and therefore infuse 'room in a room' with everything it has become. The most obvious example of that being that the virtual gallery we have created to exhibit the project will exist in six languages representing all the places I have been to and all the people I have met, but also almost personally inviting all of them to discover this creation they are somehow a part of. Musically I was interested in combining my favorites of smooth soul and mellow hip hop beats with anything afro. I wanted to explore both contemporary and traditional melody, harmony, chord progression, rhythm, language - all of that - and fuse those influences. Settling in Ghana definitely allowed me to expand that part of my vocabulary and express that fusion I have envisioned since 'questape vol. 2' that much more.",
    },
    {
     type: 'question',
     title: "There's a variety of musical influences on the album, though a fusion of soul, R&B and jazz beautifully take centre stage on a lot of the tracks. Can you tell us from your perspective a bit more about what types of sounds you were drawn to explore on this album and why?",
     answer: "As I briefly mentioned before I would say my main influences in the beginning of my music making were people like Erykah Badu, Tweet, Jill Scott, Robert Glasper, J Dilla, Georgia Anne Muldrow. It’s because I was always drawn to and curious about Black culture, though growing up Afro American culture was more accessible to me than African pop culture. I always felt there was something missing though, because that so-called 'neo soul' sound felt like I had borrowed it and it told just half of my story. And so I began introducing Afro influences to my sound to represent that part of me as well. Settling in Ghana was - musically as well as personally - a very significant homecoming."
    },
    {
     type: 'image',
     path: 'articles/betinaquest/betina2.jpg',
     author: 'Tommy Wá'
    },
    {
     type: 'question',
     title: "I read that this project took two and a half years to make and that it almost made you want to quit music entirely. What led you back to completing the album and inspired you to see it through and keep going?",
     answer: "Taking a break was what allowed me to come back. 100%. I needed to regroup, inject a healthier energy and approach to my career and somewhat start over. Being a DIY independent solo artist is tough! But at the end of the day I realized it’s indeed what I want to do - I just had to identify healthier ways of doing it."
    },
    {
     type: 'question',
     title: "And what did you learn about yourself as an artist during this time?",
     answer: "I learnt I am capable of more than I thought I was. I learnt I can not collaborate with just anybody. And I learnt I really quite like the artist I am becoming :)"
    },
    {
     type: 'question',
     title: "You have your own website where you sell your music and have spoken about the importance of artists receiving the bulk of profit from their work, as well as finding where you draw the line as an artist with exploitative major platforms like Spotify. Is this something you were concerned with from the outset of your career in music or something you learned along the way?",
     answer: "It is definitely something I was always alarmed by. Musicians are too often underpaid and overall not appreciated the way I believe we should be. I first realized that when I started playing cover gigs and had to grow the courage to say no to those paying horrifically little and demand for what I believe I deserve. As I am diversifying my revenue streams though, I realize exploitation is everywhere. Instead of losing myself in frustration, however, I try to identify ways of how I can contribute to a system that favors me as an independent artist and that allows my listeners to support me sustainably. It requires a lot of research, trial and error and certainly a constant dialogue with my audience, but I trust it will be worth it. Especially if I get to pass this blueprint on to other creatives!"
    },
    {
     type: 'question',
     title: "Can you explain the concept behind the virtual gallery and how you want fans to interact with the album in this digital space given the absence of live performance due to COVID-19?",
     answer: "The concept of the virtual gallery is basically to globally provide a virtual space to experience 'room in a room'. We created a photograph for each track and wanted to appreciate the lyrics for the poetry they are. In the gallery you will be able to listen to each song while reading along and viewing the photograph all at once. As I explained earlier we translated the poems to Kirundi, German, French, Spanish and Japanese. Our interactive platform 'room in a room in a www' - possibly the most important element of the project - is designed to allow you to own and share your story. As I said before it is not just about me, but about all of us. It is about being represented as well as being a representation to somebody else. It is about owning your story to live more wholeheartedly. And it is about understanding each other a little better to form healthier societies which, in my opinion, has proven to be more relevant and urgent now than ever. The distance we all experience can be challenging to bridge via the internet, but we hope this virtual gallery enables you to slow down for a while and genuinely reconnect with yourself and others."
    },
    {
     type: 'question',
     title: "What is something you hope listeners, and more specifically African people and African women, are able to take away from listening to this album?",
     answer: "I understand the temptation of wanting anyone, but especially my people and my fellow African women to take away something particular from the work. But the truth - and beauty - is it is out of my control. I believe the album has many many gifts to offer, so I hope - and I trust - that everyone takes away from it exactly what it is they need. Whatever that may be :)"
    }
   ],
   footer_links: [
    {
     name: 'Purchase on her website here',
     url: 'https://www.betinaquest.com/'
    },
    {
     name: 'Purchase the singles on Bandcamp here',
     url: 'https://betinaquest.bandcamp.com/music'
    },
    {
     name: 'Follow Betina Quest here',
     url: 'https://www.instagram.com/betinaquest/?hl=en'
    },
    {
     name: 'Follow Tanya Akinola here',
     url: 'https://www.instagram.com/tanyaakinola/'
    }
   ]
  },
  {
   type: "article",
   short_name: 'SPIRITUAL JAZZ AND AFRO DISCO BLEND TOGETHER ON PYRAMID PROJECTS’ "MANGROVES EP"',
   name: 'SPIRITUAL JAZZ AND AFRO DISCO BLEND TOGETHER ON PYRAMID PROJECTS’ "MANGROVES EP"',
   bandcamp_link: "https://pyramidprojectfeatcontours.bandcamp.com/album/mangroves-ep",
   bandcamp_id: "1941076607",
   isSingle: false,
   credit: '',
   credit_illu: '',
   author: 'Lauryn Njeri',
   date: '07/31/2020',
   illus: 'articles/pyramid/pyramid.jpg',
   introduction: "Created in just 2 days back in 2018, \"<b>Mangroves</b>\" is a 4-track collaborative EP between UK producer <b>Contours</b> and a selection of Kenya’s most accomplished musicians, formed as <b>Pyramid Project</b>, by ADA Records Label Head, <b>Lasta</b>.<br><br>Each track on the EP sizzles with an improvised approach resulting in an electric vibe that provides a truly live feel.The instrumental journey begins in a climate of mystery before immersing you into a ferocious yet atmospheric Swahili Jazz composition, \"<b>Mangroves</b>\". The track is birthed by percussive instruments that are then awakened by a toying bassline that soon builds into a driving riff with skipping drums.<br><br><b>Contours</b> is on percussion with the Space Echo, <b>Katumba</b> is on the drums providing the Afro-Rhythms, and <b>Abaki Simba's Masta</b> and <b>Inspekta</b> on Percussion. The track flawlessly ebbs and flows allowing young pianist <b>Mutoriah to</b> take the lead.<br><br>Pyramid Project kicks up the energy on an electric Afro-Disco composition, \"<b>Driver</b>\" which is led by the sounds of the Orutu, a single-stringed fiddle from Western Kenya, played by <b>Boaz Jagingo</b>. The disco melody quickly builds to uplifting Drum and Bass before dropping away to reveal Jagingo’s Echo’s in the hook lifting the track as he depicts a busy Kenyan Central Business District.<br><br>Surrounded by a four-piece percussion section, the excitement of the live recording shines through as <b>Abaki Simba</b> faces off <b>Katumba</b> in a percussive breakdown. The song is then lifted again by Jagingo’s rhythmic chants blended with the energetic Drum and Bass of <b>Contours</b> and <b>Mbaluka</b>.<br><br>Black Bandcamp caught up with <b>Lasta</b>, producer and spearhead of the sublime collective, to learn about their creative process in the making of their enchanting brainchild.",
   links: [],
   questions: [
    {
     type: 'question',
     title: "Tell us the story behind your intriguing name, “The Pyramid Project” and how you all came together.",
     answer: "The band were brought together by ADA Records label head Lasta to collaborate with who was visiting East Africa at the time. The label saw this as a great opportunity to shine a light on some of Kenya’s amazing musicians and the tradition of live music that they are keeping alive.<br><br>The name 'The Pyramid Project' came about to add an air of mystery and a sense of ancient spiritualism and culture to the project. The idea is that each composition is not overly thought out, instead an improvised approach is adopted, calling on ancestral sounds and translating them through the conduit of today’s Kenyan musicians."
    },
    {
     type: 'question',
     title: "Mangroves was recorded in an impressive 2 days. How was the process of composing and writing the EP?",
     answer: "It was intense! But we allocated 1 day to each of the original compositions for song writing, rehearsing the final recording, of which there were only 3 takes. This ensured true collaboration in the song writing, and a truly live feel with the magic coming through the improvised elements. Such a process meant that the whole day was focussed on 1 song and didn’t allow for any slump in creativity. With so many creative minds in the room, the energy and excitement was real! There was no time for big mistakes in the recordings, but the calibre of musicians meant that there was no need for concern."
    },
    {
     type: 'image',
     path: 'articles/pyramid/pyramid2.jpg'
    },
    {
     type: 'question',
     title: "What was the atmosphere you were striving for when the band created this piece of work?",
     answer: "Mangroves was intended to be a souring spiritual jazz number, with heavy Swahili influence. The idea was to channel coastal rhythms and melodies and tell a story with a beginning, middle and end, and lots of drama. Mutoriah’s key solo really brought this through backed up by a pulsating rhythm and percussion section.<br><br>Driver was intended more for the dancefloor, channelling an Afro-Disco vibe, but looking to Western Kenya for its distinct Oruto sound by Boaz Jagingo. The image is that of a busy CBD in Kenya, translated by a percussive battle between Abaki Simba and Gervais Katumba. This is a track to groove to."
    },
    {
     type: 'question',
     title: "So how does the dynamic work in the group with nine of you? Is it led or does everyone have an input?",
     answer: "The concept was brought together by ADA Records, but the songwriting was truly collaborative. Each track required the skills of different lead players, and once all the musicians were in the room together and the concept clarified, the song writing came together democratically, with each of the musicians having an equal say in the direction of each track."
    },
    {
     type: 'question',
     title: "What is the band’s vision in terms of creating an earspace for more alternative Kenyan music?",
     answer: "With so many re-releases of great live music from the 70s and 80s, the concept of The Pyramid Project was to write and release live music that channeled the same energy and live excitement as the golden era, but with a contemporary take on it. The music is not strictly aligned with any specific Kenyan genre, but instead is free, bringing musicians from all parts of Kenya together to present a contemporary and alternative take on Kenyan live music today. This music is not necessarily for the mainstream Kenyan market, but more as an artistic comment, displaying the true talent and diversity of Kenyan music."
    },
    {
     type: 'question',
     title: "What would be a dream collaboration for the collective?",
     answer: "All the band members would have a different answer for this and there are way too many Kenyan and international producers that we would love to work with. However, there is another release in the wings, with a different selection of Kenyan artists, hold tight for more info. But to try and answer the question, the Godfather of contemporary, alternative music from Kenya today is Blinky Bill, so Bill if you like what you hear, give us a call!!!"
    }
   ],
   footer_links: [
    {
     name: 'Purchase on Bandcamp here',
     url: 'https://pyramidprojectfeatcontours.bandcamp.com/album/mangroves-ep'
    },
    {
     name: 'Follow ADA Records here',
     url: 'https://www.instagram.com/adarecordske'
    },
    {
     name: 'Follow Tanya Akinola here',
     url: 'https://www.instagram.com/laurynlikethehills_'
    }
   ]
  },
  {
   type: "article",
   short_name: 'AGAINST ALL ODDS',
   name: 'CHANNEL U & AGAINST ALL ODDS: IN CONVERSATION WITH NICO TYLER JAMES',
   isSingle: false,
   credit_illu: '',
   author: 'Tochi Chelsea',
   date: '11/13/2020',
   illus: 'articles/nico/nico.jpeg',
   introduction: "SBTV, GRM Daily and Mixtape Madness have become household names in the Grime and UK Rap scene, but before them was their forefather - Channel U. Beginning in 2003, the channel provided a platform for up and coming artists in underground genres such as Grime. From Wiley to Bashy, there was nowhere else you could find a space as dedicated to fresh Black talent as Channel U.<br><br>The platform was integral to the popularising of bangers such as Lethal Bizzle's Forward, Kano's P's & Q's and Dizzee Rascal's I Love U. Following its name change to Channel AKA, the channel stopped being broadcast in 2018 and Grime lovers especially have had their Channel U nostalgia confined to hazy memories.<br><br>However, the channel is now making its return. After two years off of the air, Channel U is \
    relaunching with the premier of the first ever Grime-film Against All Odds. With star-studded cast \
    members including Richard Blackwood, Jammer and Ghetts, Grime and lovers of the culture are \
    anticipating its release. The film follows the plight of young rapper MC Active, played by Nico \
    Tyler James, as he struggles to prove his stake in the Grime scene. \
    Ahead of the premier, Black Bandcamp spoke with Nico about his acting career and his \
    relationship with Channel U and Grime:",
   questions: [
    {
     type: 'question',
     title: 'Tochi: When did you first begin acting and how did you know it\'s what you wanted to do?',
     answer: 'Nico: Acting was the first thing I ever wanted to do growing up. I used to, and still do, idolise Will Smith and Denzel Washington. I think acting first sparked my interest when I was 7 years old, if I had to put an age on it.'
    },
    {
     type: 'question',
     title: 'How did the opportunity to play MC Active in Against All Odds come about?',
     answer: 'Well I\'ve known Femi (director of Against All Odds) since I was about 13-14 years old, maybe even younger. I starred in a short film that he wrote and directed at the beginning of his career and this is where we first met, so I\'ve actually known him for a long time. When the opportunity came about he gave me a call asking me to audition and now here we are!',
    },
    {
     type: 'question',
     title: 'What was the hardest part about filming for you?',
     answer: 'There\'s a lot of waiting around when on set and I\'m very impatient so I found that quite draining. I love getting in front of the camera and doing my thing, but the waiting part is not ideal.'
    },
    {
     type: 'question',
     title: 'Are there any similarities between you and MC Active?',
     answer: 'I would say there are a few similarities between us. MC Active is young, fearless and super passionate about what he does, and I am too. I\'d always been pitted against olders in my area too which was daunting at times, but the difference with Active is that type of competition doesn\'t phase him at all.'
    },
    {
     type: 'question',
     title: 'What did Channel U mean to you when it was first on air and how do you feel about it making a return?',
     answer: 'Channel U meant a lot to me. It gave me hope for the UK scene and introduced me to British artists I wouldn\'t have been exposed to if not for the channel. It gave those with an urban identity a platform to showcase our culture and it was definitely the first of its kind, there was nothing else like it.'
    },
    {
     type: 'question',
     title: 'Against All Odds is the first ever Grime film, do you think this is one of the ways the genre can be kept alive?',
     answer: 'I do! I think Grime has played a massive part in shaping UK music today. I can even hear similarities in genres like UK Drill today; it\'s like a slower version of grime almost.'
    },
    {
     type: 'question',
     title: 'Who are your favourite grime artists of all time?',
     answer: 'This is tricky for me. I would say I have favourite moments rather than artists. For example, Kano Vs Wiley\'s Lord of the Mics was legendary, as was Ghetts vs P Money - both are my favourite clashes of all time. Grime produces loads of amazing moments.'
    },
    {
     type: 'question',
     title: 'How was it working alongside Black British legends such as D Double E and Richard Blackwood?',
     answer: 'I was in awe the whole time to be honest. D Double E is a super legend! Working with Richard was very different, or rather special. He plays MC Active\'s dad in the film and he offered so much insight both on and off set. The encouragement he offered alone was invaluable and it\'s not everyday you get to work with the first Black comedian to have his own TV show in the UK!'
    },
    {
     type: 'question',
     title: 'What advice would you give to actors younger than yourself?',
     answer: 'Stay focused, have tunnel vision and be relentless. It’s a hard grind but if you stay on track and you put your all into it you will get where you want to be sooner rather than later.'
    },
    {
     type: 'question',
     title: '',
     answer: 'Against All Odds will premiere on Channel U on the 13th November.'
    }
   ],
   footer_links: [
    {
     name: 'Follow Nico Tyler James here',
     url: 'https://www.instagram.com/navtyler_/'
    },
    {
     name: 'Follow Tochi Chelsea here',
     url: 'https://www.instagram.com/tochichels/'
    }
   ]
  },
  {
   type: "article",
   short_name: 'MORGAN MUNROE IS UNRAVELING THE LAYERS OF HER ARTISTRY',
   name: 'MORGAN MUNROE IS PEELING BACK LAYERS OF HER ARTISTRY ON \'LAYERS 0.5\'',
   isSingle: false,
   bandcamp_id: '3508943609',
   bandcamp_link: 'https://morganmunroe.bandcamp.com/album/layers-05',
   credit_illu: 'Ruma',
   author: 'Lauryn Njeri',
   date: '11/13/2020',
   illus: 'articles/munroe/munroe.jpg',
   introduction: "UK singer-songwriter, <b>Morgan Munroe</b> makes a powerful debut with the release of her long awaited EP, \"<b>Layers 0.5</b>\". <br><br>Moving through the passionate encounters of an empowered, independent woman navigating love and self worth, Morgan is unapologetic in letting her soft sultry vibe ooze effortlessly through the 5-track EP. \"<i>All of these songs are written from true and personal experiences,</i>\" Morgan explains. \"<i>Five songs that show five different layers to me, musically and personally.</i>\"<br><br>Released on the 13th of November, Layers 0.5 is a collection of easily enjoyable bops graced with Morgan’s silky harmonies and relatable themes.",
   questions: [
    {
     type: 'question',
     title: "How have you been keeping yourself busy all through the global pandemic?",
     answer: "I’ve been on Instagram a lot lol, taking part in lotsss of music challenges and competitions on Insta-live’s. I’ve been finding creative new things to do… I had a go at making my own music video, I also started making clothes, decorating the house, and a lot of Netflix!"
    },
    {
     type: 'question',
     title: "The title to your EP is ‘Layers 0.5’. Tell us a little more about it?",
     answer: "I called my EP layers because I feel like every song shows a different layer of my personality and also highlights a different musical element of my music."
    },
    {
     type: 'question',
     title: "What are some of the lessons you learnt from your mother that led you to write 'mama taught me'?",
     answer: "Never give up, own it, don’t cry over boys who aren’t worth it, put yourself first."
    },
    {
     type: 'image',
     path: "articles/munroe/munroe2.jpg",
     author: 'Ruma'
    },
    {
     type: 'question',
     title: "I'm keen to know about what inspired the track \"Who The F@#*\".",
     answer: "F*** boys, lol! I think at the time I was very bored with my love life and wanted to do something about that but all I was being met with was unwanted attention from all the wrong boys and never the ones who I actually wanted it from."
    },
    {
     type: 'question',
     title: "With this being your debut EP what are you hoping your listeners take from it?",
     answer: "I want my listeners to get to know me, to peel back the layers of my artistry and find something within my music that they can connect with."
    },
    {
     type: 'question',
     title: "Do you have a favourite record off this body of work? Why that specific track?",
     answer: "Take me home – it’s my personal banger. Allowed me to explore a more sultry side which I usually keep hidden, since this song I think I’ve felt more comfortable in expressing this side through my music."
    },
    {
     type: 'question',
     title: "Tell us one thing about yourself that no one would expect?",
     answer: "I have a pet tortoise named Shelly."
    },

   ],
   footer_links: [
    {
     name: 'Purchase on Bandcamp here',
     url: 'https://morganmunroe.bandcamp.com/album/layers-05'
    },
    {
     name: 'Follow Morgan Munroe here',
     url: 'https://www.instagram.com/morganmunroeofficial'
    },
    {
     name: 'Follow Lauryn Njeri here',
     url: 'https://www.instagram.com/laurynlikethehills_'
    }
   ]
  },
  {
   type: "article",
   short_name: 'III META: ALXNDR LONDON’S ASCENT TO SELF ACTUALIZATION',
   name: 'III META: ALXNDR LONDON’S ASCENT TO SELF ACTUALIZATION',
   isSingle: false,
   bandcamp_id: '313033869',
   bandcamp_link: 'https://alxndrlondon.bandcamp.com/album/iii-meta',
   credit_illu: 'Mimi Yvonne',
   author: 'Lauryn Njeri',
   date: '11/13/2020',
   illus: 'articles/alxndr/alxndr.jpg',
   introduction: "Drawing energy from his Yoruba Heritage, London based singer - songwriter <b>Alxndr London</b>, releases an minimalist sci-fi-inspired odyssey, <b>III META</b>. The 3-track project reflects Alxndr transversing introspective themes of existence and rebirth, realisation and acceptance.<br><br>\
    Produced collaboratively with East London-based production duo, <b>Bon</b> we see Alxndr employ experimental rhythms to which he adds a paradox of haunting yet angelic lyricism. The use of his mother's tranquil tones of praise and worship at the end of each track give the air of a welcomed calm after a storm.<br><br>\
    Prior to 2019’s IV MERIN, Alxndr released three EPs in as many years, first emerging onto the scene with 2016’s '<i>A Long Time Ago</i>' which was followed up by 2017's '<i>Today</i>' and 2018's '<i>2023</i>'. All lying comfortably within spiritual soul, electronica and experimental music, the enigmatic creator continues to unfold sonically on his intimate journey to 2023.",
   questions: [
    {
     type: 'question',
     title: "2020 has been quite an eventful year for all of us. How has it been for you?",
     answer: "Eventful. I’ve pretty much kept my head down and tried to get through this 'new normal' - harder said than done. Started a new role working with homeless adults during the height of the pandemic. Grateful I’m here. Grateful for the opportunity to work with the delightful Bon, who produced III META."
    },
    {
     type: 'question',
     title: "Your music carries elements picking from various genres. How would you describe your sound to someone who has never listened to you before?",
     answer: "I call it soul but I feel like that could confuse someone whose idea of a Black man singing soul is Ray Charles or James Brown because of all the influences I lean on.<br><br>I'm from London - a beautiful melting point. I’m inspired by the magical preachers in the Black church, gospel choirs/quartets and all the legends before who transmuted gospel music into the popular secular music it is today."
    },
    {
     type: 'question',
     title: "III META explores themes of existence and rebirth, realisation and acceptance. What brought about these particular elements?",
     answer: "In 2013 I realised that I was a bot of a mess and that to be born anew, I would first have to die - by killing the old me. I decided to document this \"journey to death\" as Alxndr London, over the next 10 years until 2023.<br><br>I killed my old mindset and began taking accountability for my actions. I knew I had to do better so I did. III META is also about escaping Earth, because it’s definitely a mess."
    },
    {
     type: 'question',
     title: "Your mother features on this body of work singing Yoruba 'praise and worship'. What role does spirituality play in the making of your music?",
     answer: "So cool innit? Soul music for me isn’t just elements of African-American gospel, jazz, rhythm and blues etc. Soul is an expression of my yester-fears and hopes for a better tomorrow. The spirituality in all this cannot truly be removed - to do so is to unravel the very fabric of music."
    },
    {
     type: 'image',
     format: 'cover',
     path: "articles/alxndr/alxndr2.jpg",
     isArtwork: true,
     author: 'Zaur'
    },
    {
     type: 'question',
     title: "Walk me through III META in regards to your journey to 2023?",
     answer: "III META highlights that I have 3 years until 2023. I feel ‘free’ and I know change is coming. Each year I release a project - it’s my way of doing my bit and leaving the rest in the hands of the universe."
    },
    {
     type: 'question',
     title: "The cover art for III META carries a lot of depth. Would you care to share about it and what inspired it?",
     answer: "The cover was created by an amazing artist called Zaur. It depicts my journey through death and rebirth, simultaneously. Both exist in perpetual harmony. Dotted around and hidden in the art are some of my demons too."
    },
    {
     type: 'question',
     title: "What is next for you after releasing this EP?",
     answer: "As of 4th November 2020, a second lockdown is underway in London. Not sure whether I’ll make it to the end of 2020, let alone 2023..."
    }
   ],
   footer_links: [
    {
     name: 'Purchase III META here',
     url: 'https://alxndrlondon.bandcamp.com/album/iii-meta'
    },
    {
     name: 'Follow Alxndr London here',
     url: 'https://www.instagram.com/mxiiixm'
    },
    {
     name: 'Follow Lauryn Njeri here',
     url: 'https://www.instagram.com/laurynlikethehills_'
    }
   ]
  },
  {
   type: "article",
   short_name: 'BLESSED: NEW SOUNDS',
   name: 'BLESSED: NEW SOUNDS',
   isSingle: false,
   bandcamp_id: '694552560',
   bandcamp_link: 'https://blessedtunes.bandcamp.com/album/music-is-the-medicine',
   credit_illu: 'Leo Harunah',
   author: 'Tanya Akinola',
   date: '11/13/2020',
   illus: 'articles/blessed/blessed.jpg',
   introduction: "BLESSED is the genre-bending African-Australian artist at the forefront of shaping the exciting new sounds emerging from Sydney. Fusing elements of hip hop, indie, rock and R&B all through his trippy, kaleidoscopic lense, the result is an inimitable sound that has seen him play alongside artists like Matt Corby and Childish Gambino, and have tracks featured on Netflix's 'On My Block' as well as on the NBA 2k20 video game.<br><br>\
   This Friday November 20th sees BLESSED release a full length mixtape titled 'Music Is The Medicine' on his new label GODSPEED in collaboration with the French label and publishing company 404 HUMAN. Being his most fully conceptualized and intimate project yet, he describes the LP as \"a collection of songs that are tuned to different frequencies that subconsciously target different emotions. It's an introspective piece created in a time where I needed music most.\"<br><br>\
   Black Bandcamp had a chat with BLESSED about his mixtape, his musical influences and the music community in Sydney.",
   questions: [
    {
     type: 'question',
     title: "How are you and how have you been spending your time during this semi-shutdown period?",
     answer: "I'm groovy thank you. Honestly I've been very productive reading, writing and researching the forgotten Black history and the odd conspiracy here and there."
    },
    {
     type: 'question',
     title: "You're based in Sydney where there's a lot of exciting stuff happening musically, especially within hip hop. I see you've collaborated with Manu Crooks and Mike Akox who are both creating really great hip hop/afrobeats, and like a lot of African-Australian artists, blending their dual cultures and experiences to create something fresh. How do you view this and how do you feel about the music community in Sydney?",
     answer: "Manu and Mike are like my brothers. I genuinely only create and collaborate with people I love and are fans of, but it's definitely exciting to see such growth and diversity going on in the music scene in Australia as a whole and Sydney being at the forefront of the culture."
    },
    {
     type: 'question',
     title: "I can hear a wide array of influences in your music. I'm curious to know who or what you were listening to growing up and who you look towards now for musical inspiration?",
     answer: "Growing up in Australia I listened to whatever my friends were into like Blink 182, Good Charlotte, Yellowcard but after discovering hip hop I was obsessed with Kanye West. These days I tend to listen to a lot of music from the 70s, Jimi Hendrix and Led Zeppelin but I still keep up to date with the outliers of rap."
    },
    {
     type: 'question',
     title: "This is the first full release you're putting out this year. How has your creative process differed this time around, considering the circumstances with covid, racial inequality and civil rights protests and what generally feels like a global time of unrest?",
     answer: "This year has been a blessing for me, I've been able to look inward for answers and not out at the world falling apart. A lot of darkness has been brought to light, a lot of people are waking up to the truth of this ugly world and that collective consciousness has inspired my music and I'm sure creatives all over the world."
    },
    {
     type: 'question',
     title: "On your Twitter you have a pinned tweet about how you want to start a conversation about music and how it helps to soothe the soul, and your upcoming LP is called Music Is The Medicine. How do you think music can be a tool that helps us through difficult times?",
     answer: "Music is a form of escapism, there's a song for every situation. It can be a relatable message of past or present trauma, beats that move you or melodies that soothe you. Especially when it comes to the scientific makeup of sound and its frequencies that operate on the same frequencies as love, it can be used as a powerful tool to comfort you."
    },
    {
     type: 'image',
     format: 'landscape',
     path: "articles/blessed/blessed2.jpg",
     isArtwork: false,
     author: 'Leo Harunah'
    },
    {
     type: 'question',
     title: "Music Is The Medicine is coming out this November 20th. Can you tell us a bit about it?",
     answer: "Music Is The Medicine is a mixtape or a collection of songs that are tuned to different frequencies that subconsciously target different emotions. It's an introspective piece created in a time where I needed to music most."
    },
     {
     type: 'question',
     title: "How does it differ from your previous work?",
     answer: "This is my first body of work, my first cohesive project where I took the time to create music with a message. Artistically and sonically this piece stands out from the rest of my tunes."
    },
     {
     type: 'question',
     title: "The track with Amaarae, 'Count on Me' is one of my favourites off the mixtape - her voice just melts like honey over those crisp beats and your voices blend beautifully together. I'm a big Amaarae fan! How did that collaboration come about and can you tell us what it was like working with her on the track?",
     answer: "She's amazing aye. The collaboration came about through Kyu who is a partner on this project with his label 404HUMAN from France. Kyu also produces and collaborates frequently with Ama and was playing tunes from the project when I was in Paris. I fell in love with her voice and was able to connect virtually for 'Count On Me'."
    },
     {
     type: 'question',
     title: "There are a lot of powerful lyrics throughout the mixtape, especially on tracks like 'True To Me' and 'Something To Believe In'. Do you have any personal favourite lyrical moments on the album?",
     answer: "\"<i>Racing to the paper, don't do this for status, traitors tried to trade up, haters in my prayers</i>\"<br><br>Which speaks to the reasons why I do think this, and the attitude I carry towards anyone that has wronged me."
    },
     {
     type: 'question',
     title: "Now that live performances are allowed in Sydney again, what can people expect from your upcoming shows?",
     answer: "I haven't performed in 10 months so all the energy and angst being released on stage will be magical."
    },
   ],
   footer_links: [
    {
     name: 'Purchase Music Is The Medicine here',
     url: 'https://blessedtunes.bandcamp.com/'
    },
    {
     name: 'Follow BLESSED here',
     url: 'https://www.instagram.com/blessedtunes/'
    },
    {
     name: 'Follow Tanya Akinola here',
     url: 'https://www.instagram.com/tanyaakinola'
    }
   ]
  },
  {
   type: "article",
   short_name: "LIKE A MOTH TO A FLAME, RIVER MOON'S LIGHT",
   name: "LIKE A MOTH TO A FLAME, RIVER MOON'S LIGHT",
   isSingle: false,
   bandcamp_id: "3253241199",
   bandcamp_link: "https://saintdeepthroatxo.bandcamp.com/album/like-a-moth-to-a-flame-remixes",
   credit_illu: "Jonty Knight",
   author: "Crystal Mioner",
   illus: "articles/rivermoon/rivermoon.jpg",
   introduction: "Geographically, Detroit and Cape Town are 9,000 miles apart but when River gets on the phone, I feel like \
    we're joined at the hip, the warmth from her voice transmitted with ease across the Atlantic. It's a Leo thing,\
    that ability to radiate and draw people into your universe. A quick glance at the collaborators for <b>LIKE A MOTH TO \
    A FLAME</b>, their latest remix album, shows how far reaching Rivers galaxy goes. With tracks from Angel Ho,\
    Ase Manual, Bapari, Byrell The Great, and Diego Hauz, River Moon provides keen insight into who's who of the \
    black diasporic club scene.",
   questions: [{
    type: "question",
    title: "",
    answer: "\"<i>I told them, you know, I'm giving you a pack, do whatever you want on it. Like, however you want to change the \
     song, change it. If it sounds like a completely different song, I don't care. Just like, make it yours, you know? \
     And these are like people that I know would not fuck up my song,</i>\" says River in response to my questioning of how the process went to obtain the remix.<br><br>\
     Existing loosely in between New York and South Africa, she has built a strong network of producers. \
     Trust is an essential part of the independent artist experience. That and the ability make things happen. \
     She's self released all of her music over the past 8 years she's been producing. \
     \"<i>I'm scared of labels...I don't want to like, owe people and I don't want to be owned. I'm not going to be \
     no slave. I want my freedom. I don't want no white man controlling me,</i>\" she says in reference to an infamous electronic label who tried to sign her. \
     \"<i>I burned that bridge but may all the bridges I've burnt light my way.</i>\"<br><br> \
     River hovers in the sweet spot between uncompromising but not stagnant. \
     From her early RnB flips to her latest contemplative experimental release <b>MARTYR</b>, which <b>LIKE A MOTH TO A FLAME</b> first appears on, she is creating a legacy uniquely her own.<br><br> \
     \"<i>That's why like, I always say, like, I have no desire to be famous. Yeah, I just want my music to be heard. And I just want to be, you know, remembered, like, I want to leave a legacy. \
     I don't want to be like, you know, popcorn bitches popping up this year then they're gone. \
     Yeah, no, I just, I need to create something that's more of like, it was a moment in time. You know, you could read about it in history books or whatever.</i>\""
    },
    {
     type: "image",
     path: "articles/rivermoon/rivermoon2.jpg",
     author: "Jonty Knight",
     editor: '3rdeyechakra'
    },
    {
     type: "question",
     title: "",
     answer: "In addition to creating her own moment, she’s also looking out for her community and has aspirations of building a formal music family. \
     \"<i>I feel like now, or in the next year or two, I would like to start something like, not a label, but like more of a collective of black people who are doing these techno and leftfield and \
     experimental electronic music and stuff like that.Cuz there's really no platform for us.</i>\"<br><br>\
     She states, \"<i>I think mostly just community, it comes down to like community because we only have us. \
     I don't want to rely on you know, the powers that be. I feel like when we're together, \
     we're more powerful. And I want to be, I just want the kids who think like, Oh my god, maybe I can't do this \
     because I didn't grow up with money. You know, I just want them to feel like it's possible. You know ? You could, \
     you could be black and you could make any type of music because most of this music, all this music, is fucking black music.\""
    }
   ],
   footer_links: [
    {
      name: "Purchase LIKE A MOTH TO A FLAME - REMIXES on Bandcamp here",
      url: "https://saintdeepthroatxo.bandcamp.com/album/like-a-moth-to-a-flame-remixes"
    },
    {
      name: "Follow River Moon here",
      url: "https://www.instagram.com/saint.deepthroat"
    },
    {
     name: 'Follow Crystal Mioner here',
     url: 'https://www.instagram.com/crystal.mioner/'

    }
   ]
  },
  {
   type: "article",
   short_name: 'BLACK BANDCAMP DECEMBER PICKS: EUROPE',
   name: 'BLACK BANDCAMP DECEMBER PICKS: EUROPE',
   bandcamp_link: "",
   bandcamp_id: "",
   credit: null,
   author: null,
   date: '08/07/2020',
   illus: 'articles/dec2020/dec2020.jpg',
   top_desc: "December’s Bandcamp Friday sees us reach out to some of our favourite DJs residing on the European continent. Have a look for some stellar music, all found on our Black Bandcamp database.",
   links: [
   ],
   questions: [
    {
     type: 'bandcamp_picks',
     title: 'Carista',
     description: 'Music curator, DJ and founder of <a href="https://unitedidentities.bandcamp.com" target="_blank">United Identities</a>, born, bred and based in Utrecht, The Netherlands with a monthly show on NTS Radio.',
     links: [
      {
       title: 'Jay Sound - Flamingo Dance',
       description: "That perfect 80's funk with lush sounds brings me back to those summer days during sunset. Detroit native Jay Sound's - all of his productions are just straight up fire!",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2617831924/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=2744954044/transparent=true/" seamless><a href="https://jaysound.bandcamp.com/album/playlist-to-paradise">Playlist To Paradise by Jay Sound</a></iframe>'
      },
      {
       title: 'Osagie - Money Bags',
       description: 'Bad boy tune by Philadelphia\'s very own Osagie taken from his Sagacity II EP.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=326930774/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1729703451/transparent=true/" seamless><a href="https://osagie.bandcamp.com/album/sagacity-ll">SAGACITY ll by OSAGIE</a></iframe>'
      },
      {
       title: 'Ingi Visions - Visionair Tu',
       description: "Brothers Samuel Deep and Julian Alexander are Ingi Visions from the iconic Utrecht-based collective Slapfunk. This one is a timeless slammer and worth listening/playing out loud whenever you got the chance.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3271753897/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=2510258814/transparent=true/" seamless><a href="https://slapfunk.bandcamp.com/album/ingi-visions-ingi-visionair-ep-slpfnk023">Ingi Visions - Ingi Visionair EP - SLPFNK023 by SlapFunk Records</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Suze Ijó',
     description: 'Suze Ijó, lover, DJ, dancer and radiomaker from Rotterdam, The Netherlands. One of the forces behind United Identities, the label founded by Carista. Always selecting my music by feelings and moods.',
     links: [
      {
       title: 'The Neighbourhood Character - Unacceptable Model (4 A dance track)',
       description: 'My dearest friend Ari made this! Ari is a talented producer/DJ from Berlin. On this track Ari creates a peaceful atmosphere but with a psychedelic hint. I think this is one of the most refreshing sounds I\'ve heard in a long time! Don\'t forget to check out The Neighbourhood Character\'s other work and collaborations!',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3651240217/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=2514743374/transparent=true/" seamless><a href="https://theneighbourhoodcharacter.bandcamp.com/album/there-will-be-magic-ep">There Will Be Magic EP by The Neighbourhood Character</a></iframe>'
      },
      {
       title: 'Ian Fink - full [aries mix]',
       description: 'Ian Fink is a key player from Detroit. Ian\'s music gives me hope for the future of House and Techno. It\'s raw and emotional, his music always has a message to tell and most importantly it sounds great! \'full [aries mix]\' is a beautiful innovative house track with a nod to the past.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3069262568/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1837443718/transparent=true/" seamless><a href="https://ianfink.bandcamp.com/album/full">FULL by Ian Fink</a></iframe>'
      },
      {
       title: 'Frankie Reyes (Gabriel Reyes-Whittaker a.k.a. GB, Gift & Blessed, The Abstract Eye)',
       description: "I love how Frankie Reyes explores his Puerto Rican roots with his synthesizer. He creates familiar sounding vulnerable melodies and takes you to a place you didn't know you were longing for. I instantly connect to his sounds through my own Curacao roots and I think many from the diaspora will dig the vibes. To me his music is very calming,soothing and vaguely familiar.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2531816603/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=2930024917/transparent=true/" seamless><a href="https://frankiereyes.bandcamp.com/album/originalitos">Originalitos by Frankie Reyes</a></iframe>'
      },
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Imani',
     description: 'Imani (she/her) is a multi-faceted artist from Switzerland. In her work she experiments with sound, memory and perception, centering Blackness in her work in an effort to uplift and normalize different Black experiences.',
     links: [
      {
       title: 'Azu Tiwaline - Draw Me A Silence Part. I',
       description: "Azu Tiwaline does an amazing job at creating a rich and deep soundscape, bringing rhythms stemming from her roots to the forefront, interlacing them with elements of speech. The track \"Until the End\" feels like I'm under water and being transported to distant futures, all the while being guided by an omnipresent voice, guiding me through the depths of the ocean",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1099319844/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://azutiwaline.bandcamp.com/album/draw-me-a-silence-part-i">Draw Me A Silence Part. I by Azu Tiwaline</a></iframe>'
      },
      {
       title: '[MONRHEA] - S P A C E through T I M E',
       description: '"Space through time" is, in the words of the artist [MONRHEA] themselves, an ambient meditative track. Listening to it, the sounds seem to gently break through all thought and allow the mind and the body to release.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=4126966007/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://monrhea.bandcamp.com/track/s-p-a-c-e-through-t-i-m-e">S P A C E through T I M E by [MONRHEA]</a></iframe>'
      },
      {
       title: 'Purple Hurt - Postcards from the Sun',
       description: "The beginning of this song starts with the sunrise. \"Postcards from the Sun\" reminds me of Icarus as they fly towards the sun with a painful outburst as it's getting too hot and finally ending on a peaceful note, as they accept their death and plummet into the ocean.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2637358034/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://purplehurt.bandcamp.com/album/postcards-from-the-sun">Postcards from the Sun by Purple Hurt</a></iframe>'
      },
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'AYBEE',
     description: "I am AYBEE. Chief Alchemist of <a href=\"http://deepblakmusic.bandcamp.com/\" target=\"_blank\">Deepblak Recordings</a>.",
     links: [
      {
       title: 'AFTA-1 - Cosmic Snap',
       description: "Always on the lookout for this Brother’s work. There is a tranquil transcendence to what he does. He had been quiet for a time, but recently dropped a new project. A perfect counter melody to the frenetic nature of 2020.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=692190634/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=314550686/transparent=true/" seamless><a href="https://afta1.bandcamp.com/album/103120">103120 by AFTA-1</a></iframe>'
      },
      {
       title: 'Afrikan Sciences - Survivors',
       description: 'Dizzy Gillespie once said of Charlie Parker "Know him..know me". I have traveled many roads with this cat, yet he ceases to amaze. Any release from Eric should be regarded as a decree of the highest order.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1637858673/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://afrikansciences.bandcamp.com/album/survivors">Survivors by Afrikan Sciences</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Somatic Rituals',
     description: 'DJs & producers (Kombé, Mafou & Mukuna) functioning out of Basel, Switzerland and running the Somatic Rituals collective.',
     links: [
      {
       title: 'Martyn Bootyspoon - Buss Down (Xzavier Stone Remix)',
       description: 'One of our favourite remixes by our friend Xzavier Stone. Definitely a club banger and an interesting combination of bouncy 2000 hip hop and a vicious acid line.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2622180351/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=2318337832/transparent=true/" seamless><a href="https://modelfuture.bandcamp.com/album/martyn-bootyspoon-no-1-crush-remixes">Martyn Bootyspoon NO. 1 CRUSH REMIXES by Martyn Bootyspoon</a></iframe>'
      },
      {
       title: 'Millia Rage - hopper7',
       description: 'The first track we heard of Millia Rage. The percussion fueled tune is right in our lane, and we’re looking forward to hearing more from the Chicago producer.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=4277216872/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://milliarage.bandcamp.com/track/hopper7">hopper7 by Millia Rage</a></iframe>'
      },
      {
       title: 'Lamin Fofana - And All the Birds Sing Bass',
       description: 'Just beautiful textures and feels. The whole EP is great.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3551512510/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3373823273/transparent=true/" seamless><a href="https://laminfofana.bandcamp.com/album/blues">Blues by Lamin Fofana</a></iframe>'
      },
      {
       title: 'Anz - Loos In Twos (NRG)',
       description: 'A straight up U.K. banger. Unfortunately we only had the chance to play this once in a club before Switzerland went into lockdown again. Nevertheless the track ripped the floor apart.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1285057197/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1285045693/transparent=true/" seamless><a href="https://anzdj.bandcamp.com/album/loos-in-twos-nrg">Loos In Twos (NRG) by Anz</a></iframe>'
      },
      {
       title: 'Hagan - FWD',
       description: 'This tune has such a nice build up. We\'ve been playing this track for some while now, but it never gets boring.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3488846892/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3516903845/transparent=true/" seamless><a href="https://pushandrunmusic.bandcamp.com/album/roots">Roots by Hagan</a></iframe>'
      },
     ]
    },
   ]
  },
  {
   type: "article",
   short_name: 'IDMAN IS HERE AND DOWN FOR IT',
   name: 'IDMAN IS HERE AND DOWN FOR IT',
   bandcamp_link: "https://idman.bandcamp.com/track/down-for-it",
   bandcamp_id: "862102097",
   isSingle: true,
   author: 'Lauryn Njeri',
   illus: 'articles/idman/idman.jpg',
   date: '12/11/2020',
   introduction: "Canadian-Somali singer, songwriter, <b>Idman</b> makes an impressive debut with their first ever release, \"<b>Down For It</b>\". Defining themselves as genreless, Idman brings us along on their raw journey of self discovery as an artist.<br><br>Their hush vocal tones ravelled in grasping penmanship see Idman dripping in authentic flavour while digging deep into their relationship with self doubt, affirming that they are boldly kicking down any hesitation that stands in their way. With the help of hard hitting bass lines and an infectious hook, we get to experience Idman’s delicate yet striking energy.<br><br>Black Bandcamp had a conversation with Idman about their debut release, their journey in music and what more we can expect from them.",
   questions: [
    {
     type: 'question',
     title: 'Who is Idman?',
     answer: "I would say I am Idman and I would say that's a really hard question for anyone to answer. I'd say I'm getting to know myself and I think that's what's really cool about doing music right now, is trying to understand the nuances and complexities of who I am through word and sound."
    },
    {
     type: 'question',
     title: 'What has an average day been like for you during the global lockdown?',
     answer: 'An average day nowadays is really different than how it was in the early days of lockdown for sure. Nowadays it includes a lot of emails, maybe a few zoom calls, maybe checking on the homies, I’ve got a lot of hobbies so maybe tapping into one of those. Doing something for myself at some point is usually much much much appreciated but yeah that’s usually what a day looks like.'
    },
    {
     type: 'question',
     title: "Has your musical journey always been deliberate, or did it gradually evolve to what it's become ?",
     answer : "The steps that it's taken me to get where I am right now have though unpredictable come super organically. But I will say that the vision in creating it and wanting to share has always been very deliberate and consistent, for sure."
    },
    {
     type: "image",
     path: "articles/idman/idman2.jpg",
    },
    {
     type: 'question',
     title: 'Who are some of the artists that have been influential in finding your sound?',
     answer: "I think some of the artists that have been super influential in finding my sound are artists that I know view music as being a sonic experience that is genreless. I think Janelle Monae for sure, Prince for sure, I think about Tiwa Savage, I think about Sauti Sol, Pac yeah, so many people. Also, I would add that I don't think that I have figured out what my sound is either. I think I'm figuring it out but the comfort that I have in figuring it out is probably tributed to those artists."
    },
    {
     type: 'question',
     title: 'The lyrics on this body of work are very raw and self affirming. Do you mind sharing what led to the creation of this track? ',
     answer: "I had the first line in my head for a little bit and the first line made me feel really terrified to say out loud and I felt affirmed by that in a weird way. I have social anxiety, diagnosed and I think that something that makes me feel really grounded and in my body is doing things that challenge me and facing my fears head on and yeah, I think I feel like oh my god if I make this song I'll feel like a cornball but Imma be honest. I'm committed to doing the things that challenge those parts of me for sure."
    },
    {
     type: "image",
     path: "articles/idman/idman3.jpg",
    },
    {
     type: 'question',
     title: 'Being your debut release, this single carries a very intentional message. What else can we expect to hear on your upcoming EP "Risk"?',
     answer: "Expect to not have one cohesive sound for sure. I think that this body of work is me presenting to the world, I wouldn't necessarily say my rough drafts, but my current process for sure. I think it was an opportunity for me to figure out what I liked and what I wanted to listen to myself and I think it 's super different. No one song sounds like the other and I'm okay with that fact."
    },
    {
     type: 'question',
     title: 'When you create music, what would you like your listeners to take away from it?',
     answer: "I just aim for resonation. I feel like there’s something about music that feels like a shared experience. I think that if we didn't feel like that we’ d all be singing in our rooms and there’ s something to be said about wanting to do this thing and present it to folks and have this back and forth and I think my number one goal is resonation and positive resonation to be exact."
    }
   ],
   footer_links: [
    {
     name: 'Purchase on Bandcamp here',
     url: 'https://idman.bandcamp.com/track/down-for-it'
    },
    {
     name: 'Follow Idman here',
     url: 'https://www.instagram.com/idman.a/'
    },
    {
     name: 'Follow Lauryn Njeri here',
     url: 'https://www.instagram.com/laurynlikethehills_/'
    }
   ]
  },
  {
   type: "article",
   short_name: 'BUILDING A QUEER NATION: A RETROSPECTIVE',
   name: 'BUILDING A QUEER NATION: A RETROSPECTIVE',
   author: 'Deborah Findlater',
   date: 'TBA/12/2020',
   illus: 'articles/queernation/queernation.jpeg',
   credit_illu_all: "All photos by Luke Howard",
   introduction: "Moving together, breathing together, being together. All things many of us have missed in a year of club and rave closures. The importance of such, particularly for Black queer folks, is acutely felt; whether for wellbeing, income, community and much more. Although venue closures and the ever-expanding monster of gentrification have had an impact, London still remains home to a thriving Black queer nightlife scene with parties such as: Queer Bruk, Bootylicious, Let’s Have a Kiki, Nite Dykez and Faggamuffin; and collectives like Black Obsidian Soundsystem and BBZ, alongside a host of DJ’s playing at club nights across the city, notably Femmi-erect, 079me and Pxssy Palace. This stems from a rich legacy laid down by nights such as Precious Brown, Blessence, Liberté and Queer Nation, as recalled by DJ and sound artist, Ain Bailey, and artist, archivist and community organiser Ego Ahaiwe Sowinski. In this pivotal moment of breaking down harmful structures and coming together to build a more equitable future, what seeds have been planted that point us towards a better way of being? Through interviews with a selection of the Black DJ’s and ravers present at the parties, we reflect on seminal London club night Queer Nation and its impact.<br><br>\
          It was through a trip to San Francisco that founder Patrick Lilley came up with the name Queer Nation, after the infamous LGBTQ activist group. First founded in March 1990 in New York City by a group of activists who were also part of HIV/AIDS advocacy organisation, ACT UP, branches soon spread across the U.S. including to where Lilley visited friends who told him of the organisation. Due to the reclamation of a term that was still widely seen as derogatory and their direct-action tactics, Queer Nation caused a necessary stir in light of increasing homophobic violence. One particular action the San Francisco chapter undertook was a Halloween protest against two visiting fundamental Christian ministers who intended to carry out an ‘exorcism’ in the city, even forming the wittily named focus group, GHOST (Grand Homosexual Outrage at Sickening Televangelists). Inspired by this D.I.Y. punk approach, Lilley created the logo for the club night in a similar Xerox style.<br><br>\
          As well as the attitude, Lilley was influenced by another product from the States: the music. House formed the musical foundation of Queer Nation, something greatly intentional given how impacted Lilley had been by the renowned Paradise Garage in NYC with artists like Frankie Knuckles and Larry Levan. Previously in the late 1980’s, Lilley had run the club High on Hope in Camden with DJ Norman Jay focusing on a sound geared more towards soul, featuring prestigious guests such as Chaka Khan, Loleatta Holloway, Gwen Guthrie and En Vogue. The increase in tempo that came with 90’s led to a new stage in the evolution of house music and required a new, explicitly queer space to accommodate it.<br><br>\
          Opening in December 1990, Queer Nation first begun its life at The Gardening Club, Covent Garden. For the next 7 years it held down a regular Sunday night spot amassing a legion of loyal attendees. The Sunday session has all but ceased to exist in London with clubs like Plastic People closing, however it offered a unique experience and space. After it moved to a Saturday night, taking place at a variety clubs notably Substation South in Brixton, Union and Barcode both in Vauxhall up until 2018 giving it an impressive 28-year lifespan. During this time resident DJ’s Princess Julia, Supadon, Luke Howard and Jeffrey Hinton became infamous for consistently setting the musical tone of the night and maintaining its unique character. Its duration is one of the many reasons why it stands out as special. From it being a rare Queer night that centred on soulful house, to it drawing in renowned DJ’s and artists such as Little Louie Vega and Ultra Nate to many attendees finding lifelong friends, Queer Nation holds an iconic legacy. Creating a space that was intimate yet an experience that was expansive it deserves to be remembered and celebrated. <br><br>\
          We speak to DJ Paulette, Robert Shaw and Paul McLennon, who were all part of the Queer Nation community, gathering their cherished memories and experiences of the night.<br><br>\
          DJ Paulette first attended Queer Nation in 1994 after moving down to London from Manchester. Having known original line up DJ, Princess Julia from their time playing at the iconic Hacienda, their relationship deepened as well as with Luke Howard and Patrick Lilley, resulting in DJ Paulette playing the party herself a few years later. As both a raver and a DJ, she offers a unique perspective on the night. ",
   questions: [
    {
     type: 'question',
     title: '',
     answer: '<br><br>DJ Paulette: Queer Nation was about Black music. Songs, voices and dancing. It was about the dance floor. The uplifting vibe and environment.'
    },
    {
     type: "image",
      credit: "<i>Photo was taken with a phone provided by Paul Allard.<br> In order of appearance: Elliot Pinkett, DJ Harvey, Paul McLennon, Paul Allard</i>",
     path: "articles/queernation/queernation8.jpeg",
    },
    {
     type: 'question',
     title: 'Deborah: I\'m really just thinking about how it originally was on a Sunday, and just how spiritual house is.',
     answer: 'DJ Paulette: Totally. I feel like that about house because a lot of the house music that you listen to is gospel. Listen to the lyrics and they\'re coming from gospel. You know, the singers, whether it\'s Bebe and Cece Winans or Michael Procter, Michael Watford, even Barbara Tucker, Jocelyn Brown, they\'re all church singers, and they\'re bringing that kind of spiritual experience to play with their lyrics and their songs and their vocal delivery for house music. Sharon Pass who worked with J.M. Silk. All the original house. Frankie Knuckles, Robert Owens and Darryl D’Bonneau, singers like that. It was like mixing gospel church with house and so doing it on this Sunday was definitely that kind of religious experience without the church.'
    },
    {
     type: "image",
     path: "articles/queernation/queernation2.jpeg",
    },
    {
     type: 'question',
     title: "Deborah: I feel like the club is often a space for Black and queer people to experience that kind of congregation. And it's a very transcendental experience. It's very much like you're purging as well.",
     answer: "DJ Paulette: Totally! That’s dancing, the sweat, the purge, the expression, the release, the tension and release. You can watch black people dancing, like properly dancing to house music and there will be a point where you will raise your hands. It's like, am I receiving or am I releasing? Because in that position, you've got the two ways you're open, even just in like spiritual terms, like you said, transcendental. You're open. Your crown is open. Elevation- by Blaze, if you go listen to that song and he's saying the beauty of Elevation is that you can literally fly above the galaxy. I think they even had Blaze play at Queer Nation as well as Josh Milan and Kevin Hedges. That was the ilk of the DJ’s that were playing."
    },
    {
     type: 'question',
     title: "Deborah: I'm really struck by the feeling of it because obviously in this period of time where we can't rave, you realise how vital it is for your nourishment as a person. How did you feel afterwards? Like going into the week? Because it was a weekly night",
     answer: "DJ Paulette: Yeah, it was every Sunday. Because of licencing being different anyway, your Sunday clubbing always finishes by midnight and it never goes on super, super late, so you can be at work on Monday morning no problem. I don't go to church. I'm not a church person. I have my own church. Music is very much my thing. Whenever I went to Queer Nation and then later it was Lazy Dog or Faith or Sunday Sonic or one of those Sunday clubs for soulful house music, I always felt like I had this big release and sometimes a revelation if I've heard this new tune and I've got down and I've surprised myself with a move or a jump or spin or something, and I've gone like, yeah! I actually did get into it so deep that I lost myself for a moment in the music. And I love that. And I really did feel Sunday clubbing and Queer Nation set me up for the week."
    },
    {
     type: "image",
     path: "articles/queernation/queernation3.jpeg",
    },
    {
     type: 'question',
     title: "Deborah: It's so good to talk about dancing and congregation and movement with you, because I feel like that space is so essential for us as Black people because, Monday to Friday, you're going through whatever you're going through, you’re in work etc. and you need this release, this receiving. With phones and social media, we’re in our heads a lot but nothing beats movement and what you can actually do with your body in a space.",
     answer: "DJ Paulette: Going through lockdown and I'm kind of looking at my body, how it's changed in the last few months and I'm wondering why it's changed then I thought it's because I'm not dancing. And dancing is key, and that brings it back very nicely to the Queer Nation experience, because dancing was the centrepin. I used to really always enjoy connecting with anybody on that dance floor that could match my steps and that could do better because it always encourages you to do better, to go further. It’s a whole other conversation when you start to dance with somebody, it’s a whole way of communicating. [As a DJ] I'd spend the week going through records, thinking what will have the best and most desired effect. It’d generally be the records - I always had my two best Queer Nation clubbing friends, Sean and Alex in my head - that would make them jump. We had a way of being very coordinated on the dancefloor.",
    },
    {
     type: 'question',
     title: 'Deborah: Dancing like that is very call and response, referring back to the church',
    },
    {
     type: "image",
     path: "articles/queernation/queernation4.jpeg",
    },
    {
     type: 'question',
     answer: "<br><br>Robert Shaw is a long standing friend of DJ Paulette, having met at seminal gay night Flesh at the Hacienda. As a raver and regular attendee across venues, he holds the night close to his heart, having a number of memorable experiences of it.<br><br>",
    },
    {
     type: 'question',
     title: 'Deborah: What made Queer Nation stand out as a club night for you?',
     answer: 'Robert: The music! The DJ’s really knew their stuff and the music was excellent every time. I can’t think of another gay club that was playing the same genre of house music they played as other clubs tended to play much harder house. Even when the Queer Nation DJ’s played at other venues their music changed which for me made Queer Nation more special and unique. I had so many good nights, the music, the crowd all helped to keep it special for as long as it was.'
    },
    {
     type: "image",
     path: "articles/queernation/queernation5.jpeg",
    },
    {
     type: 'question',
     title: 'Deborah: Why was it so important to you and the other Black ravers?',
     answer: 'Robert: I think Queer Nation became more important to Black ravers when it went to Substation South from the Gardening Club in Convent Garden. When it was at the Gardening Club it was on a Sunday night, and my recollection was the audience wasn’t predominately Black. This changed when it moved to Substation South, as it was on a Saturday in Brixton before the area became gentrified, so it was easy to access for many Black ravers who lived in or close to the area. If truth be told, Substation South was a dive, but it was unpretentious which set it apart from some of the other clubs at the time, especially those in the west end. There was also Black door staff which helped Black ravers feel more welcome than other clubs.'
    },
    {
     type: "image",
     path: "articles/queernation/queernation6.jpeg",
    },
    {
     type: 'question',
     answer: "<br><br>For Paul McLennon a friend of one of the party’s resident DJs, his Queer Nation journey began in 90/91. Despite not living in London at the time, the night would be an absolute must on weekend visits.<br><br>"
    },
    {
     type: 'question',
     title: '',
     answer: "Paul: It was a whole kind of new experience for me. It was a small intimate space and it was populated by people who really loved the music. A really fabulous, all-inclusive sound. They were more interested in pushing forward that community spirit and just wanted people to have a great time.\
         I have made friends who I'm still in contact with. It was a fresh outlook, a way to drive into the week and give you some kind of inspiration. Yeah, inspirational. The night was inspirational. That's the word!"
    },
    {
     type: 'question',
     title: 'Deborah: Is there anything that you think from that time people could take forward for queer nights?',
     answer: "Paul: Just a spirit of being together and oneness, looking out for your fellow human beings. And being gracious to whoever's around you and realising that people are actually suffering and kind of trying to bring them up."
    },
    {
     type: "image",
     path: "articles/queernation/queernation7.jpeg",
    },
    {
     type: 'question',
     answer: "<i>Deborah Findlater is an artist, filmmaker, writer and DJ from London. Her work explores issues surrounding working class Blackness in Britain, Black Womxnhood and queerness. Under her DJ moniker, Pepper Coast, she is committed to playing dance, electronic, bass & drum heavy sounds from across the African diaspora. She is a part of London based QTIBPOC soundsystem and collective Black Obsidian Soundsystem (B.O.S.S.).</i>"
    }
   ],
   footer_links: [
    {
     name: 'Follow Deborah Findlater',
     url: 'https://www.instagram.com/pepper_coast/'
    }
   ]
  },
  {
   type: "article",
   short_name: 'BLACK BANDCAMP FEBRUARY PICKS: TANZANIA',
   name: 'BLACK BANDCAMP FEBRUARY PICKS: TANZANIA',
   bandcamp_link: "",
   bandcamp_id: "",
   credit: null,
   author: null,
   date: '08/07/2020',
   illus: 'articles/jan2021/jan2021.jpg',
   top_desc: "For this month's Bandcamp Friday, we hit up creatives in Tanzania to find out who their top Black Bandcamp discoveries and picks of the month are.",
   links: [
   ],
   questions: [
    {
     type: 'bandcamp_picks',
     title: 'MVNSA',
     description: "I'm an artist, producer, and model from Niger that grew up in Tanzania. ",
     links: [
      {
       title: 'Fatoumata Diawara - Makoun Oumou',
       description: "From the first few guitar notes Fatoumata perfectly set's the tone of this buttery smooth song. Her vocals continue to enhance the experience by introducing emotion and soul to the instrumental. The quality of production on this song makes it easily digestible, and it can quickly put the listener in a trance.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=1924703697/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://vamusic2.bandcamp.com/track/fatoumata-diawara-makoun-oumou">Fatoumata Diawara - Makoun Oumou by Fatoumata Diawara</a></iframe>'
      },
      {
       title: 'Salif Keita - Barayé',
       description: "On this song the golden voice of Africa continues to live up to his name by delivering a sound only he is capable of creating. Barayé is rich in instruments, each one contributing its own element to making Barayé the groovy, psychedelic experience that it is. Salif Keita's voice effortlessly elevates the song by delivering pain through his vocal tone and delivery.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=1275754003/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://salifkeita.bandcamp.com/track/baray">BARAYÉ by Salif Keita</a></iframe>'
      },
      {
       title: 'Wizkid - No stress',
       description: "The great vibes of this song are immediately introduced from the very first chord. Once the percussion starts it's almost impossible to resist wanting to get up and dance. This song is like an imaginary vehicle that takes me to the beach, with a silk shirt on catching a whine.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2382973502/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3110376684/transparent=true/" seamless><a href="https://wizkidmusic.bandcamp.com/album/made-in-lagos-explicit">Made In Lagos [Explicit] by WizKid</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Salma Munde',
     description: "I am a Musician and Graffiti Artist from Tanzania. I create music for the unapologetically afro futuristic person of the 21 century.",
     links: [
      {
       title: 'To Li - Jojo Abot',
       description: 'Jojo Abot is an all time favorite of mine, not only is she creating amazing electronic and alternative music but she makes sure it is unmistakably African in the process and that is very admirable.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3926583073/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=397180995/transparent=true/" seamless><a href="https://jojoabot.bandcamp.com/album/fyfya-woto">Fyfya Woto by Jojo Abot</a></iframe>'
      },
      {
       title: 'Diplomatic - OSHUN',
       description: "I have chosen this track because it celebrates sisterhood by emphasizing our ally ship with each other while also paying tribute to Femi Kuti's 'Water Got No Enemy' reimagined and modernized.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2179572092/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1249785346/transparent=true/" seamless><a href="https://oshuniverse.bandcamp.com/album/afahye">AFAHYE by OSHUN</a></iframe>'
      },
      {
       title: 'Sunny Duet ft. theMIND - No Name',
       description: 'I love this song, the overlapping melodies and harmonies make it feel so well rounded and creates what feels like an entire orchestra coexisting with Hip-hop . It is such a wonderful experience hearing storytelling made so smooth.',
       embed: ' <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1599515291/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=2653206599/transparent=true/" seamless><a href="https://nonameraps.bandcamp.com/album/telefone">Telefone by Noname</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Arafa (they/them)',
     description: "A non-binary, multidisciplinary artist working in Tanzania and Kenya. They work in the realms of 3D design, graphic design, sculpture, architecture and sound, creating work that aims to provoke their visitors into considering their daily realities.",
     links: [
      {
       title: 'Be Nice - Janice Iche & Fvzzkill',
       description: 'Somehow, I feel like Janice Iche brings the moods she expresses in her visual artwork into her music, because she creates such wonderful songs that seem to express both the joys and difficulties of just being. In this song in particular, I especially adore the contrast between the relatable lyrics and the production, how it’s an invitation to jam while also presenting seemingly aloof characters.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=3886136015/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://janiceiche.bandcamp.com/track/be-nice">Be Nice by Janice Iche</a></iframe>'
      },
      {
       title: 'Dem Go Know - Bakhita',
       description: "This was my favourite track from Bakhita’s new EP, CHAMOMILE:PYE. Lemi’s production on this song reminds me of vibes similar to those on Solange’s most recent releases, where it’s playful and such short goodness that you wish there was much more of it. Good thing is, Bakhita carries this funk all through her EP and I encourage you all to listen to the whole project.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1733537500/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1147257649/transparent=true/" seamless><a href="https://bakhita.bandcamp.com/album/chamo-mile-pye">CHAMO MILE:PYE by BAKHITA</a></iframe>'
      },
      {
       title: 'Honey Bee - EA WAVE & Wanja Wahoro',
       description: "This is one of my favourite tracks from last year, and an unexpectedly beautiful combination of Wanja Wahoro’s lyricism and EA Wave’s experimental production. ‘Honey Bee’ is part of a two part collaboration between the artists, and it's the kind of song that instantly gives me a sense of hope and brightness. Whenever I put it on, I immediately imagine sunshine and sunflowers, and the bouncy production always immediately gets me off my feet.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3102286723/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=2598506062/transparent=true/" seamless><a href="https://eawave.bandcamp.com/album/honey">Honey by EA Wave &amp; Wanja Wohoro</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Mario',
     description: "Singer from Kiwalani, Dar es Salaam who has been making music across various genres for a decade. Currently making Singeli with my producer DJ Silla. Passionate about representing new emerging sounds from across Africa, especially Tanzania.",
     links: [
      {
       title: 'Jamaica Mnanda - Maskini Naye Tu',
       description: "There is so much great music in Tanzania that doesn't get repped enough. This track represents the authentic sound of Dar es Salaam. Jamaica Mnanda debut release in the distinctive Mchiriku style mixes complex rhythmic patterns, poetic lyrics and killer keyboards. The footwork/juke remixes of the track slap hard.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2531594905/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=2097955022/transparent=true/" seamless><a href="https://jamaica.bandcamp.com/album/masikini-naye-mtu-the-poor-are-also-people">Masikini Naye Mtu (The Poor are Also People) by Jamaica Mnanda</a></iframe>'
      },
      {
       title: 'Siti Muharam - Nyuki',
       description: "Recorded by the Great Grand Daughter of legendary Taarab singer Siti Binti Saad this is an example of the classical Taarab style. Everyone in Dar es Salaam grew up listening to modern Taarab and it's great to hear the classical style being recorded again. This is music which embodies the Swahili Coast mixing Arabic and African influences.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3772336838/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3271742551/transparent=true/" seamless><a href="https://sitimuharam.bandcamp.com/album/siti-of-unguja-romance-revolution-on-zanzibar">Siti of Unguja (Romance Revolution On Zanzibar) by Siti Muharam</a></iframe>'
      },
      {
       title: 'Mzee wa Bwax - Mshamba Video Mste',
       description: 'Nyege Nyege Tapes was the first label to take Singeli outside of Tanzania. So as a Singeli artist this compilation has an important place in my heart. The sound of Mzee wa Bwax is an example of what Singeli sounded like at that time, raw, frenetic and fun.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1483155390/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=2371798749/transparent=true/" seamless><a href="https://nyegenyegetapes.bandcamp.com/album/sounds-of-sisso">Sounds of Sisso by Mzee wa Bwax</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Tofa Jaxx',
     description: "A singer/songwriter, live performer and producer from Tanzania. I love telling stories through music and making stuff that moves me.",
     links: [
      {
       title: 'Jay Mitta - Tatizo Pesa',
       description: "I stumbled upon Jay Mitta's singeli track 'Tatizo Pesa' I love it so much as it's very reminiscent of busy sunny Dar. That's the type of music you hear when running around Dar Es Salaam’s streets.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=4027928840/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=2414592509/transparent=true/" seamless><a href="https://nyegenyegetapes.bandcamp.com/album/tatizo-pesa">Tatizo Pesa by Jay Mitta</a></iframe>'
      },
      {
       title: 'Siti Muharam - Sikitiko',
       description: "I love film and cinema. Before anything else I had wanted to become a filmmaker. And Siti Muharam's 'Sikitiko' is very cinematic. Makes me want to plan a holiday trip to Zanzibar.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3772336838/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3523396614/transparent=true/" seamless><a href="https://sitimuharam.bandcamp.com/album/siti-of-unguja-romance-revolution-on-zanzibar">Siti of Unguja (Romance Revolution On Zanzibar) by Siti Muharam</a></iframe>'
      },
      {
       title: 'Abdu Ali - Fiyah',
       description: "I also just stumbled upon Abdu Ali the avant garde electronic musician, well his music is quite odd. But very unapologetic. I would listen to 'Fiyah' before heading out the house just so I have my unapologetic demeanor on.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=454092736/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://abdualibmore.bandcamp.com/album/fiyah">FIYAH!!! by Abdu Ali</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Turunesh',
     description: "A truly multifaceted artist. The Tanzanian singer, songwriter, and creative director is becoming a leading voice amongst her peers in the realm of East African music. Her unique sensual sound and lyrical suave has solidified her as a feminist, Pan-African artist on the rise.",
     links: [
      {
       title: 'Nailah Hunter - Basin Bleu',
       description: "I love Nialah hunter's 'Basin Bleu'. The intro transports me to a place where colors and textures are in abundance. It’s the cover art to be true. It makes me think of old photos of my mom and auntie. I feel at home but nostalgically far away at the same time. There are no words and so the song tells whatever story I want or need to at the time I listen. I’m grateful for this track.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=605429135/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://nailahhunter.bandcamp.com/track/bassin-bleu">Bassin Bleu by Nailah Hunter</a></iframe>'
      },
      {
       title: 'Afriqua - Noir',
       description: "I was drawn to 'noir' because of its name. I love the beautiful contrast (or perhaps the parallelism) between the sound of the song and the societal connotations of ‘noir’. The song is delicate, tender, smooth, and shy. The sound of the water is so calming and meditative. We often do not think of these things when we think of darkness. The song makes me want to find my inner peace, my noir.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2226738195/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=151475501/transparent=true/" seamless><a href="https://afriqua.bandcamp.com/album/colored">Colored by Afriqua</a></iframe>'
      },
      {
       title: 'Jamila woods - Holy',
       description: "Jamila's song holy is special. It has inspired me to write music in the past and for that I will forever be grateful. She takes the cliche words “I’m not lonely , I’m alone '' and makes them totally refreshing with the following lyrics “I’m holy, on my own”. Accepting that we’re alone is doable, but accepting how powerful and great you are can be a difficult truth for many of us. I believe many of us live and die without this reaching this realization. Having her audience sing along, declaring aloneness and holiness simultaneously is powerful. She’s an amazing songwriter.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1165059544/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://jamilawoodsmusic.bandcamp.com/album/holy">Holy by Jamila Woods</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Mim Suleiman',
     description: "I am a Singer Songwriter, Musician, Performer, Artist, Composer, Designer, Authour, Cultural conservationist and Protagonist.",
     links: [
      {
       title: 'Zawose & Brook - Awuno Mganga Ndeje',
       description: 'Amazing sounds. The master of gogo sounds. I could listen to them all day. The sounds the instrument makes and plays. The vocals acrobats. It takes my body and my mind away in a good way.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2817587697/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=646427404/transparent=true/" seamless><a href="https://zawosebrook.bandcamp.com/album/assembly">Assembly by Zawose &amp; Brook</a></iframe>'
      },
      {
       title: 'International Orch Safari Sound - Marashi ya Pemba',
       description: 'This song brings back only the fun memories of the cloves seasons in Zanzibar Islands. Especially Pemba island, the minute you step on the land, you can smell the cloves. I am never tired of this song. I just enjoy it more and more every day. Marashi ya pemba - The perfume of Pemba.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3917774925/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1830757627/transparent=true/" seamless><a href="https://africancream.bandcamp.com/album/the-great-east-african-trip">The Great East African Trip by International Orch Safari Sound (Tanzania)</a></iframe>'
      },
      {
       title: 'Bi Kidude - Kijiti',
       description: "I love this song because it says Zanzibar to me. The ocean, the tropical presence and amazing scale and music to indulge with. Sang in Swahili language. It is one of those songs that just shows just how important the Arts of music is education and promoting awareness to the community. I salute Bi Siti.\
        Originally sung by Siti Binti Saad. The first female artist, recorded artist to record from Zanzibar. For the last 50 years, her legacy has been kept alive by the Legendary Bi Kidude. Now Bi Kidude has left the biggest hole in Zanzibar art and culture history and traditions. The master drummer with a voice of Powerfire.\
        Kijiti is the name of a lady. It is a song about a young lady who was abused, murdered and then abandoned. The story goes to say that the one that found the body and reported it to the police is the one who got blamed for the offence, but clearly the person who did it got away to this day. Rumour has it the person who did the horrible acts was allowed to get away with it.",
       embfed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=28805883/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=641880105/transparent=true/" seamless><a href="https://ouchrecords.bandcamp.com/album/zanzibara-volume-n-1">Zanzibara / Volume Nº1 by Bi Kidude</a></iframe>'
      }
     ]
    }

   ]
  },
  {
    short_name: "XADI’S NOSTALGIC REMINISCE ‘MOVIES’",
    name: "XADI’S NOSTALGIC REMINISCE ‘MOVIES’",
    bandcamp_link: "https://xadi.bandcamp.com/track/movies",
    isSingle: true,
    bandcamp_id: "109155119",
    author: "Lauryn Njeri",
    date: '02/19/2021',
    illus: 'articles/xadi/xadi.jpg',
    credit_illu: 'Peter O’Sullivan',
    introduction: "West London based artist, Xadi proves to be one to keep an eye out for this year. After the release of ‘Mañana‘, a tranquil hit alongside Manchester’s Nina Cobham, Xadi continues to build his reputation as incredibly multifaceted with ‘Movies’.<br> \
      Pairing contemplative lyrics with delicate production, Movies is a candid, honest portrait depicting feelings of nostalgia from bygone relationships. “Watching movies in the cinema feels like a timestamp to me, so the song had to be a reminiscent one. ‘Movies’ is a reflection on some of the lesser experiences I've had with people as well as the way I have gone about processing them” explains Xadi.<br> \
      Soothing melodies, lush flows and grasping penmanship are just some of the specs of casual magic that Xadi brings to the table with this tender introspective tune which seizes you at the first chord and lingers long after you've experienced it.<br>\
      The singer, rapper and producer is a  legend yet to be recognised as he only seems to get better with each release. We had a chat with Xadi about his transition to music, his latest release and a lot more.",
    questions: [
    {
      type: 'question',
      title: 'Can you tell us a little bit about yourself?',
      answer: "My name is Xadi. West London is where I'm from, in Hounslow. I'm a singer, rapper and a music producer I would say. I take a very DIY attitude towards everything  so far in my music career. I produce all my music, mix it and master it.<br>\
        For this song I've actually made the video as  well...I don't have any desire to go further down that. It was so long but because lockdown came and it wasn't really easy to shoot a video, I just try and if stuff is not available, I tend to just do it myself.  In terms of what my music is like it's probably somewhere between Hip Hop and R&B, somewhere there."
      },
    {
      type: 'question',
      title: 'How is the new year treating you so far after such unprecedented times in 2020?',
      answer: "It's been quite busy actually but just because I've been preparing that video. Because I don't know how to make a video so I had to do a lot of learning on YouTube so i was doing that quite a lot.<br>\
        I do sort of,  like I act. So I was doing a couple of auditions, but it's not like...Basically I did a performance at Edinburgh Fringe in 2019 and then I got an acting agent at the beginning of 2020 because they saw the show and so they'd just send me auditions but I haven’t actually been in anything yet. I'm not very good at acting either hahaha, I'm just taking the opportunities as they come.<br>\
      Other than that, to be fair the lockdown - because i make all my stuff in my bedroom anyway and I'm quite regimented - it didn't affect me a huge amount but i think towards the end of the first ones I started getting a bit stir crazy so it was nice to have a bit of a break. I'm trying just to make sure 2021 starts right and I look up to myself."
    },
    {
      type: 'question',
      title: 'I understand that you are a Physics graduate from the University of Cambridge. Is that something you still pursue or are you fully transitioned into music now?',
      answer: "Yeah, I teach some children science and maths, so it kinda helps me in that way that I could always have a steady source of income from it. But it's not something...It really came from proving kind of a point that i wasn’t dumb do you know what I mean?<br>\
        I went to a normal state school in Hounslow and I wasn't really that type of student that would go there. I thought I wanted to do medicine at one point and there was such pushback in the past because of being a little bit of a troublesome student and I wasn't really into academics. \
        So they were like ‘you candid't get into medicine’, so I got really fixated on trying to prove that point wrong.<br>\
        So I think that whole journey of my life was like a detour that was based on me trying to be like ‘I can do whatever, it doesn't matter if you say I can't do it!’ So it's not something immediately I want to go any further down. I don't know, maybe if i'm like 60 I'll return to it but I don't know."
    },
    {
      type: 'question',
      title: 'What fueled your decision to make the transition?',
      answer: "I fell in love with music when i was 13 or something. I'm not gonna lie like that kind of age, that's when I learned to play guitar and I was playing in an indie rock band. I started writing songs and I think that's when it got my heart and then that's kind of what made the detour. So then when i finished I was like I have to give this a try in a serious way, so that's what it was really."
    },
    {
      type: 'question',
      title: 'Your most recent single ‘Mañana’ is quite the masterpiece. Can you talk about your experience working with Nina Cobham?',
      answer: "It was an absolute pleasure, It was lovely. We still work quite a lot actually. I think we've just got quite a very similar taste in music. We literally met because I did this freestyle that Koje Radical reposted and we got talking and since then we've just vibed a lot so we'd be sending each other music and she was down in London so we’d go to the studio. It was great, it was a very special kind of musical relationship I say with Nina."
    },
    {
      type: 'question',
      title: 'You wear many hats as an artist, producer, director & editor. You creatively produce most of your projects. How is that?',
      answer: "It's a lot of work! haha but at the same time I'm quite fixated on how I want it to be so I feel like it's very difficult for me to let go. Videos, I would like someone else to do but everything else I'm quite particular about how I want it to be so it's a lot of work but I also like working a lot anyway so it's kind of alright. I like it really, deep down."
    },
    {
      type: 'question',
      title: 'Tell us a little bit about your upcoming release, Movies.',
      answer: "Movies, yeah so this is a track I started to write I think in like September or something like that. I really like starting to write songs on the guitar so I was just messing around and I found these two chords that I really liked.<br>\
        Before I even wrote the hook, I'd put in that old movie sound ticking because it just had some kind of nostalgic feeling to it. And then I just started to write about how experiences I've had in the past, not as strong as betrayal but just like people doing your wrong, and the way you can go about processing those kinds of emotions, not in the most constructive way."
    },
    {
      type: 'question',
      title: 'What was the vision when you created the visuals for this track and can you touch on what the whole process of bringing it to life was like?',
      answer: "So my initial vision that i wanted to have was I wanted to recreate different movie scenes but obviously that was a little bit tricky.<br>\
        The opening scene is actually like a recreation of this scene from this film called knives out, I don't know if you've heard of it. It's like some kind of murder mystery film thats got Daniel Craig in it, it's sick! Because of obviously the lockdown, I was just at home watching a film on New Years Eve with my mom so then that was the film and it just gave me inspiration for it.<br>\
        It felt like a song that was in slow motion as well so that's why I wanted to present that. The visuals are more of just an accompaniment, something to look at that gets you into the vibe rather than something that's got a big vision behind it because obviously there’s circumstances to it.<br>\
        Just before the lockdown stuff was happening, I went down to Seven Sisters, which I just googled it and it looked quite pretty and it was 2 hours away so we drove down at sunrise and I was just trying to get shots and then put them together against how I felt they matched the song and that was it really."
    },
    {
      type: 'question',
      title: 'I noticed that you always have a cup of tea in your music videos, care to tell us what that is about?',
      answer: "I can't talk too much about the tea haha. There’s an element of mystery there because I think I've been quite enjoying - like I've had people with their theories  in my Dms about the tea and stuff like that so I can't share too much about the tea yet but it will come at some point."
    },
    {
      type: 'question',
      title: 'If you could collaborate with any artist right now, who would it be and why?',
      answer: "There's a couple that I'd like to work with. But I'd say recently I would love to work with Kojey Radical because the art he makes is so unique and I really see him as a pioneer for the UK in making something that's just so different so I'd love to work with him but it varies. I mean I'd like to work with Drake as well, they're different ends of the spectrum which is literally crazy but I'm such a huge fan so yeah. But I'd say Kojey..."
    },
    {
      type: 'question',
      title: "What's one thing about you that no one would expect?",
      answer: "Okay, I really like...ice skating, that's one of my favourite things"
      },
    ],
    footer_links: [
      {
        name: 'Purchase on Bandcamp here',
        url: 'https://xadi.bandcamp.com/track/movies'
      },
      {
        name: 'Follow Xadi',
        url: 'https://www.instagram.com/xadiboi/'
      },
      {
        name: 'Follow Lauryn Njeri',
        url: 'https://www.instagram.com/laurynlikethehills_/'
      }]
  },
  {
   type: "article",
    short_name: 'BLACK BANDCAMP MARCH PICKS: WASHINGTON DC',
    name: 'BLACK BANDCAMP MARCH PICKS: WASHINGTON DC',
    bandcamp_link: "",
    bandcamp_id: "",
    credit: null,
    author: null,
    date: '08/07/2020',
    illus: 'articles/march2021/march2021.jpg',
    top_desc: "For this month's Bandcamp Friday, we hit up creatives in Washington DC to find out who their top Black Bandcamp discoveries and picks of the month are.",
    links: [
    ],
    questions: [
      {
       type: 'bandcamp_picks',
       title: "James Bangura",
       description: "Hello, My name is James Bangura, and I’m a DJ and Producer residing in the city of Washington D.C. I also run a small label called PercussionFunctions.",
       links: [
        {
         title: "Brother Aten",
         description: "You Have Never Belonged EP | Track- Know Here<br><br>Brother Aten is an experimental artist who currently resides in Berlin. I’ve known Brother Aten for a few years now and he honestly never ceases to amaze me. The track “Know Here” is an example of this. I picked this track from his most recent project because it seems to catch the sort of melancholy but also has a groove  that makes you want to keep moving.",
         embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2119544160/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=882451521/transparent=true/" seamless><a href="https://brotheraten.bandcamp.com/album/you-have-never-belonged">You Have Never Belonged by Brother Aten</a></iframe>',
        },
        {
         title: "Corey King",
         description: "A Loveless Sunken Sun | Track- Fertility Filter<br><br>\
          Corey King is a singer-songwriter / Composer / Multi-Instrumentalist hailing from New York City. \
          I found Corey’s music just recently through BlackBandCamp and his track Fertility Filter\
          really drew me in. Having a background as a break dancer, this track took me back to simpler times. Not in the sense of the lyrics but with the composition itself. This is definitely something I have in constant rotation these days.",
         embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=631818444/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://corey-king.bandcamp.com/album/a-loveless-sunken-sun">A Loveless Sunken Sun by Corey King</a></iframe>',
        },
         {
         title: "Boofy",
         description: "EP – IMRV021_Boofy | Track – Ledge<br><br>\
         Boofy is a Dubstep Producer hailing from Bristol, UK. Dubstep is a genre that heavily influences my writing as a producer. The sparseness, the textures, the use of space, etc. This is an older release from Boofy but his track Ledge is definitely not a slouch and I guarantee it would flex some speakers to their limit. Boofy also maintains the legacy sound that hails from one of the cities that are considered one of the original hotspots for the genre.",
         embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2702607120/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3970736391/transparent=true/" seamless><a href="https://innamindrecordings.bandcamp.com/album/imrv021-boofy">IMRV021 - Boofy by Innamind Recordings</a></iframe>',
        },
       ]
      },
      {
       type: 'bandcamp_picks',
       title: "DJ Nativesun",
       description: "DJ Nativesun is a melodic archivist DJ and producer, co-host for Eaton Radio’s UNSEEN Radio : exploring underground cultural sounds locally and globally.",
       links: [
        {
         title: "Scratchclart & KG - Baga DMs",
         description: "This track automatically draws me in with it’s magical chords and chants in the background. Feels like this track is preparing me to step into some otherly world dance circle with my ancestors.",
         embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2058784746/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3642968912/transparent=true/" seamless><a href="https://scratchadva.bandcamp.com/album/baga-man">&amp; Baga Man by Scratchclart</a></iframe>',
        },
        {
         title: "Lokowat - Perdido No Amazonas",
         description: "When I hear this I just want to run into the club and play it just to see how hard the people dance. It makes me think of closing my eyes and sweating on the dance floor.",
         embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3981838614/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1613410831/transparent=true/" seamless><a href="https://devagar.bandcamp.com/album/dev-a-gar-vol-3">DEV.A.GAR VOL 3 by Devagar</a></iframe>',
        },
         {
         title: "The Impossible - JSPORT Edit",
         description: "I just feel like every DJ needs this! Never can you go wrong with a lush Mariah Carey edit like this one. Soon as the kick comes in you can’t help but get lost in this track.",
         embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=3971471155/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://jsport.bandcamp.com/track/the-impossible-jsport-edit">The Impossible - JSPORT Edit by JSPORT</a></iframe>',
        },
       ]
      },
      {
       type: 'bandcamp_picks',
       title: "Amal",
       description: "Peace, my name is Amal, I’m a musician and founder of HOCHIRUNS.",
       links: [
        {
         title: "JWords",
         description: "I wanted to start off by highlighting the prolific years Jwords has had. With 6 plus releases it was hard not to catch her music. JWords to me is a perfect example of modern day experimental hip hop music. From her duo with rapper Masaai to some ambient modular pieces you never know what to expect. I would recommend listening to her Sonic Liberation project, which is very reminiscent of early Klipmode / Ras G. Notable track being “Fed Up”.",
         embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3609189749/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://jwords.bandcamp.com/album/sonic-liberation">Sonic Liberation by JWords</a></iframe>',
        },
        {
         title: "ANKHLEJOHN",
         description: "There’s so many Ankhlejohn projects that it's almost hard to choose one. The Shaap Records founder “Drill Scott Heron” EP is a very classy approach to a gritty street sound. I really love the duality of this project. Much respect to Ankh for his beat selection. From John’s sly mafioso raps over gritty gliding 808’s. Notable track being “TELFAR””. Do make sure to check out Raheem Supreme and the rest of the “Shaap records” bandcamp below!",
         embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1866894663/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://shaaprecords.bandcamp.com/album/drill-scott-heron-pieces-hittin">DRILL SCOTT-HERON (PIECES HITTIN) by SHAAP RECORDS</a></iframe>',
        },
         {
         title: "Nappy Nappa",
         description: "Nappa, a longtime friend of mine, has been pushing the boundaries of experimental rap music for years now. I’ve never met anyone else who embodies the energy of our city.As  ½ of the duo Model Home with musician Pat Cain, Nappa’s raw vocal work on their project Model Home x Pure Rave reminds of block parties, Gogo’s and raves but in 2020. Notable song being. An intermediate arrangement of patterns and rhythmic sonic collage",
         embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3176549901/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://modelhomedc.bandcamp.com/album/model-home-x-pure-rave">Model Home x Pure Rave by model home</a></iframe>',
        },
       ]
      },
      {
       type: 'bandcamp_picks',
       title: "Djoser",
       description: "I’m a Producer/DJ based in Washington, DC and part of the L.E.N.G. collective, I’m also an artist under 3024.",
       links: [
        {
         title: "Loxy",
         description: "Loxy is one of my favorite Drum & Bass Producers/Djs. His massive catalog goes back to the late 90s. Still today he manages to produce quality tracks on his own and with collaborations with other artists like Resound, Ena, and Genotype. The track I picked from his latest release on Cylon Recordings (his label) titled “Singularity” is from a collaboration he did with Resound. The track is a fast pace energized work out that's sub bass and percussive heavy. One of my favorite elements in the track is the use of percussion in a melodic way, along with the breakdown which gives you a chance to breathe from the intensity of the track.",
         embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3095269354/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1633897576/transparent=true/" seamless><a href="https://cylonrecordings.bandcamp.com/album/loxy-resound-straight-1s-singularity">Loxy &amp; Resound -  Straight 1&#39;s / Singularity by Loxy &amp; Resound</a></iframe>',
        },
        {
         title: "E L U C I D",
         description: "The track I picked from New York rapper E L U C I D is from an album called “An Unknown Infinite” by AMANI + KING VISION ULTRA (out now on PTP). E L U C I D was the Featured artist in the track titled “Scrapes”. The only way I could interpret my feelings for this track is that it's a great winter track. The almost beatless instrumental in the background is very stripped back and warm sounding and it gives room for E L U C I D’s words that pierce through the track to create balance. This is a track that I always tend to listen to multiple times in the row.",
         embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3943499932/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1638935951/transparent=true/" seamless><a href="https://purpletapepedigree.bandcamp.com/album/an-unknown-infinite">An Unknown Infinite by AMANI + KING VISION ULTRA</a></iframe>',
        },
         {
         title: "Jossy Mistu",
         description: "Jossy Mistu is a phenomenal London based producer/Dj that I've been following for the past few years. Her Rinse FM show is one the few shows that I never miss, covering a wide spectrum of different sounds. The track I picked from her latest EP (out now on Astral black) is called “Ø “. The track is a perfect mixture of space and percussion, while also managing to add dark melodic elements throughout the track and deep sub bass to fill the void.",
         embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1310531337/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=4276734884/transparent=true/" seamless><a href="https://astralblack.bandcamp.com/album/planet-j">Planet J by Jossy Mitsu</a></iframe>',
        },
       ]
      },
      {
       type: 'bandcamp_picks',
       title: "soso tharpa",
       description: "Yo what’s up? I go by the name of soso tharpa and I make music based out of Washington D.C. Oh and I DJ sometimes ;).",
       links: [
        {
         title: "KMRU",
         description: "I was introduced to KMRU by a good friend of mine recently and my life hasn’t been the same since. I’ve sort of gone down a KMRU rabbit hole if you will. The track I chose is called “Degree of Change” from his Jar EP. This track is like putting on the most silkiest white robe while being fed Belgian chocolate, it’s that good. Then you have tracks like “Space of Uncertainty”; a track adorned with bells and texture that always leaves me entranced and begging for more. An overall very solid EP.",
         embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1944326644/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://seilrecords.bandcamp.com/album/jar">Jar by KMRU</a></iframe>',
        },
        {
         title: "Nazar",
         description: "For my second choice I chose the “Supplies EP” by Nazar; Pausado - good lord. I first stumbled upon this EP while stalking a friends Bandcamp and was completely blown away. Pausado is the literal definition of “go dumb” music that I really would like to hear in a club setting one day.",
         embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=538663836/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://nazar.bandcamp.com/album/supplies-ep">Supplies EP by Nazar</a></iframe>',
        },
         {
         title: "Tim Reaper",
         description: "Lastly we make our way to who I consider to be a shining light in the DnB/Jungle scene right now. Tim Reaper’s Hoover Sound EP is amazing. With an airy Shogun esque atmosphere coupled with drums that remind me of past greats like Remarc, Tim Reaper captured the essence of a drum and bass sound that I have loved for a long time. My favorite track has to be his remix of Special Request’s “Quiet Storm”. Whenever I listen to that song I close my eyes and become an old guy from London recounting the good old days of raving and proper pre’s - only to open my eyes and realize that I’m actually from Washington D.C. Highly recommended.",
         embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=220406601/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://hooversoundrecordings.bandcamp.com/album/hooversound-presents-special-request-x-tim-reaper">HOOVERSOUND PRESENTS: SPECIAL REQUEST X TIM REAPER by Special Request x Tim Reaper</a></iframe>',
        },
        ]
      }
    ]
  }
  ]))
  state.current = payload
 },
 set_current_by_id(state, payload) {
  state.list = JSON.parse(JSON.stringify([
  {
   type: "article",
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
     answer: 'I met Mike Banks in 2007 via De\'Sean Jones. The UR band, Galaxy 2 Galaxy, was looking for a keyboardist for a gig at the Montreux Jazz Fest and DeSean, who also recently met Banks at the time, mentioned my name. Mike calls me up one day and says, "If you want to travel the world playing music and get paid for it, stop by the building (Submerge) on Monday at 3 o\'clock. If not, get the f*ck on...are you down?” My immediate response, out of shock and somewhat fear, was “Yeah!" I show up Monday, ring the bell, and a man with cornrows (Mike) opens the door,takes me upstairs to the 2nd floor, and shows me a keyboard. Mike then said, "play something." I start playing who knows what and about 5 seconds later he says, "Cool, go downstairs, talk to the manager Cornelius about getting your passport. We leave for Switzerland in 2 weeks. Rehearsal starts tomorrow." The rest is history!'
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
     answer: '"When you care about an artform, the last thing you want to see, is it turned into something it wasn\'t meant to be. To avoid that from happening, you have to invest time and energy and educate those willing to listen and learn."'
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
   type: "article",
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
     answer: 'Blaqkongo and Mr Blasé have already released some of the music that was spawned by the project on the 19th June, which has quickly garnered a massive listenership, even gracing the 4th position in the best new Deep House, June, category on the Beatport platform. Blaqkongo has now decided to follow up with a Bonus Tracks EP via his label Blaqkongo Music on which features a rework of his lead single "Somethin\' Bout U" and an instrumental version of the deep and pensive "Always There."'
    },
    {
     type: 'question',
     answer: 'I had the honour of having a chat about how life has been for him during the social distancing era as well as his journey to creating "38 Daya 38 Ways".'
    },
    {
     type: 'question',
     answer: 'As a DJ and producer who gigs regularly, Blaqkongo shared a little on how his craft has been affected by the global COVID-19 pandemic. "<i>I organize quite a few events in Cape Town - individually and as part of a collective - so this time has been quite tough as this was our main revenue stream.</i>" However, he says "<i>It’s been interesting because whilst I’m not playing as frequently as I used to, beautiful new opportunities to network globally, get gigs, and work on music have become available. On top of that, the challenges that come with this time allow for growth and learning, and for that, I’m grateful.</i>"'
    },
    {
     type: 'question',
     answer: 'We further went on to discuss how the producer has been spending his days during South Africa\'s nationwide lockdown. Just as expected, blakqongo gave away that a typical day in his life would look a little something like "<i>Produce, DJ, produce, DJ, produce! Nah just messing around.</i>" He laughed. "<i>But the first 5-6 weeks of my lockdown did actually look like that. I did weekly livestreams where I would explore different vibes that I love, including stuff I don\'t usually play out - Jazz, Bossa Nova, Funk, Blues, Percussive Latin and African Music, RnB, Neo Soul amongst my regular stuff like Soulful and Deep House. I made 8 playlists for each week that I did the livestreams which you can find via my Spotify :)</i>"<br>As the neverending days went by however, he let us know "<i>Now, I just take every day as it comes - I wake up and meditate, read, and then just take each moment as it comes.</i>"'
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
     answer: 'The EP definitely lives up to blaqkongo’s expectations because when asked what one should expect with this delightful body of work he concurred with my experience by saying "<i>Love, light, joy and euphoria. No jokes, if you give yourself to the project, it’s a beautiful journey</i>". The talented producer was also sure to point out that "<i>The Bonus Tracks EP focuses on creating a re-imagined mood of the lead single from the original project and an instrumental mix of a song called Always There, also from the original EP. My suggestion would be to play the OG EP and then go straight into the Bonus Tracks.</i>"'
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
     answer: 'While COVID has wreaked havoc in the daily routines and livelihood of many, it is refreshing to hear how these two artists have managed to sidestep some of the sombreness around this period to deliver two releases that breathe new life into the electronic music scene. Awash with low slung grooviness, lush synth work and nimble use of vocal samples, each track on this EP will no doubt find fans among those followers of such groove luminaries as DetroitSwindle, Atjazz and Joe Kay, to name a few.'
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
   type: "article",
   short_name: 'JOSH CAFFÉ TALKS COLLABORATING WITH HONEY DIJON',
   name: 'JOSH CAFFÉ TALKS COLLABORATING WITH HONEY DIJON',
   bandcamp_link: "https://honeydijon.bandcamp.com/album/la-femme-fantastique-extended-mix",
   bandcamp_id: "2265069030",
   credit_illu: 'Crystal Mioner',
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
     answer: 'Pretty easy, considering we were on different sides of the world. I recorded my vocals in London and we sent stuff back and forth over email. Once we spoke about the idea for the track it was a really easy process for me to write too, I loved the beat and wanted to imagine this kind of superheroine with the lyrics, hence the title. The studio sessions were pretty quick too, that\'s how we roll :-)'
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
  },
  {
   type: "article",
   short_name: 'BLACK BANDCAMP SEPTEMBER PICKS: LONDON',
   name: 'BLACK BANDCAMP SEPTEMBER PICKS: LONDON',
   bandcamp_link: "",
   bandcamp_id: "",
   credit: null,
   author: null,
   date: '08/07/2020',
   illus: 'articles/sept2020/sept2020.jpg',
   top_desc: "For this month’s Bandcamp Friday, our co-founder NIKS has reached out to her trusted fellow London selectors, to find out who their top Black Band Camp discoveries and picks of the month are.",
   links: [
   ],
   questions: [
    {
     type: 'bandcamp_picks',
     title: 'DJ Winggold',
     description: 'Founder of <a href="https://www.instagram.com/unboundevents/" target="_blank">Unbound Events</a>, an events platform pushing equality and raising awareness of social issues.',
     links: [
      {
       title: 'Afriqua',
       description: 'Kinda cheating here since I knew about him before Black Band Camp launched but he\'s super talented. He really nails the airy, melodic Afrofuturist vibe whilst keeping things funky. His album on R&S is a serious vibe',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2226738195/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1151574225/transparent=true/" seamless><a href="http://afriqua.bandcamp.com/album/colored">Colored by Afriqua</a></iframe>',
      },
      {
       title: 'Escaflowne',
       description: 'Stumbled on them while scrolling through the Black Band Camp’s \'Techno\' selections. I love the genre classifications on Black Band Camp as it\'s so easy to stumble on something new. I\'m a big fan of the soulful controlled rhythmic weirdness that Escaflowne\'s making.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=4252785561/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1720586635/transparent=true/" seamless><a href="http://escaflowne.bandcamp.com/album/steel-ep">Steel EP by Escaflowne</a></iframe>',
      },
      {
       title: 'Dele Sosimi',
       description: 'One of Fela Kuti\'s old collaborators!! He really nails the laid back Afrobeat grooves that Fela pioneered while keeping the lineage of conscious, uncompromising lyrics.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=631756506/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://delesosimi.bandcamp.com/album/you-no-fit-touch-am">You No Fit Touch Am by Dele Sosimi</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Eliza Rose',
     description: 'I’m a long time record enthusiast, singer, <a href="https://www.instagram.com/rhythm_sister/" target="_blank">Rhythm Sister</a> member with a weekly Rinse FM and monthly Balamii show. Lover of anything with soul.',
     links: [
      {
       title: 'Honey Dijon ft Josh Caffe',
       description: 'The Queen and the King on collaboration duties. Both are icons and the track is an instant Classique.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2265069030/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://honeydijon.bandcamp.com/album/la-femme-fantastique-extended-mix">La Femme Fantastique (Extended Mix) by Honey Dijon featuring Josh Caffe</a></iframe>'
      },
      {
       title: 'ANZ',
       description: 'An amazing producer and very inspirational. I LOVE this track, it makes me feel like an alien robot in New York in the late 80s.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2440068854/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://anzdj.bandcamp.com/album/invitation-2-dance">Invitation 2 Dance by Anz</a></iframe>'
      },
      {
       title: 'Tim Reaper',
       description: 'Whilst jungle is not something I play out a lot, I do still buy bits. I love it and I think Tim Reaper seamlessly compliments his jungle with soul. Feels proper old school.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=573351339/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://timreaper.bandcamp.com/album/pony-fridge-magnets">Pony / Fridge Magnets by Tim Reaper</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Helena Star',
     description: 'My name is Helena Star, I am a selector and presenter who promotes and shares the love of house and techno across London and on my bi-monthly radio show on <a href="https://foundation.fm/people/helena-star/2" target="_blank">Foundation FM</a>.',
     links: [
      {
       title: 'Delroy Edwards',
       description: 'I stumbled across this EP on Black Band Camp mainly because I was intrigued by the cover (like most of my finds tbh) and was even more intrigued when I hit play, hearing these bare, head hitting hi-hats that got me so excited. One track that I can just imagine losing my sh*t to in the club is \'Nitemare House\' - I feel like there is a sneaky bassline in there that needs a fat system to set it free!',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1313070075/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://liesrecords.bandcamp.com/album/slap-happy">Slap Happy by Delroy Edwards</a></iframe>'
      },
      {
       title: 'Kenny Larkin',
       description: 'A \'house\'-hold name and amazing producer whose catelogue I hadn\'t looked much into on Bandcamp, but when stumbling across his name on Black Band Camp, having a listen to \'Keys, Strings and Tambourines\' was such a joy. An album that came out 8 years ago in 2012 and still feels fresh and exciting - you can understand why his style has been so influential to many, myself included. Stand out track for me was \'You Are\'',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1592495196/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1936042545/transparent=true/" seamless><a href="http://kennylarkin.bandcamp.com/album/keys-strings-tambourines">Keys, Strings, Tambourines by Kenny Larkin</a></iframe>'
      },
      {
       title: 'Space Ghost',
       description: 'I cannot explain how excited I was listening to the new release, I don\'t think I have hit download so fast in ages. \'Time to Dance\' as an entire EP has blown me away, but the single I will be playing out at every set for the next year that\'s for certain. Obsessed.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3217669814/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1745390047/transparent=true/" seamless><a href="http://space-ghost.bandcamp.com/album/time-to-dance">Time To Dance by Space Ghost</a></iframe>',
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'internationalJOE',
     description: 'All round selector whose only real goal behind the decks is to get and keep the people dancing. I organize raves and DJ mentoring workshops in London with The <a href="https://www.instagram.com/os_community" target="_blank">OS Community</a>.',
     links: [
      {
       title: 'Martyn Bootyspoon',
       description: 'A friend recommended that I listen to the new ‘Lickity Split’ EP. My favorite track was Resonant Freq - The track reminds me of old school grime tracks I grew up listening to from the likes of Lethal B and Dizzie Rascal. The whole track is infectious and gets you bouncing and on your feet from the onset.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2647734678/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3274972274/transparent=true/" seamless><a href="http://martynbootyspoon.bandcamp.com/album/lickety-split">Lickety Split by Martyn Bootyspoon</a></iframe>',
      },
      {
       title: 'DJ Nativesun',
       description: 'I discovered this track and the artist while listening to Haus of Altr 011. Immediately I recognized the Mos Def ‘No Panties’ sample used. It was also released during the BLM protests that were happening over the summer. The message repeated during the track is to relax, and I must say the track has helped me to feel relaxed and at ease while dealing with the horrific injustices Black people are going through worldwide.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1268537946/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3096470586/transparent=true/" seamless><a href="http://hausofaltr.bandcamp.com/album/hoa011">HOA011 by Dj Nativesun</a></iframe>',
      },
      {
       title: 'Galcher Lustwerk',
       description: 'I had previously heard and played a few tracks by Galcher Lustwerk, but it wasn\'t until I heard the track \'Retire\' on the Haus of Altr 10 release that I decided to dig further into his collection of tracks. I especially love how he talks/raps on several of his works giving the listener another layer to enjoy.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1435999462/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=4059670016/transparent=true/" seamless><a href="http://hausofaltr.bandcamp.com/album/hoa010">HOA010 by Galcher Lustwerk</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Mr. Redley',
     description: 'I\'m a DJ and presenter from North London. I generally lean towards Detroit/Chicago House in my sets, but always see where the night takes me. I also work as label supervisor for Steven Julien\'s <a href="https://www.instagram.com/apronrecords/?hl=en" target="_blank">Apron Records</a>.',
     links: [
      {
       title: 'Huey Mnemonic',
       description: 'I was scrolling through the Detroit section of the website and this guy\'s productions instantly caught my ear. That sultry tremolo\'d synth with those sharp jacking drums...just how I like it!',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=332277003/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://hueymnemonic.bandcamp.com/album/joyous-occasion">Joyous Occasion by Huey Mnemonic</a></iframe>'
      },
      {
       title: 'J. Bevin',
       description: 'I\'ve never heard of J. Bevin, but my oh my I\'m all about this kinda sound. Deep grooving house, and he\'s from right here in London. What\'s not to like?',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3913003954/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1364628936/transparent=true/" seamless><a href="http://jbevin.bandcamp.com/album/tint-tone-ep">Tint &amp; Tone EP by J.Bevin</a></iframe>'
      },
      {
       title: 'Urban Tribe',
       description: 'I felt a bit silly that I hadn\'t heard of this group. Coming out of Detroit in the 1990s with former members including Kenny Dixon, Carl Craig and Shake Shakir. I think \'Syncophant\' is my favourite. Making you feel like you\'re underwater staring up at the sun...',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3789082051/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1705368593/transparent=true/" seamless><a href="http://urbantribe.bandcamp.com/album/loyal-opposition">Loyal Opposition by Urban Tribe</a></iframe>'
      },
      {
       title: 'Blixaboy',
       description: 'Dark, driving, and dirty. I was flicking through the electro section and Blixaboy immediately captured my ears. Makes me want to be in a dark room with some big ol\' speakers.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3311559997/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=912334242/transparent=true/" seamless><a href="http://stereoonstrike.bandcamp.com/album/azanian-funk">Azanian Funk by Blixaboy</a></iframe>'
      },
      {
       title: 'Black Cadmium',
       description: 'Simply put, \'Stairway\' reminds me of Terrence Dixon\'s \'The Parkhurst\'. I\'m all about that. Again, I stumbled across these duo searching through the Electro section of BBC.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1118391730/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3927587844/transparent=true/" seamless><a href="http://vaultwax.bandcamp.com/album/muted-chaos-ep">Muted Chaos EP by Black Cadmium</a></iframe>'
      },
      {
       title: 'Simba',
       description: 'This guy is effortless pulling together these dubs. Can’t go wrong really. I found him under the \'house\' tab on Black Band Camp funnily enough. Club cuts of some of the finest funk and disco.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1996097601/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=330549788/transparent=true/" seamless><a href="http://simbaselecta.bandcamp.com/album/stashbox-goodies-3">STASHBOX GOODIES 3 by simba</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'OK Williams',
     description: 'Hi, I\'m OK Williams and I (used to) bring vibes to London dancefloors and host a monthly radio show on <a href="https://www.nts.live/shows/ok-williams" target="_blank">NTS</a>.',
     links: [
      {
       title: 'Cyberia',
       description: 'My first selection are Cyberia, a duo from Atlanta. I found them on the Black Band Camp website just browsing genres and really liked the track \'Distant Messenger\'.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1109812344/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1296590890/transparent=true/" seamless><a href="http://cyberiaworld.bandcamp.com/album/distant-signal-physical-aid-pack">Distant Signal (Physical Aid Pack) by CYBERIA</a></iframe>'
      },
      {
       title: 'Rimarkable',
       description: 'Next is Rimarkable from Detroit with the track \'I\'m in Trouble\', a killer house tune with a very sassy vocal. Another artist I found scrolling through the site looking for womxn producers.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3370506159/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://rimarkable.bandcamp.com/album/im-in-trouble">I&#39;m In Trouble by Rimarkable</a></iframe>'
      },
      {
       title: 'RHR',
       description: 'Another artist is RHR from Brazil, with "electro, baile funk and favela roots". Favourite track is \'Maloca\'.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3202389260/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=2348372538/transparent=true/" seamless><a href="http://gowpe.bandcamp.com/album/maloca">Maloca by RHR</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Ross',
     description: 'I am part of <a href="https://www.instagram.com/coopaudio/?hl=en" target="_blank">Coop Audio</a> which is a non-profit collective originally born in Bristol but now functioning out of London. I host our monthly radio show on Threads radio with my partner where we go by "Couples Therapy".',
     links: [
      {
       title: 'T. Williams',
       description: 'Found this tune using the filters on top of Black Band Camp. Kept it \'London\' and \'House\' and we got a big big tune. Pure bass heavy jam clearly designed for the club to get everyone\'s faces scrunched up. Just the type of tune I like to play on our radio show to warm people up before they head out for the night.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=1132097993/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://twilliamsmusic.bandcamp.com/track/be-alone">Be Alone by T.Williams</a></iframe>'
      },
      {
       title: 'Scuffed Presents 004',
       description: 'I discovered this label on Black Band Camp and I’m glad I did because this release is full to the brim of interesting left of centre club music, breaks, 2-step and everything in between. Stand out track for me is the A1 with it\'s pure gun finger vibes! Would sound insane on a good system.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2666486115/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://scuffedrecs.bandcamp.com/album/scuffed-presents-004">Scuffed Presents 004 by Various Artists</a></iframe>',
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'T-Dunn',
     description: 'I’m a DJ from West London and run vinyl label <a href="https://www.timehri.world/about" target="_blank">Timehri</a> pushing underground electronic music.',
     links: [
      {
       title: 'James Bangura',
       description: 'I was trawling through some stuff late at night and James\' stuff really stood out. It struck a chord with my mood at the time and I just remember thinking like rah how have I never heard of this guy? Been following him ever since. Every track on his latest EP All Smoke No Mirrors is proper.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1450596680/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://jamesbangura.bandcamp.com/album/all-smoke-no-mirrors-ep">All Smoke No Mirrors EP by JamesBangura</a></iframe>'
      },
      {
       title: 'Ariwa (Label)',
       description: 'Absolute big boy label. Had no idea they were on Bandcamp! Fave tune has gotta be ‘Aisha - Jah Vengance’. She murdered that riddim. There\'s so much stuff on there so anybody into dub/reggae should spend some time digging through their catalogue. Serious waves.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=186212718/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://sisteraisha.bandcamp.com/album/the-first-lady-of-dub">The First Lady Of Dub by Aisha</a></iframe>'
      },
      {
       title: 'Korrē',
       description: 'The way this guy draws inspiration for his tracks is mad. I spent the whole evening trying to find out if he\'d made anything more, going through his Soundcloud and stuff. Excited to see what else he\'s got. Everything on this is special but silver is the one for me.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2400214373/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://korre.bandcamp.com/album/cathexis-sessions-vol-1">Cathexis Sessions Vol.1 by Korrē</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'The Baker',
     description: 'London based promoter, selector, writer and former label manager. Have worked with various brands and venues such as Origins, Tuckshop, Micks Garage and NT\'s Loft.',
     links: [
      {
       title: 'Evan Baggs',
       description: 'I\'ve known about Evan Baggs for a little while now and he\'s someone I truly admire so I feel its best I start with him. When scrolling through the genre selections, I had to click on the customary \'techno\' tab, hence finding Man like Evan, as I like to call him. Originating from America, living in Europe, pioneering a sound that is still seen as somewhat \'underground\' - all of which is for crowds and audiences that severely lack and racial diversity in all aspects, is something that I don\'t think many people understand. A POC in some of these eastern states is a true testament to his strength. Really like this track \'As It Stands\', nice mixture of galactic space top line elements and a fulfilling groove laden bass line.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3896250958/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1742139497/transparent=true/" seamless><a href="http://parttrec.bandcamp.com/album/201-new-langage-ep">2.01 New Langage EP by Evan Baggs</a></iframe>'
      },
      {
       title: 'Millia Rage',
       description: 'Again trawling through the \'techno\' section was draw to the striking name. Really liked this track \'Half-Loiner\' with its euphoric tinged begging leading into an energetic breakbeat closing. Nice to hear this sound design coming from America.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=184602861/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://milliarage.bandcamp.com/track/half-loiner">Half-Loiner by Millia Rage</a></iframe>'
      },
      {
       title: 'Veda Black',
       description: 'They say soul music cures the soul, so during lockdown I\'ve been continuing to expand my horizons with this amazing genre to help my soul, you could say. While flicking through the \'R&B/soul\' selection, I came across Veda Black and her \'Sad Girls Club\' Album. The whole thing is amazing, but my pick has to be \'Serious\'. Its powerful lyrics over that guitar and piano has me transporting between a 2020 and 1980s/1990s soul fusion paradigm.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=557015143/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3582788796/transparent=true/" seamless><a href="http://vedablack.bandcamp.com/album/sad-girls-club-2">Sad Girls Club by VEDA BLACK</a></iframe>'
      }
     ]
    },
   ]
  },
  {
   type: "article",
   short_name: 'PREMIERE: A DYNAMIC DOUBLE PACK FROM HLX-1',
   name: 'PREMIERE: A DYNAMIC DOUBLE PACK FROM HLX-1',
   credit: null,
   author: 'Crystal Mioner',
   illus: 'articles/hlx1/hlx1.png',
   credit_illu: 'Crystal Mioner',
   date: '08/07/2020',
   introduction: 'Just in time for labor day, HLX-1 give us the duality of Detroit techno, meeting somewhere between ghettotech and hi-tech jazz. The untitled two track teaser, a joint venture from Underground and Black\'s The AM and SCAN 7\'s Mr. Hooper, features the raunchy and raw \'I Can Tell You Can F***\' and \'The Cosmos\', a slowed down trip through time and space. Informed by The AM\'s experience as a 90\'s raver and Mr Hooper\'s technical skills honed over the past 6 years with the mysterious SCAN 7, the tracks are a taste of an EP coming later this year.<br><br> \
   Since moving back to Detroit from Miami last year, The AM has been trying to find a semblance of the energetic culture she remembers from coming of age in warehouse parties around the city.<br><br> \
   "I\'m determined to bring the energy back", she exclaims when I ask her about the duo\'s hopes. "I didn’t know anything about music and it was just me and my sister (Ash Lauryn) losing ourselves. Detroit needs that, that ability to just have fun."<br><br>\
   This is Mr Hooper’s first release outside of the Scan 7 umbrella. While not new to the game, he\'s making a new name for himself by "looking forward and creating a fresh and futuristic vibe."<br><br>\
   The two tracks are available now on <a href="https://hlx-1.bandcamp.com/" target="_blank">Bandcamp</a>.',
   embed_links: [
    '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=3846929570/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://hlx-1.bandcamp.com/track/the-cosmos">THE COSMOS by HLX-1</a></iframe>',
    '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=1858466569/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://hlx-1.bandcamp.com/track/i-can-tell-you-can-f">I CAN TELL YOU CAN F*** by HLX-1</a></iframe>'
   ]
  },
  {
   type: "article",
   short_name: 'LOVE IS BLUE: FINDING WARMTH IN AHYA SIMONE\'S FROSTBITE',
   name: 'LOVE IS BLUE: FINDING WARMTH IN AHYA SIMONE\'S FROSTBITE',
   author: 'Crystal Mioner',
   illus: 'articles/ahyasimone/ahyasimone.jpg',
   credit_illu: 'Jayne Lies',
   date: '08/07/2020',
   introduction: '',
   questions: [
    {
     type: 'question',
     title: '',
     answer: 'We\'re locked in a dream state, a version of Detroit that’s real and unreal, and what Ahya Simone describes as "an iridescent reality". Blue tinges everything, blurring the sky and the mouths of Ahya and her friends, fellow artists <a href="https://www.instagram.com/supercoolwicked/?hl=en" target="_blank">Supercoolwicked</a> and <a href="https://www.instagram.com/kesswa_/?hl=en" target="_blank">Kesswa</a>. The forthcoming video for Frostbite, directed by Jayne Lies, provides an experimental slant to the spaces created with the homegirls versus the space we inhabit alone. In this, her debut single and subsequent video release made by the audiovisual label <a href="https://www.instagram.com/pique.records/" target="_blank">Pique</a>, Ahya finds her release from the confines of isolation.'
    },
    {
     type: 'question',
     title: '',
     answer: 'Frostbite was written three years ago after a period of personal trauma that Ahya remembers being full of days spent in bed. "Frostbite came around as a way to speak to that feeling of isolation, when you don’t feel like you have people who care about you, or the people who care about you are out of your life," she says. It was after the death of two of her aunts, the end of a job, and her first time living alone that Ahya gave voice to the process of change and heartbreak.'
    },
    {
     type: 'question',
     title: '',
     answer: 'The song begins with a tender progression of notes, before Ahya’s delicate mezzo-soprano fills the room, reverberating in time with twinkling bursts from her harp. It’s grounded by the initial progression but Ahya isn’t afraid to experiment with different effects, a key reason for her stepping away from the path of traditional harp players, confined to an orchestral pit. "I wanted to play R&B music and experimental music, things I listen to in real life. I wanted to do something that felt more like ME," she expresses.'
    },
    {
     type: 'question',
     title: '',
     answer: 'After graduating from Wayne State in 2015, Ahya took a hiatus from playing harp to reflect on her path. Her time in college, while giving her the ability to sharpen her technical skills, took a toll on her mental health and triggered a dysphoria around her first instrument: her voice. She initially pursued music to sharpen her vocal skills, but was dissuaded by instructors who were too nervous to work with her shifting vocal range as she navigated her transition.'
    },
    {
     type: 'question',
     title: '',
     answer: 'She took guidance from multiple musical visionaries, namely fellow black women from Detroit: Alice Coltrane and Dorothy Ashby. Their willingness to make their own route in jazz - Ashby at a time when harp wasn’t seen as a credible instrument in the genre and Coltrane carving a path for herself outside of her husband’s legacy - influenced Ahya’s ideas of what it means to be a non-traditional harpist. Later, she stumbled upon Brandee Younger, a harpist who blends soul, funk and jazz, reminiscent to Ahya’s own musical upbringing.'
    },
    {
     type: 'question',
     title: '',
     answer: 'The concert grand harp, Ahya’s tool of choice, is a big instrument averaging a height of 6 feet with a width of 3 feet. Ahya says the size, rather than limiting her ability to play anywhere, has allowed her to go where she fits. "If I don’t fit, I don’t fit," she explains defiantly. "Part of it is the physicality of my instrument. But my instrument also creates boundaries for me. You have to make space for me." She applies this philosophy to performances, letting opportunities flow organically to her gravitational pull.'
    },
    {
     type: 'question',
     title: '',
     answer: 'Over the past few years, Ahya has drawn abundance to herself. While still navigating her signature sound, she has stacked performances globally, ranging from local Detroit clubs, to experimental festivals with artists such as Juliana Huxtable, Martha Reeves and the Vandelles, Tunde Olanarian, and Esperanza Spalding. In 2018, she landed a place on "Take Me a_Part, the Remixes", the critically acclaimed remix album by dance music artist Kelela'
    },
    {
     type: 'question',
     title: '',
     answer: 'In addition to her work as a musician, Ahya is a cultural worker hoping to advance the arts and cultural output of the Black LGBTQ+ community in Detroit. Her work with <a href="https://fqchronicles.com/" target="_blank">Femme Queen Chronicles</a>, a webseries following the lives of four Black trans women in Detroit, has achieved national acclaim on the film festival circuit. Rather than falling into the limiting position of being a voice for Black trans women, she\'s working to empower her community to find their own voices. In the hypermasculine musical landscape of Detroit, these efforts are sorely needed to give balance but are given little funding.'
    },
    {
     type: 'question',
     title: '',
     answer: 'With all of her personal accomplishments, she states how much capitalism has made her ability to focus on her work challenging. During our interview she was in New Mexico for vacation but still working on grant applications to finance her art. "It\'s the grind that takes away from me and feeling like I always have to perform to make money and to make art," she explains. With proper stability and financial support, you can only imagine the impact Ahya’s imaginative music will make on the Black canon.'
    },
    {
     type: 'question',
     title: '',
     answer: 'Ahya is currently crowdfunding for a new harp. You can donate <a href="https://www.gofundme.com/f/ahya039s-harp-fund" target="_blank">here</a>.'
    },

    {
     type: 'question',
     title: '',
     answer: 'Look out for the full \'Frostbite\' video dropping next week. Single available for purchase now on <a href="https://ahyasimone.bandcamp.com/track/frostbite" target="_blank">Bandcamp</a>.'
    }
   ],
   embed_links: [
    '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=479447337/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://ahyasimone.bandcamp.com/track/frostbite">Frostbite by AHYA SIMONE</a></iframe>'
   ]
  },
  {
   type: "article",
   short_name: 'BAKHITA REFLECTS ON HER MAGICAL EP \'CHAMO MILE:PYE\'',
   name: 'BAKHITA REFLECTS ON HER MAGICAL EP \'CHAMO MILE:PYE\'',
   bandcamp_link: "https://bakhita.bandcamp.com/album/chamo-mile-pye",
   bandcamp_id: "1733537500",
   credit: '',
   credit_illu: 'Nala',
   author: 'Lauryn Njeri',
   date: '07/31/2020',
   illus: 'articles/bakhita/bakhita.jpg',
   introduction: "Dabbling heavily in neo jazz and alternative soul, Bakhita is a recording, performing and visual artist reigning from the buzzing city of Nairobi, Kenya. This Friday 11th of September, the multifaceted artist releases '<b>Chamo Mile:PYE</b>', a 7-track EP that showcases her honeyed vocals and spiritually elevating penmanship intertwined with fun, lively beats and electrifying bass.<br><br>Black Band Camp had a chat with Bakhita to get some insight on her journey of creating meaningful spaces as she navigates Nairobi's dynamic creative scene as a queer, alternative artist.",
   links: [],
   questions: [
    {
     type: 'question',
     title: 'How has 2020 been for you so far?',
     answer: 'I feel like I started 2020 already having set my mind to conquer the things that were preventing me from putting out work and creative input and all of that stuff. I started 2020 saying "this year I\'m going to take charge, take control", and as much as it has been very unexpected and full of ups and downs from our social dynamic and economic spaces, it\'s been great, it\'s really been great.<br><br>Honestly I\'m most appreciative of quarantine, because it\'s given up-and-coming artists a lot of time to put out our work. Now we\'re able to represent ourselves and not wait to be given gigs, because there\'s no work like that right now so we’re literally able to promote ourselves and have more people listen to us. So 2020 has been great because it opened doors and kind of alleviated the gatekeeping that has been present in the Nairobi art industry.',
    },
    {
     type: 'question',
     title: 'Let\'s get right into the music - how does the title of the EP reflect your journey to creating \'Chamo Mile\'?',
     answer: 'Wow! ‘Chamo Mile’ is something that I\'ve been contemplating and putting together unconsciously for some time. The title is a reflection of me, and how I’ve had to work towards certain things and even had to hide sometimes or disguise myself to be able maneuver this industry and get recognition or support. So this is kind of an ode to all of the sacrifices I\'ve had to make, and a celebration of me being able to now disguise myself from the evil while still staying true to me. Chamo means to hide in plain sight, camouflage my essence so that I can protect it from evildoers and leeches and all of that.<br><br>The title also reflects the entire journey of the creation of the songs. I started the songwriting process with ‘Upstairs’, ‘Funk’ and ‘Most Days’ before quarantine began. Already by that time I was exhausted by how our industry makes us feel; how people assume to know us without taking the time to get to know us, and then try to project their assumptions of us as our reality which is crazy to me. I was in a space where I had to camouflage myself from people around me, from people in the industry and just recuperate and take time.<br><br>I also struggled a lot with mental health issues so \'Chamo Mile\' is an appreciation for the fact that I had to build and grow from a space of complete loneliness and sadness, as well as a celebration that I\'m able to be here fighting.<br><br>The other reason I wanted \'chamo\' and \'mile\' is that it\'s a reminder that it\'s a continuous fight. We’re all in constant motion, growing and changing. I\'m always finding ways to be better and I felt ‘Chamo Mile’ is a reflection of everything that\'s happened until now and I\'m appreciative to be able to share this with everyone.'
    },
    {
     type: 'question',
     title: 'Where do you draw your inspirations and musical influences from?',
     answer: 'This is a question that has always been difficult for me to answer, mostly because I draw a lot of my musical inspiration from things that aren\'t necessarily tangible - such as nature and the different sounds that we hear, the different movements and weather changes, or the moon and how we observe different astro events and how I believe they affect us. I get a lot of inspiration from things building around that.<br><br>Aside from nature and even animals, I get inspiration from my interactions with people. It could be something as easy as a conversation. If I feel like it\'s a conversation that has been echoing in my mind for some time and I wasn\'t able to really pinpoint, I find myself sitting and writing a song about that thought and it\'s really magical.<br><br>My biggest influence in making music has been my mental health. My ability to create has been very much affected by how well I am doing mentally, so it\'s taken a lot of reflection, shadow work and trauma work to uncover whatever sadness has been clouding my mind.<br><br>The artists that surround me are also a major motivation. I find that I really enjoy listening to music that hasn\'t been tainted by the mainstream media. I get inspired by listening to other artists who put their entire hearts into their music, and I feel a lot of that from unpopular music and artists around me who are also up-and-coming. They inspire me a lot because they give me a lot of faith in the universal consciousness. I always find out that we kind of have a similar message behind what we talk about, which is very encouraging and magical to experience.'
    },
    {
     type: 'quote',
     answer: '"We\'re all in constant motion, growing and changing. So I\'m always finding ways to be better, and I felt \'Chamo Mile\' is a reflection of everything that\'s happened until now and I\'m appreciative to be able to share this with everyone."'
    },
    {
     type: 'question',
     title: 'Can you walk me through your experience creating this body of work?',
     answer: 'Honestly it\'s been so magical. It\'s felt like a dream, but a waking dream. Everything has flowed so easily and smoothly. Everything aligned when it needed to align, and things failed when they needed to fail to give me time to rebuild on that failure. So, wow! It\'s been such a magical process.<br><br>\'Chamo Mile\' isn\'t just an audio project, it\'s also a body of visuals, both video and fine art. The journey began from the painting that you now see on the cover art. I knew that I needed to be in this space of isolation, growth and wanting to rebuild and protect myself from being eaten by the outside world. Granting myself that space, and then being given the space to express that through quarantine, just makes me lost for words at how much magic this process has been.<br><br>Putting it out and sharing it with everyone I\'d say is the most stressful part that I\'ve experienced thus far, because I now have to consider everyone else. Otherwise it\'s been so much passion and happiness on my end from the people who have supported me on this journey.<br><br>Working with the producer, Lemi, who I\'ve been working with for a very long time made it seem like second nature. Even in creating the visuals, all the people I worked with, I\'ve worked with before and it has been so magical and uplifting.<br><br>As an artist, through it I\'ve grown. I\'m able to understand myself better, know my limitations, my expectations and express them properly without getting sad when things don\'t go right, or offended when people don\'t see my vision. It\'s also been such a humbling process allowing myself to let go, as well as forcing myself to let go - wow! I wish I could always be in the creation stage of things. Creating things is always such a beautiful experience for me and this has been my favourite project yet.'
    },
    {
     type: 'image',
     path: 'articles/bakhita/bakhita2.jpg'
    },
    {
     type: 'question',
     title: 'How is it navigating as a queer artist in the Nairobi art space?',
     answer: 'Hmm, I\'d say it\'s... interesting. Sometimes it\'s amazing because you get to meet and interact with more queer people which is always great. I don\'t think I\'d ever have gotten as much exposure to queerness if not through the art scene and getting to meet all these creatives.<br><br>Sometimes it\'s intoxicating because of how queerness has been sexualised in the entertainment industry. A lot of the time, you\'ll find your sexuality is glorified or wanting to be used for promotion of something, which is exhausting. It gives this false illusion of what queerness is. Queerness is so much more than just sex and I personally dont think the focus should be on the sexual aspect alone.<br><br>Things like this have made navigating life as a queer artist in Nairobi a little tricky. As it is, the entertainment industry demands a lot of sexualisation from women especially, so there is a lot of expectation for you to present yourself sexually having all of these interactions with different women or men.<br><br>Another very frustrating aspect is the misunderstanding of different queer terms. Seeing people living the trans experience not gain the kind of respect that someone else who is cis or bisexual would is so crazy. I\'m really grateful for the people that I\'ve met who have built me along the way and taught me to have patience, love and faith in the queer community which I\'m grateful for having found.'
    },
    {
     type: 'question',
     title: "How are you able to balance creative freedom and experimentation with the pressure to make 'hits' especially as an upcoming artist?",
     answer: "It's such a gut wrenching process honestly. Writing music and not knowing whether people will resonate with it or if it will be liked or even supported at all, is so overwhelming and so full of anxiety. I struggle with anxiety and paranoia so it comes in waves of uncertainty and self-doubt, but I'd say that this year I've been able to balance this a lot better. I'm aware when I'm creating for myself and I allow myself to experiment more. That way I'm not judging myself, I just give myself the space to be and to create whatever it is that I want to.<br><br>Especially now in 2020, I've gotten into a lot of production. I've played piano for 15 years but I’d never found a way to integrate it into my production because I was afraid of the experimental stage of doing things because I wanted to make 'hits'. But when you’re doing it for yourself, you give yourself a lot more space to experiment because you’re not putting that pressure on yourself - and even if you are, it's to learn rather than to tear yourself down.<br><br>Also, understanding the language that I have with myself has given me the space to balance creative freedom and experimentation. Otherwise you do have to be conscious and aware of the implications of what it is that you are creating and it has to be in a way that people are ready to accept the information. There is a lot of pressure to make what you are putting out palatable, but it shouldn't prevent us from being and creating art.<br><br>Another way I've been able to strike this balance is by simply sitting on projects. I will sit on something until I feel like it's great so that even if I release it and it doesn't catch on as a hit, I still know that I've done the best that I’m able to. This has really helped me because I know when to let go and say \"yeah this sounds good as it is\" or when to say \"no, this still needs some time\". It doesn’t give me as much pressure."
    },
    {
     type: 'question',
     title: "What role do you think your immediate society can play to enable artists like yourself to have a bigger platform?",
     answer: "For one, just sharing our work. People would be surprised but a repost, retweet or a share of a body of work is so powerful because the people around you see it and that causes a ripple effect. It's how the artists who are now ‘big leagues’ got established. I think a big part of it is through spreading the word, liking the videos, being present and following artists.<br><br>Another way that we could really get more support from society is by just keeping up with our work, doing the research when they hear about us and even media stations. They barely give any energy or time to up-and-coming artists because they don't want to take the risk of not satisfying their consumers when in reality the consumer is always looking for something new. Up-and-coming artists being able to package new experiences so well because we are new artists is something I really would urge the media to take advantage of.<br><br>Aside from the entertainment industry, I wish our government gave us grants and opportunities or ways for us to have a steady income. Especially as a growing artist, the chances of having a steady cash flow are so scarce and even if you do, it's very hard to maintain because you might end up having to sacrifice your creation process to maintain this work. If we were given opportunities by the government, that would give us a lot more breathing room to just create and do better.<br><br>Another thing is to stop the assumption that Kenyan music has to sound a certain way and accept that as long as it's made in Kenya, it's Kenyan. However, I'm so glad to be up-and-coming in a time when this is a lot more possible, and I just hope that it continues to be taken more seriously."
    }
   ],
   footer_links: [
    {
     name: 'Purchase on bandcamp here',
     url: 'https://bakhita.bandcamp.com/album/chamo-mile-pye'
    },
    {
     name: 'Follow Bakhita here',
     url: 'https://www.instagram.com/lunar_consciousness/'
    },
    {
     name: 'Follow Lauryn Njeri here',
     url: 'https://www.instagram.com/laurynlikethehills_/'
    }
   ]
  },
  {
   type: "article",
   short_name: 'MILES FROM KINSHASA\'S \'BELOVED\' EP CONVEYS THE POWER OF VULNERABILITY',
   name: 'MILES FROM KINSHASA\'S \'BELOVED\' EP CONVEYS THE POWER OF VULNERABILITY',
   bandcamp_link: "https://milesfromkinshasa.bandcamp.com/album/beloved",
   bandcamp_id: "1239573186",
   credit: '',
   credit_illu: 'Elena Cromona',
   author: 'Lauryn Njeri',
   date: '07/31/2020',
   illus: 'articles/vivien/vivien.jpg',
   introduction: "After stirring curiosity with 'Wearing Smiles', 'Lookin 4 U' and 'Motionz', <b>Miles from Kinshasa</b> now brings forth a sombre, jazz-inflicted body of work with '<b>Beloved</b>'. The 8-track EP is a light blend of reverberating sax, plush chords and bossa nova rhythms detailing the digital disconnect and mystery within hyper millennial relationships.<br><br>Miles, real name <b>Vivien Kongolo</b> is a London-based Congolese singer, songwriter and producer who creates hybridised songs that pull from strands in his nomadic life. His latest piece of work, 'Beloved' wryly zones into the fluidity of contemporary expression.<br><br>Speaking on the overall concept of the EP, <b>Kongolo</b> explains, \"<i>Beloved is an honest project about vulnerability and growth through the lenses of a millennial. It’s millennial blues to get us through the times soaked in nostalgia.</i>\"Marking a shift in creative direction and the start of a new chapter, 'Beloved' is the work of a complex, singular artist with bags of talent. Miles shares with us details about the EP and the power of vulnerability in his work.",
   links: [],
   questions: [
    {
     type: 'question',
     title: "How have you been keeping yourself busy during quarantine?",
     answer: "Just taking it a day at a time, trying to create when I can and rest when I can't think of anything. This is the longest summer holiday we’ve ever had and may as well make the most of it."
    },
    {
     type: 'question',
     title: "What is the story behind your artist name 'Miles From Kinshasa'?",
     answer: "I always wanted to have a striking and meaningful name, so it just kind of worked when I called a song of mine Miles from Kinshasa and one day it just came to me that it would work as an alias and boom, it just makes sense."
    },
    {
     type: 'question',
     title: "The tracks on ​Beloved ​all seem deeply personal. Do the stories all stem from personal experiences?",
     answer: "Yeah, they are mostly lived experiences. I tried to stay away from fantasy on this one, and I think the project benefits from that."
    },
    {
     type: 'quote',
     answer: '"I think the only way you can truly connect with people is by being vulnerable"'
    },
    {
     type: 'question',
     title: "What is the difference between your past EP <i>Limbo</i> and this new body of work? Do you feel you have grown in between the EPs?",
     answer: "I hope so, at least I think I've grown as a person and become a bit more open which has allowed me to be more honest with myself. Creatively you can hear it. I've had to push myself to find better and clearer ways to get my message out. Beloved is just a more efficient project. I don't think the quality ever dips which is important for me."
    },
     {
     type: 'question',
     title: "I admire how raw you are when it comes to conveying your emotions which is something that is lacking in the age of the millennial. What encourages you to be so vulnerable?",
     answer: "I think the only way you can truly connect with people is by being vulnerable. It's all therapy for me because I'm talking about my life out loud whilst also addressing them, well trying to anyway."
    },
    {
     type: 'image',
     path: 'articles/vivien/vivien2.jpg'
    },
    {
     type: 'question',
     title: "What is your favourite song off ​Beloved ​and why?",
     answer: "'Dice Games'. It changes every week, but 'Dice Games' has so many moments. It sounds fresh to me but also very familiar. I love the ad libs too. \"NUMBERS\"!"
    },
    {
     type: 'question',
     title: "What's next for Miles From Kinshasa?",
     answer: "We're gonna do some more cool stuff for Beloved. New music isn't too far away either, don't sleep."
    }
   ],
   footer_links: [
    {
     name: 'Purchase on bandcamp here',
     url: 'https://milesfromkinshasa.bandcamp.com/album/beloved'
    },
    {
     name: 'Follow Mile From Kinshasa here',
     url: 'https://www.instagram.com/milesfromkinshasa'
    },
    {
     name: 'Follow Lauryn Njeri here',
     url: 'https://www.instagram.com/laurynlikethehills_/'
    }
   ]
  },
  {
   type: "article",
   short_name: 'BLACK BANDCAMP OCTOBER PICKS: NAIROBI',
   name: 'BLACK BANDCAMP OCTOBER PICKS: NAIROBI',
   bandcamp_link: "",
   bandcamp_id: "",
   credit: null,
   author: null,
   date: '08/07/2020',
   illus: 'articles/oct2020/oct2020.jpg',
   top_desc: "For this month's Bandcamp Friday, our core team member KMRU hit up some artists in his hometown of Nairobi to find out who their top Black Bandcamp discoveries and picks of the month are.",
   links: [
   ],
   questions: [
    {
     type: 'bandcamp_picks',
     title: 'M³',
     description: 'Musician & Record Producer from Nairobi, Kenya just trying to create music (art) that I feel should exist.',
     links: [
      {
       title: 'Learn To Love - Anais & Azekel',
       description: 'I stumbled upon this duo on the Black Bandcamp site, just clicking the (very cool) random shuffle button & by the 10th second I was already drawn in. The simple & airy production just makes me fall in love with the song. How their voices blend so well together and the building of the instrumentation throughout the song just amazed me. Definitely one of those songs that I have already added to my playlists and sharing it with everyone around me.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=236942556/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://anaiszero.bandcamp.com/track/learn-to-love">Learn to Love by anaïs &amp; Azekel</a></iframe>',
      },
      {
       title: 'Tatizo Pesa - Jay Mitta',
       description: 'Being a huge fan of Nyege Nyege Festival, I have always admired their work and the artists they support. Never had the chance to attend one yet, but if (when) I do, I hope I\'ll be performing. This song \'Tatizo Pesa\' by Jay Mitta is packed with so much energy that you just cannot contain the dance in you. The fast beat and Swahili lyrics are so infectious.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=4027928840/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://nyegenyegetapes.bandcamp.com/album/tatizo-pesa">Tatizo Pesa by Jay Mitta</a></iframe>'
      },
      {
       title: 'Source - Nubya Garcia',
       description: 'The blend of the reggae groove with the jazz format and characteristics is everything for me. Another discovery off the Black Bandcamp website. From an audio engineer view I enjoyed how the instruments mixed, especially the drums. Plus, the background vocals that come in are a very lovely touch. The 12-minute song can really put you in a proper trance.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1916787340/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://nubyagarcia.bandcamp.com/album/source">SOURCE by Nubya Garcia</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Nabalayo',
     description: "I’m Nabalayo. A Nairobi based music maker, ethnomusicology enthusiast and the mother of the Changanya genre.",
     links: [
      {
       title: 'Xenia Franca',
       description: "I have a weakness for Brazilian music and that’s how I found her. The folk meets modern aura really gives me the feeling of home away from home.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1637863900/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1068746171/transparent=true/" seamless><a href="https://180g-xeniafranca.bandcamp.com/album/xenia">Xenia by Xenia França</a></iframe>'
      },
      {
       title: 'Zara McFarlane',
       description: "Found her going through the soul selection. I definitely get timeless Afro futuristic vibes from her. If I was on a spaceship doing some intergalactic travel she would definitely make it to my playlist.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1613241991/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3738932123/transparent=true/" seamless><a href="https://zara-mcfarlane.bandcamp.com/album/songs-of-an-unknown-tongue-2">Songs Of An Unknown Tongue by Zara McFarlane</a></iframe>'
      },
      {
       title: 'Thanya Iyer',
       description: "Found her by total coincidence. Her cover art attracted me because I am an illustrator as well. The fusion and balance of smooth vocals, acoustic and electronic sounds is beautifully executed in her music. Also being an orchestra nerd, I was excited to learn that she is a violinist as well and it features in her music.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2607222951/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=960911572/transparent=true/" seamless><a href="https://thanyaiyer.bandcamp.com/album/kind">KIND by Thanya Iyer</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Janice Iche',
     description: "My name is Janice Iche. I am an artist currently working in the field of music. I sing, write songs, produce etc. Music revives me and I am here to share the energy. For this selection, I wanted to keep it East African. It was fun for me to search for and discover sounds from my region. I tried to keep it strictly women but that was more difficult than anticipated. So here we go:",
     links: [
      {
       title: 'Nabalayo',
       description: "From Kenya. Wow. I felt like I had been asleep and only woke up once I heard 'Mwana Wa Gorofa. It ignited something in me that has since been fueling the wonder and excitement of my days, and the growing desire I have to create and share music. She is pioneering a sound she has coined 'Changanya' and I am all here for it. Might I add that she is her own producer (and illustrator!). Damn! As an East African Coastarian, this song is one I needed to hear as it is connecting the wealth of my pasts to the possibilities of my futures, helping me see better the beauty of the music we are creating today and the possibilities of the sounds that we will be creating tomorrow. I am so happy that this music is here. She is releasing her debut project soon so keep an eye out for her. Also has some other releases on her Bandcamp so check that out. Please enjoy, 'Mwana Wa Gorofa'.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=2517284500/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://nabalayo.bandcamp.com/track/mwana-wa-gorofa">Mwana Wa Gorofa by Nabalayo</a></iframe>'
      },
      {
       title: 'Siti Muharam',
       description: "From Tanzania. I have been listening to Taarab lately and it was a pleasant delight to find this project. I think Siti Muharam is the granddaughter to Taarab legend Siti Binti Saad. This particular track ‘Sikitiko’ tugs at my heart strings, the mood and lyrics of the song are somber and display feelings of a painful love that I have felt too many times. I am attracted to music that tells a story I have lived. I also first heard this song performed by another Taarab legend, Bi Kidude, so this is just a gift to find on Black Bandcamp.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3772336838/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3523396614/transparent=true/" seamless><a href="https://sitimuharam.bandcamp.com/album/siti-of-unguja-romance-revolution-on-zanzibar">Siti of Unguja (Romance Revolution On Zanzibar) by Siti Muharam</a></iframe>'
      },
      {
       title: 'ODD OKODDO',
       description: "A Kenyan-German duo. I've really been into listening to modern-traditional sounds, the music that we are making now influenced by our African traditional sounds. This seems like quite the duo. I was interested in hearing what such a project could sound like and I can say that it does not disappoint. The production is heavily electronic, paired with a traditional kind of high-pitched call and response singing giving it a good and interesting balance to its sound.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1691327597/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1580539519/transparent=true/" seamless><a href="https://oddokoddo.bandcamp.com/album/auma">AUMA by ODD OKODDO</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Jinku',
     description: "Jinku makes Tribal Downtempo and Organica. He is part of the NuNairobi sound that he is shaping along with his team EA Wave. The site has such a great filter function, and the shuffle has introduced me to some amazing finds, here are my faves so far.",
     links: [
      {
       title: 'Ash Walker - Aquamarine',
       description: "I am really feeling nostalgic as of late, looking for warmer sounds to counteract the state of the world. This album feels very warm to me.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=506480334/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://ashwalker.bandcamp.com/album/aquamarine">Aquamarine by Ash Walker</a></iframe>'
      },
      {
       title: 'BCUC - The Healing',
       description: "These guys came down to Nairobi for a liveshow and I have been hooked ever since! Mad tribal, how I love it.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=449580511/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://bcuc.bandcamp.com/album/the-healing">The Healing by BCUC</a></iframe>'
      },
      {
       title: 'Kampire - Gatluak (Gan Gah, Cardi Monáe & Kampire Remix)',
       description: "This song slaps in all kinds of ways. I loved the original, but this, this feels like outside.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=1071545326/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://kampire.bandcamp.com/track/gatluak-gan-gah-cardi-mon-e-kampire-remix">Gatluak (Gan Gah, Cardi Monáe &amp; Kampire Remix) by Kampire</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: '[MONRHEA]',
     description: "[Monrhea] is a DJ and Producer, brewing in the experimental music scene in Nairobi and beyond.",
     links: [
      {
       title: 'DJ RAPH',
       description: "It's always hard to leave him out of any of my lists where I point out my favorite artists. He is one of the best examples of producers who archives our African traditional rhythms through blending with modern electronic sounds.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2384377729/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3496777140/transparent=true/" seamless><a href="https://djraph.bandcamp.com/album/sacred-groves">Sacred Groves by Dj Raph</a></iframe>'
      },
      {
       title: 'ODD OKODDO',
       description: "I just think this track is beautiful. Another example of well-blended African rhythms.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1691327597/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1893951686/transparent=true/" seamless><a href="https://oddokoddo.bandcamp.com/album/auma">AUMA by ODD OKODDO</a></iframe>'
      },
      {
       title: 'AFALFL',
       description: "Recently, I have been finding interest in music made using code. Here's one :)",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1578656020/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://afalfla.bandcamp.com/album/androrythmes">Androrythmes by AFALFL</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Coco Em',
     description: "I'm Coco Em and I'm a DJ and producer based in Nairobi Kenya. I am part of a bubbly and energetic music scene with diverse sounds from afro house and dance music to gengetone and shrap. I have performed on stages such as Boiler room, Afro punk, Trans Musicales and more. As part of my amazing Nairobi community, I am working toward offering more support to young artists, DJs and producers - most of whom are just breaking into their own careers. I am a filmmaker and I’m currently starting a project to offer quality music videos to artists. I am also part of a music collective Santuri EA which supports the electronic music scene in the East African region through workshops, creative challenges and an informative and engaging music podcast founded by DJ Huilly Huile called Santuri Signal. I have also recently formed an arts collective Sim Sima in conjunction with the creative body Chilli Mango which will focus on music production training, film and fine art training as well as collaborative community events with extra support given to femme and marginalized peoples in our community.",
     links: [
      {
       title: 'Ekiti Sound',
       description: "I found Ekiti Sound after randomly going through Black Bandcamp. I was first introduced to Black Bandcamp by my friend and Nairobi based producer KMRU. ‘A song for Lara’ opens with a lovely blend of electro disco synths, a thumpy bassline and smooth vocals.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2074360769/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1651396898/transparent=true/" seamless><a href="https://ekitisound.bandcamp.com/album/abeg-no-vex-remixes-vol-1">Abeg No Vex Remixes VOL.1 by Ekiti Sound</a></iframe>'
      },
      {
       title: 'Ase Manual',
       description: "My partner DJ Huilly Huile introduced me to the sounds of Ase Manual back in 2019 and I've been hooked since. I am drawn to his heavy bass lines and lots of percussion which give me interesting blends while I play my sets.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1902038683/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3266219211/transparent=true/" seamless><a href="https://asemanual.bandcamp.com/album/ase-manual-black-liquid-electronics-deluxe">Ase Manual - Black Liquid Electronics (Deluxe) by Ase Manual</a></iframe>'
      },
      {
       title: 'Nazar',
       description: "My last pick is from a new favourite of 2020, Nazar. I was led to his page by my love for Cooly G and the label that reps her, Hyperdub. Nazar is a fresh inclusion to the label and his music is out of this world. I would put up a whole album here but since I'm only allowed a track I select 'Airstrike'.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=729183487/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=2895578494/transparent=true/" seamless><a href="https://nazar.bandcamp.com/album/enclave">Enclave by Nazar</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'slikback',
     description: "Experimental producer and DJ from Kenya. ",
     links: [
      {
       title: 'Duma',
       description: "Loved the sounds of Duma from the moment I saw their live performance (dark, aggressive metal). I found this record through Nyege Tapes, a Ugandan label and collective.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=740785244/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://nyegenyegetapes.bandcamp.com/album/duma">Duma by Duma</a></iframe>'
      },
      {
       title: 'Menzi',
       description: "I first heard the record before it's release as we shared music among ourselves within Hakuna Kulala (the crew I am in) and instantly fell in love with it's fresh take on gqom.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=830547674/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://hakunakulala.bandcamp.com/album/impazamo">Impazamo by Menzi</a></iframe>'
      },
      {
       title: 'KMRU',
       description: "Kamaru's ambient works are always a go to for me for its calming structures. I found the record when he posted about it on his twitter and instantly connected with it.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1944326644/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://seilrecords.bandcamp.com/album/jar">Jar by KMRU</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'MR.LU*',
     description: "A self-proclaimed social experiment, Kenyan producer, deejay and composer MR. LU* has quickly turned into one of the Nairobi scene's go-to producers, working with artists such as Taio and Karun, as well as putting out music as part of the XPRSO. collective consisting of RVMP, Mars Maasai and Baby’s Breath.",
     links: [
      {
       title: 'Knxwledge',
       description: "knxwledge is one artist I bump nearly, if not every day, of my life. I especially love his music because of the consistency he displays with each project.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3915591256/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1123395718/transparent=true/" seamless><a href="https://knxwledge.bandcamp.com/album/vgms-prt-4">VGM&#39;s​​.​​PRT_4 by Knxwledge.</a></iframe>'
      },
      {
       title: 'Ohbliv',
       description: "ohbliv makes me feel like I am in ohblivion (see what i did there 😂). His unquantized takes on samples inspire me to get up and try stuff I've never tried musically.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=914006972/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1780596001/transparent=true/" seamless><a href="https://ohbliv.bandcamp.com/album/ez-widas">EZ Widas by Ohbliv</a></iframe>'
      },
      {
       title: 'XPRSO',
       description: "Automatic certified banger by the gang. This will definitely get you up on your feet. If you're doing chores, just be careful not to break the dishes dancing.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2434179039/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1793209958/transparent=true/" seamless><a href="https://xprso.bandcamp.com/album/nairobass-2">NAIROBASS by XPRSO</a></iframe>'
      }
     ]
    },
   ]
  },
  {
   type: "article",
   short_name: 'LEX AMOR GOES INWARD',
   name: 'LEX AMOR GOES INWARD',
   bandcamp_link: "https://lexamor.bandcamp.com/album/government-tropican",
   bandcamp_id: "893411503",
   credit: '',
   credit_illu: '',
   author: 'Lauryn Njeri',
   date: '07/31/2020',
   illus: 'articles/lexamor/lexamor.jpg',
   introduction: "One immediately feels the comfort that lies perfectly in between the arts of poetry and rap when they listen to <b>'Government Tropicana'</b>. The album is a deeply personal account of introspection informed by cultural memory from the North London-based multifaceted artist <b>Lex Amor</b>.<br><br>It’s impossible to miss the bravado in her transcendental whispers, where she lets us in on her bid to trace the evolution of her hometown and her role within it. <i>\"Government Tropicana is the story of first-generation working-class London; an attempt to articulate the nuance of my lived experience,\"</i> Lex explains. <i>\"This project is a celebration of collective cultural norms and an exploration of my life to this point.\"</i>",
   links: [],
   questions: [
    {
     type: 'image',
     path: 'articles/lexamor/lexamor2.jpg'
    },
    {
     type: 'quote',
     answer: "\"This project is a celebration of collective cultural norms<br>and an exploration of my life to this point.\""
    },
    {
     type: 'question',
     title: "",
     answer: "The 9-track EP is led by mellow beats and hushed sedating vocals. This gives way for easy listening to internalize the memoirs of her life in-between the lines of her slick wordplay. <i>\"Whilst writing this project I engaged with concepts of home, detachment, disillusionment, perseverance, power and community. It is the fruit of my lifelong introspection. Tap water - government juice - making the most of what we were given: Government Tropicana.\"</i><br><br>Lex Amor comfortably establishes herself as one to watch. Her ability to touch on cultural, political and personal perspectives in her bold bars, all while maintaining a laidback aura and sense of humour makes her one of the brightest lights to emerge from the UK hip-hop scene in recent years."
    },
    {
     type: 'question',
     title: "",
     answer: "<b>'Government Tropicana'</b> is available for purchase on Lex Amor’s Bandcamp page."
    }
   ],
   footer_links: [
    {
     name: 'Purchase Government Tropicana here',
     url: 'https://lexamor.bandcamp.com/album/government-tropicana'
    },
    {
     name: 'Follow Lex Amorhere',
     url: 'https://www.instagram.com/lexysaluteme/'
    },
    {
     name: 'Follow Lauryn Njeri here',
     url: 'https://www.instagram.com/laurynlikethehills_/'
    }
   ]
  },
  {
   type: "article",
   short_name: 'BLACK BANDCAMP NOVEMBER PICKS: NAARM',
   name: 'BLACK BANDCAMP NOVEMBER PICKS: NAARM',
   bandcamp_link: "",
   bandcamp_id: "",
   credit: null,
   author: null,
   date: '08/07/2020',
   illus: 'articles/nov2020/nov2020.jpg',
   top_desc: "For this month's Bandcamp Friday, we hit up creatives in Naarm (Melbourne) to find out who their top Black Bandcamp discoveries and picks of the month are.",
   links: [
   ],
   questions: [
    {
     type: 'bandcamp_picks',
     title: 'Beź Zewdie',
     description: "<a href='https://www.instagram.com/bezography/' target='_blank'>Beź Zewdie</a> is an African-Australian content and events producer, presenter of <a href='https://www.rrr.org.au/explore/programs/represented' target='_blank'>'Represented'</a> on Triple R 102.7FM, and creator of the <a href='https://www.youtube.com/watch?v=G6NLZcK8pyw&list=PLaF17q8yqWmIUeUkWqmL5-nOrJfIp4ksP&index=1&ab_channel=Be%C5%BA.' target='_blank'>SHADES</a> podcast: an exploration of social issues through the lens of Australian hip hop music.",
     links: [
      {
       title: 'Crystal Axis - Take the Throne',
       description: "African metal & punk music is so grossly underrated. This five-piece is precisely why you should start taking notice. Rock music IS Black music, and it's high time we take ownership of it.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=4228169348/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://crystalaxis.bandcamp.com/track/take-the-throne">Take The Throne by Crystal Axis</a></iframe>'
      },
      {
       title: "DRMNGNOW ft. Kee'ahn & Riverboy - Ancestors",
       description: "On this track, three of Melbourne's most promising, up-and-coming talents come together on a powerful track that never fails to give me chills. Riverboy's production is hypnotic, Kee'ahn's vocals haunting, and DRMNGNOW's poetry empowering and uplifting.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=2447037193/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://drmngnow.bandcamp.com/track/ancestors">Ancestors by DRMNGNOW</a></iframe>'
      },
      {
       title: 'Stevan - No More Regrets',
       description: "Stevan tells coming-of-age stories to the backdrop of eclectic, indie rnb music. His melancholy vocals top off his altogether warm and dreamy output.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=3493204280/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://stevanofficial.bandcamp.com/track/no-more-regrets">No More Regrets by Stevan</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Darcy Justice',
     description: 'My name is Darcy Justice and I DJ sometimes. I enjoy music and try not to take myself too seriously, at the end of the day I’m just pressing play.',
     links: [
      {
       title: 'Equiknoxx - Bird Sound Power',
       description: "Going to highlight a small little part of the world which I hold closely to my heart, Jamaica. Found this awesome \"forward thinking Jamacian music collective\" putting out some heavy beats and nice rhymes. Equiknoxx is the name and this album Bird sound power is my favourite but all albums are equally wicked.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=745435535/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=2592718917/transparent=true/" seamless><a href="https://equiknoxx.bandcamp.com/album/bird-sound-power">Bird Sound Power by Equiknoxx</a></iframe>'
      },
      {
       title: 'Shanique Marie - Freak',
       description: "Delved deeper into the Equiknoxx collective and have officially fallen in love with Shanique Marie. A Slick rapper with a beautiful singing voice also! Paired with some Gavsborg beats and it's unstoppable. Cant help but bop about.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2905252228/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=37227733/transparent=true/" seamless><a href="https://shaniquemarie.bandcamp.com/album/freak">Freak by Shanique Marie</a></iframe>'
      },
      {
       title: 'Riddlore- Afromutations',
       description: "Came across the label Nyege Nyege tapes and clicked onto the album Afromuations and was sent elsewhere. BeautIful field recordings mixed with real strong and groovy beats . Made my little afrobeat section in my heart melt and my body two step.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2306200836/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3082048501/transparent=true/" seamless><a href="https://nyegenyegetapes.bandcamp.com/album/afromutations">Afromutations by Riddlore</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Paul Gorrie',
     description: "My name is <a href=\"https://www.instagram.com/lil_p_geezy/\" target=\"_blank\">Paul Gorrie</a> and I am a Gunai/Kurnai & Yorta Yorta man. I’m a radio presenter (<a href='https://www.rrr.org.au/explore/programs/still-here' target='_blank'>RRR</a>), DJ (<a href='https://soundcloud.com/dj-pgz' target='_blank'>dj pgz</a>), assistant music producer (<a href='https://www.rising.melbourne/' target='_blank'>Rising Festival</a>), filmmaker (<a href='https://www.sbs.com.au/ondemand/program/treaty' target='_blank'>Young Mob Questioning Treaty</a>), and drummer (<a href='https://drmngnow.bandcamp.com/' target='_blank'>DRMNGNOW</a> & <a href='https://www.keeahn.com/' target='_blank'>Kee’ahn</a>).",
     links: [
      {
       title: 'Water Streets - Blvck',
       description: "They’re coming out of FNQ and they have a freshness and steeze that is reminiscent of an East Coast vibe from NYC, Turtle Island while also spitting realness about being a blakfulla from so-called Australia. These fullas are the next generation of hip hop coming out of so-called Australia to keep an eye on. Water Streets is made up of Jamahl (Wanyii), Bardi who is Wagiman (Darwin), St Paul (Torres Strait Islands), Marshal from Darnley Island (Torres Strait Islands).",
       embed: '<a href="https://waterstreets.bandcamp.com/" target="_blank">https://waterstreets.bandcamp.com/</a>'
      },
      {
       title: 'Mulalo - FTN + Chargin',
       description: "If you are a fan of the likes of Megan Thee Stallion, Rico Nasty, and Bbymutha - you will have to acquaint yourself with Mulalo. Coming out of Naarm/Melbourne, she brings a rawness and style that quite hasn’t been filled over here. Mulalo refers to her music as “bad b***h music” and it is the baddest. She also has another single out called Check that isn’t on bandcamp that is worth checking out too.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3057282832/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=833411451/transparent=true/" seamless><a href="https://mulalo.bandcamp.com/album/ftn-chargin">FTN + Chargin by Mulalo</a></iframe>'
      },
      {
       title: 'Ase Manual - Eat It Up',
       description: "I am a fan of club music, and as a DJ with an interest in underground, bassy, dark, trippy and high tempo sounds. For those very reasons; Ase Manual is someone who has found their way into my library. The Yoruba - American DJ and producer that can do no wrong. Especially with the track Eat It Up taken from their project Fuji Club Music.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2524858663/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=16609845/transparent=true/" seamless><a href="https://asemanual.bandcamp.com/album/fuji-club-music">Fuji Club Music by Ase Manual</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'C.FRIM',
     description: '<a href="https://www.instagram.com/c.frim" target="_blank">C.FRIM</a> is a Melbourne (Naarm) based selector and presenter who pushes forward-thinking sounds via a monthly show on <a href="https://skylab-radio.com/shows/shakedown-e1" target="_blank">Skylab Radio</a>.',
     links: [
      {
       title: 'Shyboi - Head Top',
       description: "I can't explain how gassed up I was for this release. This track effortlessly cultivates techno and merges it with dancehall roots - I'm not sure whether to 2-step or dutty wine. Best believe I'll be smashing that cue button for this one post-Corona.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=309365031/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=558036070/transparent=true/" seamless><a href="https://djshyboi.bandcamp.com/album/rave-down-babylon">Rave Down Babylon by SHYBOI</a></iframe>'
      },
      {
       title: 'Tygapaw - Run 2 U',
       description: "This new single out from her forthcoming album 'Get Free' pulses with so much energy and reminds me why techno is and has always been Black. I was lucky enough to support Tygapaw at her Naarm show last year and she was just dropping hit after hit. So fire!",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2101995501/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://tygapaw.bandcamp.com/album/get-free">GET FREE by TYGAPAW</a></iframe>'
      },
      {
       title: 'Rey Sapienz - Dancehall Pigmé',
       description: "'Mushuro' as a complete EP is incredible, but 'Dancehall Pigmé' is the track that I always come back to. The scene in Kampala, Uganda is really pushing this distinct and progressive sound that is mad inspiring.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3759814304/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1244531193/transparent=true/" seamless><a href="https://hakunakulala.bandcamp.com/album/mushoro">Mushoro by Rey Sapienz</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Soju Gang',
     description: "Yo, I’m <a href=\"https://www.instagram.com/soju_gang/\" target=\"_blank\">Soju Gang</a>; I’m a Melbourne based DJ, designer and owner of my own street wear label called <a href=\"https://www.instagram.com/sawft.wear/\" target=\"_blank\">SAWFT</a>, and an all round creative in Melbourne’s nightlife scene.",
     links: [
      {
       title: 'Nooky - Black Future',
       description: "Nooky is a talented artist from NSW, Aus who has lately been pushing out some age defining music that’s highlighting the lived experience and disparity of the Blak community of Australia as we move through our own BLM movement.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=447853956/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://nooky.bandcamp.com/track/black-future">Black Future by Nooky</a></iframe>'
      },
      {
       title: 'Boston Chery - Summers with you Vol III',
       description: "As a DJ I’m always looking for unique, eclectic, energy-filled remixes and Boston delivers. New York DJ and producer, Boston’s sound is so vast that there’s always something new.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=341680357/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://bostonchery.bandcamp.com/album/summers-with-you-vol-3">Summers With You Vol. 3 by Boston Chery</a></iframe>'
      },
      {
       title: 'Tera Kòrá - The Legend of Kòrá Remixes & Edits ~Book One~',
       description: "Tera Kora is one of my faves for mixes; from Rotterdam this creative puts together some really funky, smooth remixes that I adore. Tera is also a member of Soulection.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2550163810/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1559400132/transparent=true/" seamless><a href="https://terakora.bandcamp.com/album/the-legend-of-k-r-remixes-edits-book-one">The Legend of Kòrá Remixes &amp; Edits ~Book One~ by Tera Kòrá</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Afrodisiac',
     description: "For all things musical I go by <a href=\"https://www.instagram.com/gabby.au/\" target=\"_blank\">Afrodisiac</a>. As a DJ I'm not too interested in tracks I can't dance to and I've reflected this below by choosing 3 superb remixes.",
     links: [
      {
       title: 'Sudan Archives - Glorious (Nídia Remix)',
       description: "My first selection is an enchanting remix of Sudan Archives' Glorious by Portugese producer Nidia. I found this through the Black Bandcamp website using the genre search and clicked through to Sudan Archives' Bandcamp. At a smooth 100bpm it's the type of track that's easy to get your body warmed up to move and the violin, claps and drums really did transport my brain to a happier place.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=968590833/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://sudanarchives.bandcamp.com/track/glorious-n-dia-remix">Glorious (Nídia Remix) by Sudan Archives</a></iframe>'
      },
      {
       title: 'KOKOKO! - Tokoliana (Citizen Boy Remix)',
       description: "I found this next track by using the location search. Hailing from the DR Congo the collective KOKOKO! produces massively rhythmic and hypnotic dance tracks that I could listen and groove to all day. In this remix it's the tension and suspense of the percussions and vocals that have me hooked.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=27355656/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=801890419/transparent=true/" seamless><a href="https://kokokomusic.bandcamp.com/album/remixes">Remixes by KOKOKO!</a></iframe>'
      },
      {
       title: 'Ekiti Sound - Abeg No Vex Remixes VOL​.​1',
       description: "This last recommendation was found again through the location search. It's a remix by Soul Edifice of Nigerian producer Ekiti Sound's song Alutere. The original release is 52 seconds in length so this 7:32min remix is a d-floor blessing. It's the perfect combination of afro infused acid lines, techno and breaks.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2074360769/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://ekitisound.bandcamp.com/album/abeg-no-vex-remixes-vol-1">Abeg No Vex Remixes VOL.1 by Ekiti Sound</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Areej Nur',
     description: "<a href=\"https://www.instagram.com/areejrun/\" target=\"_blank\">Areej Nur</a> is a Melbourne based co-founder of African artist collective, <a href=\"https://www.instagram.com/stillnomads/?hl=en\" target=\"_blank\">Still Nomads</a> and presenter of <a href=\"https://www.rrr.org.au/explore/programs/the-rap\" target=\"_blank\">The Rap</a> on Triple R.",
     links: [
      {
       title: 'Genesis Owusu - WUTD',
       description: "I have to start with Genesis because this young man is hands down one of the best live performers this country has to offer. Listening to Genesis Owusu is a different experience after you've seen him live. Besides the authentic style and unique flow, I feel his heart in so much of the music and WUTD is no exception.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=2982205487/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://genesisowusu.bandcamp.com/track/wutd">WUTD by Genesis Owusu</a></iframe>'
      },
      {
       title: 'KOKOROKO - Carry Me Home',
       description: "The jazz ensemble of my dreams. I can't believe how much jazz is coming out of London right now especially by young Black geniuses. 2020 is the year of really feeling like being held, and 'Carry Me Home' holds so much. KOKOROKO does everything right.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2323173687/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=577851728/transparent=true/" seamless><a href="https://kokoroko.bandcamp.com/album/carry-me-home">Carry Me Home by KOKOROKO</a></iframe>'
      },
      {
       title: 'Kaiit - Miss Shiney',
       description: "I knew all the words to Kaiit's first few singles before she even dropped them. This young sis was singing around Melbourne for a little while before making any official releases and already had a loyal following, of which I am and always will be a part of. Kaiit's voice, energy and soft strength is unmatched - she is such an integral part of the Black music culture in Melbourne and Miss Shiney is a hit!",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=1324757541/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://kaiit.bandcamp.com/track/miss-shiney">Miss Shiney by Kaiit</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Claudia Jones',
     description: "My name is Claudette Justice, I release music under <a href=\"https://www.instagram.com/claudiajoneslive/\" target=\"_blank\">Claudia Jones</a>, <a href=\"https://www.instagram.com/glamouratz/\" target=\"_blank\">Glamouratz</a>, <a href=\"https://www.instagram.com/claudyknight/\" target=\"_blank\">Claudy Knight</a> and <a href=\"https://www.instagram.com/claddywood/\" target=\"_blank\">Claddy</a>. I never ever wanna put myself in a box. I’m a woman of many things. I’m a jazz singer who writes disco, pop and house music. I often get sultry melodies come to me at all hours of the day. I refuse to limit myself by sticking to one genre. I’m a DJ, musical curator who runs parties, forever uplifting & growing with BIPOC community. I also run a couple of Naarm (Melbourne, Australia) based radio shows, <a href=\"https://skylab-radio.com/shows/justicescape-e3\" target=\"_blank\">'JusticEscape'</a> on Skylab Radio & ‘Signal’ on Lossless Radio. Put simply, music is my love language, my heart and my soul.",
     links: [
      {
       title: 'AMARAFLEUR - dontletgo’ ',
       description: "I am a sucker for a good pop track with an original sound. I could listen to ‘dontletgo’ on repeat for hours. Found in the electro soul genre, Amara Fleur, hailing from Johannesburg, South Africa was an incredible find. ‘Dontletgo’ has a lo-fi, hip hop style beat with beautiful, textured, jazzy, rnb vocals. Perfect tune to light a joint to, and simmer deep into the nostalgic waves of emotion.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=3788921813/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://amarafleur.bandcamp.com/track/dontletgo">DontLetGo by AMARAFLEUR</a></iframe>'
      },
      {
       title: 'Carlos Do Complexo - Mistakes',
       description: "Found in the rnb genre section, hailing from Brazil, Carlos Do Complexo gives us the smoothest, soulful vibes with a groovy electronic twist. There’s a sound in there that makes me think he sampled the x-files theme song. Add raw honest vocals from Lexie Palms and you’ve got yourself a new age rnb classic. Let’s be real though, anything that comes from Brazil is magic.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=3294440085/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://carlosdocomplexo.bandcamp.com/track/mistakes">MiSTAKES by Carlos do Complexo, Lexie Palms</a></iframe>'
      },
      {
       title: 'Saine & Smith - Dirty Games',
       description: "I’m constantly digging for new music, not only to share with the collective but to keep my ears and heart active and happy. I found ‘Dirty Games’ whilst digging in the Afro-Caribbean section. As a Jamaican blooded woman who’s grown up in the club filled with house music, this track touched all the right places. It has an analog, old school feel to it. Repeating bass line (always a fave) deep house groove with a powerful, top vocal. Perfect dance floor meditation to drop in the club at any moment.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=8294460/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=2860972202/transparent=true/" seamless><a href="https://sainesmith.bandcamp.com/album/dirty-games">Dirty Games by Saine &amp; Smith</a></iframe>',
      }
     ]
    },
   ]
  },
  {
   type: "article",
   short_name: 'BETINA QUEST: ALWAYS EVOLVING',
   name: 'BETINA QUEST: ALWAYS EVOLVING',
   bandcamp_link: "https://betinaquest.bandcamp.com/track/ikangure",
   bandcamp_id: "2360356237",
   isSingle: true,
   credit: '',
   credit_illu: 'Tommy Wá',
   author: 'Tanya Akinola',
   date: '07/31/2020',
   illus: 'articles/betinaquest/betina.jpg',
   introduction: "Having now settled in Ghana after living across several countries and continents, German-Burundian artist Betina Quest channels her physical and sonic explorations into her most compelling piece of work yet. Fusing neo-soul and R&B with afro influences, her debut LP 'room in a room' emerges as an innovative cross-media art piece of music, poetry and photography that centres the experiences of African women. As Betina Quest explains: \"We have to own our stories to heal. And we have to heal to form healthier, saner societies. I often wondered how I could contribute to the change I want to see. This is it.\"<br>'room in a room' is out on the 11th of November and the full album is available exclusively through Betina Quest's website.",
   links: [],
   questions: [
    {
     type: 'question',
     title: 'How are you and how have you been spending your time during this period of semi-lockdown?',
     answer: "I am well thank you. I am mostly in the house either working, working out, catching up with my family and friends, cooking or just enjoying the silence."
    },
    {
     type: 'question',
     title: "Your latest body of work, 'room in a room' is due to release on the 11th of November. This will be your debut LP after releasing two EPs, the 'Questapes'. How are you feeling about it and how does this LP differ from your previous releases in your opinion?",
     answer: "I’m very excited for the project to come out, because it’s very special to me. Comparatively it took a lot longer to come together than the questapes, so the story is more extensive, there are a lot more details to discover and it’s also the first time I implemented poetry and photography in a project. Musically as well, as personally I have grown a lot since my last questape which also sets ‘room in a room’ apart from my previous releases."
    },
    {
     type: 'question',
     title: "You explore themes on this album that I'm sure many members of the African diaspora are familiar with, such as: defining 'home', returning to your ancestral land, the barriers of language and defining oneself when you've lived between cultures. As you said, \"room in a room is about the human experience from a Black African female’s perspective.\" This LP is quite raw and personal, almost a diary of your experiences. Would you agree and did you intend to create an album with a specific message or did it just come together naturally?",
     answer: "I would definitely agree with the project being very personal. It’s the only kind of art I know how to make. At the same time though, I believe I am telling not just my story, but someone else’s as well. At the very least I am sharing the story to encourage others to own theirs. I can’t say I had a specific message in mind when I first started putting the project together. As much as I generally gravitate towards genuine storytelling I wouldn’t say I knew exactly where I was going. Rather it came together naturally.",
    },
    {
     type: 'question',
     title: "You've lived in a few different countries over the past decade. How has living across different countries and cultural experiences and now settling in Ghana shaped 'room in a room' and your approach to creating music?",
     answer: "All the cultures inhabiting me certainly shape my story and therefore infuse 'room in a room' with everything it has become. The most obvious example of that being that the virtual gallery we have created to exhibit the project will exist in six languages representing all the places I have been to and all the people I have met, but also almost personally inviting all of them to discover this creation they are somehow a part of. Musically I was interested in combining my favorites of smooth soul and mellow hip hop beats with anything afro. I wanted to explore both contemporary and traditional melody, harmony, chord progression, rhythm, language - all of that - and fuse those influences. Settling in Ghana definitely allowed me to expand that part of my vocabulary and express that fusion I have envisioned since 'questape vol. 2' that much more.",
    },
    {
     type: 'question',
     title: "There's a variety of musical influences on the album, though a fusion of soul, R&B and jazz beautifully take centre stage on a lot of the tracks. Can you tell us from your perspective a bit more about what types of sounds you were drawn to explore on this album and why?",
     answer: "As I briefly mentioned before I would say my main influences in the beginning of my music making were people like Erykah Badu, Tweet, Jill Scott, Robert Glasper, J Dilla, Georgia Anne Muldrow. It’s because I was always drawn to and curious about Black culture, though growing up Afro American culture was more accessible to me than African pop culture. I always felt there was something missing though, because that so-called 'neo soul' sound felt like I had borrowed it and it told just half of my story. And so I began introducing Afro influences to my sound to represent that part of me as well. Settling in Ghana was - musically as well as personally - a very significant homecoming."
    },
    {
     type: 'image',
     path: 'articles/betinaquest/betina2.jpg',
     author: 'Tommy Wá'
    },
    {
     type: 'question',
     title: "I read that this project took two and a half years to make and that it almost made you want to quit music entirely. What led you back to completing the album and inspired you to see it through and keep going?",
     answer: "Taking a break was what allowed me to come back. 100%. I needed to regroup, inject a healthier energy and approach to my career and somewhat start over. Being a DIY independent solo artist is tough! But at the end of the day I realized it’s indeed what I want to do - I just had to identify healthier ways of doing it."
    },
    {
     type: 'question',
     title: "And what did you learn about yourself as an artist during this time?",
     answer: "I learnt I am capable of more than I thought I was. I learnt I can not collaborate with just anybody. And I learnt I really quite like the artist I am becoming :)"
    },
    {
     type: 'question',
     title: "You have your own website where you sell your music and have spoken about the importance of artists receiving the bulk of profit from their work, as well as finding where you draw the line as an artist with exploitative major platforms like Spotify. Is this something you were concerned with from the outset of your career in music or something you learned along the way?",
     answer: "It is definitely something I was always alarmed by. Musicians are too often underpaid and overall not appreciated the way I believe we should be. I first realized that when I started playing cover gigs and had to grow the courage to say no to those paying horrifically little and demand for what I believe I deserve. As I am diversifying my revenue streams though, I realize exploitation is everywhere. Instead of losing myself in frustration, however, I try to identify ways of how I can contribute to a system that favors me as an independent artist and that allows my listeners to support me sustainably. It requires a lot of research, trial and error and certainly a constant dialogue with my audience, but I trust it will be worth it. Especially if I get to pass this blueprint on to other creatives!"
    },
    {
     type: 'question',
     title: "Can you explain the concept behind the virtual gallery and how you want fans to interact with the album in this digital space given the absence of live performance due to COVID-19?",
     answer: "The concept of the virtual gallery is basically to globally provide a virtual space to experience 'room in a room'. We created a photograph for each track and wanted to appreciate the lyrics for the poetry they are. In the gallery you will be able to listen to each song while reading along and viewing the photograph all at once. As I explained earlier we translated the poems to Kirundi, German, French, Spanish and Japanese. Our interactive platform 'room in a room in a www' - possibly the most important element of the project - is designed to allow you to own and share your story. As I said before it is not just about me, but about all of us. It is about being represented as well as being a representation to somebody else. It is about owning your story to live more wholeheartedly. And it is about understanding each other a little better to form healthier societies which, in my opinion, has proven to be more relevant and urgent now than ever. The distance we all experience can be challenging to bridge via the internet, but we hope this virtual gallery enables you to slow down for a while and genuinely reconnect with yourself and others."
    },
    {
     type: 'question',
     title: "What is something you hope listeners, and more specifically African people and African women, are able to take away from listening to this album?",
     answer: "I understand the temptation of wanting anyone, but especially my people and my fellow African women to take away something particular from the work. But the truth - and beauty - is it is out of my control. I believe the album has many many gifts to offer, so I hope - and I trust - that everyone takes away from it exactly what it is they need. Whatever that may be :)"
    }
   ],
   footer_links: [
    {
     name: 'Purchase on her website here',
     url: 'https://www.betinaquest.com/'
    },
    {
     name: 'Purchase the singles on Bandcamp here',
     url: 'https://betinaquest.bandcamp.com/music'
    },
    {
     name: 'Follow Betina Quest here',
     url: 'https://www.instagram.com/betinaquest/?hl=en'
    },
    {
     name: 'Follow Tanya Akinola here',
     url: 'https://www.instagram.com/tanyaakinola/'
    }
   ]
  },
  {
   type: "article",
   short_name: 'SPIRITUAL JAZZ AND AFRO DISCO BLEND TOGETHER ON PYRAMID PROJECTS’ "MANGROVES EP"',
   name: 'SPIRITUAL JAZZ AND AFRO DISCO BLEND TOGETHER ON PYRAMID PROJECTS’ "MANGROVES EP"',
   bandcamp_link: "https://pyramidprojectfeatcontours.bandcamp.com/album/mangroves-ep",
   bandcamp_id: "1941076607",
   isSingle: false,
   credit: '',
   credit_illu: '',
   author: 'Lauryn Njeri',
   date: '07/31/2020',
   illus: 'articles/pyramid/pyramid.jpg',
   introduction: "Created in just 2 days back in 2018, \"<b>Mangroves</b>\" is a 4-track collaborative EP between UK producer <b>Contours</b> and a selection of Kenya’s most accomplished musicians, formed as <b>Pyramid Project</b>, by ADA Records Label Head, <b>Lasta</b>.<br><br>Each track on the EP sizzles with an improvised approach resulting in an electric vibe that provides a truly live feel.The instrumental journey begins in a climate of mystery before immersing you into a ferocious yet atmospheric Swahili Jazz composition, \"<b>Mangroves</b>\". The track is birthed by percussive instruments that are then awakened by a toying bassline that soon builds into a driving riff with skipping drums.<br><br><b>Contours</b> is on percussion with the Space Echo, <b>Katumba</b> is on the drums providing the Afro-Rhythms, and <b>Abaki Simba's Masta</b> and <b>Inspekta</b> on Percussion. The track flawlessly ebbs and flows allowing young pianist <b>Mutoriah to</b> take the lead.<br><br>Pyramid Project kicks up the energy on an electric Afro-Disco composition, \"<b>Driver</b>\" which is led by the sounds of the Orutu, a single-stringed fiddle from Western Kenya, played by <b>Boaz Jagingo</b>. The disco melody quickly builds to uplifting Drum and Bass before dropping away to reveal Jagingo’s Echo’s in the hook lifting the track as he depicts a busy Kenyan Central Business District.<br><br>Surrounded by a four-piece percussion section, the excitement of the live recording shines through as <b>Abaki Simba</b> faces off <b>Katumba</b> in a percussive breakdown. The song is then lifted again by Jagingo’s rhythmic chants blended with the energetic Drum and Bass of <b>Contours</b> and <b>Mbaluka</b>.<br><br>Black Bandcamp caught up with <b>Lasta</b>, producer and spearhead of the sublime collective, to learn about their creative process in the making of their enchanting brainchild.",
   links: [],
   questions: [
    {
     type: 'question',
     title: "Tell us the story behind your intriguing name, “The Pyramid Project” and how you all came together.",
     answer: "The band were brought together by ADA Records label head Lasta to collaborate with who was visiting East Africa at the time. The label saw this as a great opportunity to shine a light on some of Kenya’s amazing musicians and the tradition of live music that they are keeping alive.<br><br>The name 'The Pyramid Project' came about to add an air of mystery and a sense of ancient spiritualism and culture to the project. The idea is that each composition is not overly thought out, instead an improvised approach is adopted, calling on ancestral sounds and translating them through the conduit of today’s Kenyan musicians."
    },
    {
     type: 'question',
     title: "Mangroves was recorded in an impressive 2 days. How was the process of composing and writing the EP?",
     answer: "It was intense! But we allocated 1 day to each of the original compositions for song writing, rehearsing the final recording, of which there were only 3 takes. This ensured true collaboration in the song writing, and a truly live feel with the magic coming through the improvised elements. Such a process meant that the whole day was focussed on 1 song and didn’t allow for any slump in creativity. With so many creative minds in the room, the energy and excitement was real! There was no time for big mistakes in the recordings, but the calibre of musicians meant that there was no need for concern."
    },
    {
     type: 'image',
     path: 'articles/pyramid/pyramid2.jpg'
    },
    {
     type: 'question',
     title: "What was the atmosphere you were striving for when the band created this piece of work?",
     answer: "Mangroves was intended to be a souring spiritual jazz number, with heavy Swahili influence. The idea was to channel coastal rhythms and melodies and tell a story with a beginning, middle and end, and lots of drama. Mutoriah’s key solo really brought this through backed up by a pulsating rhythm and percussion section.<br><br>Driver was intended more for the dancefloor, channelling an Afro-Disco vibe, but looking to Western Kenya for its distinct Oruto sound by Boaz Jagingo. The image is that of a busy CBD in Kenya, translated by a percussive battle between Abaki Simba and Gervais Katumba. This is a track to groove to."
    },
    {
     type: 'question',
     title: "So how does the dynamic work in the group with nine of you? Is it led or does everyone have an input?",
     answer: "The concept was brought together by ADA Records, but the songwriting was truly collaborative. Each track required the skills of different lead players, and once all the musicians were in the room together and the concept clarified, the song writing came together democratically, with each of the musicians having an equal say in the direction of each track."
    },
    {
     type: 'question',
     title: "What is the band’s vision in terms of creating an earspace for more alternative Kenyan music?",
     answer: "With so many re-releases of great live music from the 70s and 80s, the concept of The Pyramid Project was to write and release live music that channeled the same energy and live excitement as the golden era, but with a contemporary take on it. The music is not strictly aligned with any specific Kenyan genre, but instead is free, bringing musicians from all parts of Kenya together to present a contemporary and alternative take on Kenyan live music today. This music is not necessarily for the mainstream Kenyan market, but more as an artistic comment, displaying the true talent and diversity of Kenyan music."
    },
    {
     type: 'question',
     title: "What would be a dream collaboration for the collective?",
     answer: "All the band members would have a different answer for this and there are way too many Kenyan and international producers that we would love to work with. However, there is another release in the wings, with a different selection of Kenyan artists, hold tight for more info. But to try and answer the question, the Godfather of contemporary, alternative music from Kenya today is Blinky Bill, so Bill if you like what you hear, give us a call!!!"
    }
   ],
   footer_links: [
    {
     name: 'Purchase on Bandcamp here',
     url: 'https://pyramidprojectfeatcontours.bandcamp.com/album/mangroves-ep'
    },
    {
     name: 'Follow ADA Records here',
     url: 'https://www.instagram.com/adarecordske'
    },
    {
     name: 'Follow Tanya Akinola here',
     url: 'https://www.instagram.com/laurynlikethehills_'
    }
   ]
  },
  {
   type: "article",
   short_name: 'AGAINST ALL ODDS',
   name: 'CHANNEL U & AGAINST ALL ODS: IN CONVERSATION WITH NICO TYLER JAMES',
   isSingle: false,
   credit_illu: '',
   author: 'Tochi Chelsea',
   date: '11/13/2020',
   illus: 'articles/nico/nico.jpeg',
   introduction: "SBTV, GRM Daily and Mixtape Madness have become household names in the Grime and UK Rap scene, but before them was their forefather - Channel U. Beginning in 2003, the channel provided a platform for up and coming artists in underground genres such as Grime. From Wiley to Bashy, there was nowhere else you could find a space as dedicated to fresh Black talent as Channel U.<br><br>The platform was integral to the popularising of bangers such as Lethal Bizzle's Forward, Kano's P's & Q's and Dizzee Rascal's I Love U. Following its name change to Channel AKA, the channel stopped being broadcast in 2018 and Grime lovers especially have had their Channel U nostalgia confined to hazy memories.<br><br>However, the channel is now making its return. After two years off of the air, Channel U is \
    relaunching with the premier of the first ever Grime-film Against All Odds. With star-studded cast \
    members including Richard Blackwood, Jammer and Ghetts, Grime and lovers of the culture are \
    anticipating its release. The film follows the plight of young rapper MC Active, played by Nico \
    Tyler James, as he struggles to prove his stake in the Grime scene. \
    Ahead of the premier, Black Bandcamp spoke with Nico about his acting career and his \
    relationship with Channel U and Grime:",
   questions: [
    {
     type: 'question',
     title: 'Tochi: When did you first begin acting and how did you know it\'s what you wanted to do?',
     answer: 'Nico: Acting was the first thing I ever wanted to do growing up. I used to, and still do, idolise Will Smith and Denzel Washington. I think acting first sparked my interest when I was 7 years old, if I had to put an age on it.'
    },
    {
     type: 'question',
     title: 'How did the opportunity to play MC Active in Against All Odds come about?',
     answer: 'Well I\'ve known Femi (director of Against All Odds) since I was about 13-14 years old, maybe even younger. I starred in a short film that he wrote and directed at the beginning of his career and this is where we first met, so I\'ve actually known him for a long time. When the opportunity came about he gave me a call asking me to audition and now here we are!',
    },
    {
     type: 'question',
     title: 'What was the hardest part about filming for you?',
     answer: 'There\'s a lot of waiting around when on set and I\'m very impatient so I found that quite draining. I love getting in front of the camera and doing my thing, but the waiting part is not ideal.'
    },
    {
     type: 'question',
     title: 'Are there any similarities between you and MC Active?',
     answer: 'I would say there are a few similarities between us. MC Active is young, fearless and super passionate about what he does, and I am too. I\'d always been pitted against olders in my area too which was daunting at times, but the difference with Active is that type of competition doesn\'t phase him at all.'
    },
    {
     type: 'question',
     title: 'What did Channel U mean to you when it was first on air and how do you feel about it making a return?',
     answer: 'Channel U meant a lot to me. It gave me hope for the UK scene and introduced me to British artists I wouldn\'t have been exposed to if not for the channel. It gave those with an urban identity a platform to showcase our culture and it was definitely the first of its kind, there was nothing else like it.'
    },
    {
     type: 'question',
     title: 'Against All Odds is the first ever Grime film, do you think this is one of the ways the genre can be kept alive?',
     answer: 'I do! I think Grime has played a massive part in shaping UK music today. I can even hear similarities in genres like UK Drill today; it\'s like a slower version of grime almost.'
    },
    {
     type: 'question',
     title: 'Who are your favourite grime artists of all time?',
     answer: 'This is tricky for me. I would say I have favourite moments rather than artists. For example, Kano Vs Wiley\'s Lord of the Mics was legendary, as was Ghetts vs P Money - both are my favourite clashes of all time. Grime produces loads of amazing moments.'
    },
    {
     type: 'question',
     title: 'How was it working alongside Black British legends such as D Double E and Richard Blackwood?',
     answer: 'I was in awe the whole time to be honest. D Double E is a super legend! Working with Richard was very different, or rather special. He plays MC Active\'s dad in the film and he offered so much insight both on and off set. The encouragement he offered alone was invaluable and it\'s not everyday you get to work with the first Black comedian to have his own TV show in the UK!'
    },
    {
     type: 'question',
     title: 'What advice would you give to actors younger than yourself?',
     answer: 'Stay focused, have tunnel vision and be relentless. It’s a hard grind but if you stay on track and you put your all into it you will get where you want to be sooner rather than later.'
    },
    {
     type: 'question',
     title: '',
     answer: 'Against All Odds will premiere on Channel U on the 13th November.'
    }
   ],
   footer_links: [
    {
     name: 'Follow Nico Tyler James here',
     url: 'https://www.instagram.com/navtyler_/'
    },
    {
     name: 'Follow Tochi Chelsea here',
     url: 'https://www.instagram.com/tochichels/'
    }
   ]
  },
  {
   type: "article",
   short_name: 'MORGAN MUNROE IS UNRAVELING THE LAYERS OF HER ARTISTRY',
   name: 'MORGAN MUNROE IS PEELING BACK LAYERS OF HER ARTISTRY ON \'LAYERS 0.5\'',
   isSingle: false,
   bandcamp_id: '3508943609',
   bandcamp_link: 'https://morganmunroe.bandcamp.com/album/layers-05',
   credit_illu: 'Ruma',
   author: 'Lauryn Njeri',
   date: '11/13/2020',
   illus: 'articles/munroe/munroe.jpg',
   introduction: "UK singer-songwriter, <b>Morgan Munroe</b> makes a powerful debut with the release of her long awaited EP, \"<b>Layers 0.5</b>\". <br><br>Moving through the passionate encounters of an empowered, independent woman navigating love and self worth, Morgan is unapologetic in letting her soft sultry vibe ooze effortlessly through the 5-track EP. \"<i>All of these songs are written from true and personal experiences,</i>\" Morgan explains. \"<i>Five songs that show five different layers to me, musically and personally.</i>\"<br><br>Released on the 13th of November, Layers 0.5 is a collection of easily enjoyable bops graced with Morgan’s silky harmonies and relatable themes.",
   questions: [
    {
     type: 'question',
     title: "How have you been keeping yourself busy all through the global pandemic?",
     answer: "I’ve been on Instagram a lot lol, taking part in lotsss of music challenges and competitions on Insta-live’s. I’ve been finding creative new things to do… I had a go at making my own music video, I also started making clothes, decorating the house, and a lot of Netflix!"
    },
    {
     type: 'question',
     title: "The title to your EP is ‘Layers 0.5’. Tell us a little more about it?",
     answer: "I called my EP layers because I feel like every song shows a different layer of my personality and also highlights a different musical element of my music."
    },
    {
     type: 'question',
     title: "What are some of the lessons you learnt from your mother that led you to write 'mama taught me'?",
     answer: "Never give up, own it, don’t cry over boys who aren’t worth it, put yourself first."
    },
    {
     type: 'image',
     path: "articles/munroe/munroe2.jpg",
     author: 'Ruma'
    },
    {
     type: 'question',
     title: "I'm keen to know about what inspired the track \"Who The F@#*\".",
     answer: "F*** boys, lol! I think at the time I was very bored with my love life and wanted to do something about that but all I was being met with was unwanted attention from all the wrong boys and never the ones who I actually wanted it from."
    },
    {
     type: 'question',
     title: "With this being your debut EP what are you hoping your listeners take from it?",
     answer: "I want my listeners to get to know me, to peel back the layers of my artistry and find something within my music that they can connect with."
    },
    {
     type: 'question',
     title: "Do you have a favourite record off this body of work? Why that specific track?",
     answer: "Take me home – it’s my personal banger. Allowed me to explore a more sultry side which I usually keep hidden, since this song I think I’ve felt more comfortable in expressing this side through my music."
    },
    {
     type: 'question',
     title: "Tell us one thing about yourself that no one would expect?",
     answer: "I have a pet tortoise named Shelly."
    },

   ],
   footer_links: [
    {
     name: 'Purchase on Bandcamp here',
     url: 'https://morganmunroe.bandcamp.com/album/layers-05'
    },
    {
     name: 'Follow Morgan Munroe here',
     url: 'https://www.instagram.com/morganmunroeofficial'
    },
    {
     name: 'Follow Lauryn Njeri here',
     url: 'https://www.instagram.com/laurynlikethehills_'
    }
   ]
  },
  {
   type: "article",
   short_name: 'III META: ALXNDR LONDON’S ASCENT TO SELF ACTUALIZATION',
   name: 'III META: ALXNDR LONDON’S ASCENT TO SELF ACTUALIZATION',
   isSingle: false,
   bandcamp_id: '313033869',
   bandcamp_link: 'https://alxndrlondon.bandcamp.com/album/iii-meta',
   credit_illu: 'Mimi Yvonne',
   author: 'Lauryn Njeri',
   date: '11/13/2020',
   illus: 'articles/alxndr/alxndr.jpg',
   introduction: "Drawing energy from his Yoruba Heritage, London based singer - songwriter <b>Alxndr London</b>, releases an minimalist sci-fi-inspired odyssey, <b>III META</b>. The 3-track project reflects Alxndr transversing introspective themes of existence and rebirth, realisation and acceptance.<br><br>\
    Produced collaboratively with East London-based production duo, <b>Bon</b> we see Alxndr employ experimental rhythms to which he adds a paradox of haunting yet angelic lyricism. The use of his mother's tranquil tones of praise and worship at the end of each track give the air of a welcomed calm after a storm.<br><br>\
    Prior to 2019’s IV MERIN, Alxndr released three EPs in as many years, first emerging onto the scene with 2016’s '<i>A Long Time Ago</i>' which was followed up by 2017's '<i>Today</i>' and 2018's '<i>2023</i>'. All lying comfortably within spiritual soul, electronica and experimental music, the enigmatic creator continues to unfold sonically on his intimate journey to 2023.",
   questions: [
    {
     type: 'question',
     title: "2020 has been quite an eventful year for all of us. How has it been for you?",
     answer: "Eventful. I’ve pretty much kept my head down and tried to get through this 'new normal' - harder said than done. Started a new role working with homeless adults during the height of the pandemic. Grateful I’m here. Grateful for the opportunity to work with the delightful Bon, who produced III META."
    },
    {
     type: 'question',
     title: "Your music carries elements picking from various genres. How would you describe your sound to someone who has never listened to you before?",
     answer: "I call it soul but I feel like that could confuse someone whose idea of a Black man singing soul is Ray Charles or James Brown because of all the influences I lean on.<br><br>I'm from London - a beautiful melting point. I’m inspired by the magical preachers in the Black church, gospel choirs/quartets and all the legends before who transmuted gospel music into the popular secular music it is today."
    },
    {
     type: 'question',
     title: "III META explores themes of existence and rebirth, realisation and acceptance. What brought about these particular elements?",
     answer: "In 2013 I realised that I was a bot of a mess and that to be born anew, I would first have to die - by killing the old me. I decided to document this \"journey to death\" as Alxndr London, over the next 10 years until 2023.<br><br>I killed my old mindset and began taking accountability for my actions. I knew I had to do better so I did. III META is also about escaping Earth, because it’s definitely a mess."
    },
    {
     type: 'question',
     title: "Your mother features on this body of work singing Yoruba 'praise and worship'. What role does spirituality play in the making of your music?",
     answer: "So cool innit? Soul music for me isn’t just elements of African-American gospel, jazz, rhythm and blues etc. Soul is an expression of my yester-fears and hopes for a better tomorrow. The spirituality in all this cannot truly be removed - to do so is to unravel the very fabric of music."
    },
    {
     type: 'image',
     format: 'cover',
     path: "articles/alxndr/alxndr2.jpg",
     isArtwork: true,
     author: 'Zaur'
    },
    {
     type: 'question',
     title: "Walk me through III META in regards to your journey to 2023?",
     answer: "III META highlights that I have 3 years until 2023. I feel ‘free’ and I know change is coming. Each year I release a project - it’s my way of doing my bit and leaving the rest in the hands of the universe."
    },
    {
     type: 'question',
     title: "The cover art for III META carries a lot of depth. Would you care to share about it and what inspired it?",
     answer: "The cover was created by an amazing artist called Zaur. It depicts my journey through death and rebirth, simultaneously. Both exist in perpetual harmony. Dotted around and hidden in the art are some of my demons too."
    },
    {
     type: 'question',
     title: "What is next for you after releasing this EP?",
     answer: "As of 4th November 2020, a second lockdown is underway in London. Not sure whether I’ll make it to the end of 2020, let alone 2023..."
    }
   ],
   footer_links: [
    {
     name: 'Purchase III META here',
     url: 'https://alxndrlondon.bandcamp.com/album/iii-meta'
    },
    {
     name: 'Follow Alxndr London here',
     url: 'https://www.instagram.com/mxiiixm'
    },
    {
     name: 'Follow Lauryn Njeri here',
     url: 'https://www.instagram.com/laurynlikethehills_'
    }
   ]
  },
  {
   type: "article",
   short_name: 'BLESSED: NEW SOUNDS',
   name: 'BLESSED: NEW SOUNDS',
   isSingle: false,
   bandcamp_id: '694552560',
   bandcamp_link: 'https://blessedtunes.bandcamp.com/album/music-is-the-medicine',
   credit_illu: 'Leo Harunah',
   author: 'Tanya Akinola',
   date: '11/13/2020',
   illus: 'articles/blessed/blessed.jpg',
   introduction: "BLESSED is the genre-bending African-Australian artist at the forefront of shaping the exciting new sounds emerging from Sydney. Fusing elements of hip hop, indie, rock and R&B all through his trippy, kaleidoscopic lense, the result is an inimitable sound that has seen him play alongside artists like Matt Corby and Childish Gambino, and have tracks featured on Netflix's 'On My Block' as well as on the NBA 2k20 video game.<br><br>\
   This Friday November 20th sees BLESSED release a full length mixtape titled 'Music Is The Medicine' on his new label GODSPEED in collaboration with the French label and publishing company 404 HUMAN. Being his most fully conceptualized and intimate project yet, he describes the LP as \"a collection of songs that are tuned to different frequencies that subconsciously target different emotions. It's an introspective piece created in a time where I needed music most.\"<br><br>\
   Black Bandcamp had a chat with BLESSED about his mixtape, his musical influences and the music community in Sydney.",
   questions: [
    {
     type: 'question',
     title: "How are you and how have you been spending your time during this semi-shutdown period?",
     answer: "I'm groovy thank you. Honestly I've been very productive reading, writing and researching the forgotten Black history and the odd conspiracy here and there."
    },
    {
     type: 'question',
     title: "You're based in Sydney where there's a lot of exciting stuff happening musically, especially within hip hop. I see you've collaborated with Manu Crooks and Mike Akox who are both creating really great hip hop/afrobeats, and like a lot of African-Australian artists, blending their dual cultures and experiences to create something fresh. How do you view this and how do you feel about the music community in Sydney?",
     answer: "Manu and Mike are like my brothers. I genuinely only create and collaborate with people I love and are fans of, but it's definitely exciting to see such growth and diversity going on in the music scene in Australia as a whole and Sydney being at the forefront of the culture."
    },
    {
     type: 'question',
     title: "I can hear a wide array of influences in your music. I'm curious to know who or what you were listening to growing up and who you look towards now for musical inspiration?",
     answer: "Growing up in Australia I listened to whatever my friends were into like Blink 182, Good Charlotte, Yellowcard but after discovering hip hop I was obsessed with Kanye West. These days I tend to listen to a lot of music from the 70s, Jimi Hendrix and Led Zeppelin but I still keep up to date with the outliers of rap."
    },
    {
     type: 'question',
     title: "This is the first full release you're putting out this year. How has your creative process differed this time around, considering the circumstances with covid, racial inequality and civil rights protests and what generally feels like a global time of unrest?",
     answer: "This year has been a blessing for me, I've been able to look inward for answers and not out at the world falling apart. A lot of darkness has been brought to light, a lot of people are waking up to the truth of this ugly world and that collective consciousness has inspired my music and I'm sure creatives all over the world."
    },
    {
     type: 'question',
     title: "On your Twitter you have a pinned tweet about how you want to start a conversation about music and how it helps to soothe the soul, and your upcoming LP is called Music Is The Medicine. How do you think music can be a tool that helps us through difficult times?",
     answer: "Music is a form of escapism, there's a song for every situation. It can be a relatable message of past or present trauma, beats that move you or melodies that soothe you. Especially when it comes to the scientific makeup of sound and its frequencies that operate on the same frequencies as love, it can be used as a powerful tool to comfort you."
    },
    {
     type: 'image',
     format: 'landscape',
     path: "articles/blessed/blessed2.jpg",
     isArtwork: false,
     author: 'Leo Harunah'
    },
    {
     type: 'question',
     title: "Music Is The Medicine is coming out this November 20th. Can you tell us a bit about it?",
     answer: "Music Is The Medicine is a mixtape or a collection of songs that are tuned to different frequencies that subconsciously target different emotions. It's an introspective piece created in a time where I needed to music most."
    },
     {
     type: 'question',
     title: "How does it differ from your previous work?",
     answer: "This is my first body of work, my first cohesive project where I took the time to create music with a message. Artistically and sonically this piece stands out from the rest of my tunes."
    },
     {
     type: 'question',
     title: "The track with Amaarae, 'Count on Me' is one of my favourites off the mixtape - her voice just melts like honey over those crisp beats and your voices blend beautifully together. I'm a big Amaarae fan! How did that collaboration come about and can you tell us what it was like working with her on the track?",
     answer: "She's amazing aye. The collaboration came about through Kyu who is a partner on this project with his label 404HUMAN from France. Kyu also produces and collaborates frequently with Ama and was playing tunes from the project when I was in Paris. I fell in love with her voice and was able to connect virtually for 'Count On Me'."
    },
     {
     type: 'question',
     title: "There are a lot of powerful lyrics throughout the mixtape, especially on tracks like 'True To Me' and 'Something To Believe In'. Do you have any personal favourite lyrical moments on the album?",
     answer: "\"<i>Racing to the paper, don't do this for status, traitors tried to trade up, haters in my prayers</i>\"<br><br>Which speaks to the reasons why I do think this, and the attitude I carry towards anyone that has wronged me."
    },
     {
     type: 'question',
     title: "Now that live performances are allowed in Sydney again, what can people expect from your upcoming shows?",
     answer: "I haven't performed in 10 months so all the energy and angst being released on stage will be magical."
    },
   ],
   footer_links: [
    {
     name: 'Purchase Music Is The Medicine here',
     url: 'https://blessedtunes.bandcamp.com/'
    },
    {
     name: 'Follow BLESSED here',
     url: 'https://www.instagram.com/blessedtunes/'
    },
    {
     name: 'Follow Tanya Akinola here',
     url: 'https://www.instagram.com/tanyaakinola'
    }
   ]
  },
  {
   type: "article",
   short_name: "LIKE A MOTH TO A FLAME, RIVER MOON'S LIGHT",
   name: "LIKE A MOTH TO A FLAME, RIVER MOON'S LIGHT",
   isSingle: false,
   bandcamp_id: "3253241199",
   bandcamp_link: "https://saintdeepthroatxo.bandcamp.com/album/like-a-moth-to-a-flame-remixes",
   credit_illu: "Jonty Knight",
   author: "Crystal Mioner",
   illus: "articles/rivermoon/rivermoon.jpg",
   introduction: "Geographically, Detroit and Cape Town are 9,000 miles apart but when River gets on the phone, I feel like \
    we're joined at the hip, the warmth from her voice transmitted with ease across the Atlantic. It's a Leo thing,\
    that ability to radiate and draw people into your universe. A quick glance at the collaborators for <b>LIKE A MOTH TO \
    A FLAME</b>, their latest remix album, shows how far reaching Rivers galaxy goes. With tracks from Angel Ho,\
    Ase Manual, Bapari, Byrell The Great, and Diego Hauz, River Moon provides keen insight into who's who of the \
    black diasporic club scene.",
   questions: [{
    type: "question",
    title: "",
    answer: "\"<i>I told them, you know, I'm giving you a pack, do whatever you want on it. Like, however you want to change the \
     song, change it. If it sounds like a completely different song, I don't care. Just like, make it yours, you know? \
     And these are like people that I know would not fuck up my song,</i>\" says River in response to my questioning of how the process went to obtain the remix.<br><br>\
     Existing loosely in between New York and South Africa, she has built a strong network of producers. \
     Trust is an essential part of the independent artist experience. That and the ability make things happen. \
     She's self released all of her music over the past 8 years she's been producing. \
     \"<i>I'm scared of labels...I don't want to like, owe people and I don't want to be owned. I'm not going to be \
     no slave. I want my freedom. I don't want no white man controlling me,</i>\" she says in reference to an infamous electronic label who tried to sign her. \
     \"<i>I burned that bridge but may all the bridges I've burnt light my way.</i>\"<br><br> \
     River hovers in the sweet spot between uncompromising but not stagnant. \
     From her early RnB flips to her latest contemplative experimental release <b>MARTYR</b>, which <b>LIKE A MOTH TO A FLAME</b> first appears on, she is creating a legacy uniquely her own.<br><br> \
     \"<i>That's why like, I always say, like, I have no desire to be famous. Yeah, I just want my music to be heard. And I just want to be, you know, remembered, like, I want to leave a legacy. \
     I don't want to be like, you know, popcorn bitches popping up this year then they're gone. \
     Yeah, no, I just, I need to create something that's more of like, it was a moment in time. You know, you could read about it in history books or whatever.</i>\""
    },
    {
     type: "image",
     path: "articles/rivermoon/rivermoon2.jpg",
     author: "Jonty Knight",
     editor: '3rdeyechakra'
    },
    {
     type: "question",
     title: "",
     answer: "In addition to creating her own moment, she’s also looking out for her community and has aspirations of building a formal music family. \
     \"<i>I feel like now, or in the next year or two, I would like to start something like, not a label, but like more of a collective of black people who are doing these techno and leftfield and \
     experimental electronic music and stuff like that.Cuz there's really no platform for us.</i>\"<br><br>\
     She states, \"<i>I think mostly just community, it comes down to like community because we only have us. \
     I don't want to rely on you know, the powers that be. I feel like when we're together, \
     we're more powerful. And I want to be, I just want the kids who think like, Oh my god, maybe I can't do this \
     because I didn't grow up with money. You know, I just want them to feel like it's possible. You know ? You could, \
     you could be black and you could make any type of music because most of this music, all this music, is fucking black music.\""
    }
   ],
   footer_links: [
    {
      name: "Purchase LIKE A MOTH TO A FLAME - REMIXES on Bandcamp here",
      url: "https://saintdeepthroatxo.bandcamp.com/album/like-a-moth-to-a-flame-remixes"
    },
    {
      name: "Follow River Moon here",
      url: "https://www.instagram.com/saint.deepthroat"
    },
    {
     name: 'Follow Crystal Mioner here',
     url: 'https://www.instagram.com/crystal.mioner/'

    }
   ]
  },
  {
   type: "article",
   short_name: 'BLACK BANDCAMP DECEMBER PICKS: EUROPE',
   name: 'BLACK BANDCAMP DECEMBER PICKS: EUROPE',
   bandcamp_link: "",
   bandcamp_id: "",
   credit: null,
   author: null,
   date: '08/07/2020',
   illus: 'articles/dec2020/dec2020.jpg',
   top_desc: "December’s Bandcamp Friday sees us reach out to some of our favourite DJs residing on the European continent. Have a look for some stellar music, all found on our Black Bandcamp database.",
   links: [
   ],
   questions: [
    {
     type: 'bandcamp_picks',
     title: 'Carista',
     description: 'Music curator, DJ and founder of <a href="https://unitedidentities.bandcamp.com" target="_blank">United Identities</a>, born, bred and based in Utrecht, The Netherlands with a monthly show on NTS Radio.',
     links: [
      {
       title: 'Jay Sound - Flamingo Dance',
       description: "That perfect 80's funk with lush sounds brings me back to those summer days during sunset. Detroit native Jay Sound's - all of his productions are just straight up fire!",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2617831924/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=2744954044/transparent=true/" seamless><a href="https://jaysound.bandcamp.com/album/playlist-to-paradise">Playlist To Paradise by Jay Sound</a></iframe>'
      },
      {
       title: 'Osagie - Money Bags',
       description: 'Bad boy tune by Philadelphia\'s very own Osagie taken from his Sagacity II EP.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=326930774/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1729703451/transparent=true/" seamless><a href="https://osagie.bandcamp.com/album/sagacity-ll">SAGACITY ll by OSAGIE</a></iframe>'
      },
      {
       title: 'Ingi Visions - Visionair Tu',
       description: "Brothers Samuel Deep and Julian Alexander are Ingi Visions from the iconic Utrecht-based collective Slapfunk. This one is a timeless slammer and worth listening/playing out loud whenever you got the chance.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3271753897/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=2510258814/transparent=true/" seamless><a href="https://slapfunk.bandcamp.com/album/ingi-visions-ingi-visionair-ep-slpfnk023">Ingi Visions - Ingi Visionair EP - SLPFNK023 by SlapFunk Records</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Suze Ijó',
     description: 'Suze Ijó, lover, DJ, dancer and radiomaker from Rotterdam, The Netherlands. One of the forces behind United Identities, the label founded by Carista. Always selecting my music by feelings and moods.',
     links: [
      {
       title: 'The Neighbourhood Character - Unacceptable Model (4 A dance track)',
       description: 'My dearest friend Ari made this! Ari is a talented producer/DJ from Berlin. On this track Ari creates a peaceful atmosphere but with a psychedelic hint. I think this is one of the most refreshing sounds I\'ve heard in a long time! Don\'t forget to check out The Neighbourhood Character\'s other work and collaborations!',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3651240217/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=2514743374/transparent=true/" seamless><a href="https://theneighbourhoodcharacter.bandcamp.com/album/there-will-be-magic-ep">There Will Be Magic EP by The Neighbourhood Character</a></iframe>'
      },
      {
       title: 'Ian Fink - full [aries mix]',
       description: 'Ian Fink is a key player from Detroit. Ian\'s music gives me hope for the future of House and Techno. It\'s raw and emotional, his music always has a message to tell and most importantly it sounds great! \'full [aries mix]\' is a beautiful innovative house track with a nod to the past.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3069262568/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1837443718/transparent=true/" seamless><a href="https://ianfink.bandcamp.com/album/full">FULL by Ian Fink</a></iframe>'
      },
      {
       title: 'Frankie Reyes (Gabriel Reyes-Whittaker a.k.a. GB, Gift & Blessed, The Abstract Eye)',
       description: "I love how Frankie Reyes explores his Puerto Rican roots with his synthesizer. He creates familiar sounding vulnerable melodies and takes you to a place you didn't know you were longing for. I instantly connect to his sounds through my own Curacao roots and I think many from the diaspora will dig the vibes. To me his music is very calming,soothing and vaguely familiar.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2531816603/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=2930024917/transparent=true/" seamless><a href="https://frankiereyes.bandcamp.com/album/originalitos">Originalitos by Frankie Reyes</a></iframe>'
      },
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Imani',
     description: 'Imani (she/her) is a multi-faceted artist from Switzerland. In her work she experiments with sound, memory and perception, centering Blackness in her work in an effort to uplift and normalize different Black experiences.',
     links: [
      {
       title: 'Azu Tiwaline - Draw Me A Silence Part. I',
       description: "Azu Tiwaline does an amazing job at creating a rich and deep soundscape, bringing rhythms stemming from her roots to the forefront, interlacing them with elements of speech. The track \"Until the End\" feels like I'm under water and being transported to distant futures, all the while being guided by an omnipresent voice, guiding me through the depths of the ocean",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1099319844/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://azutiwaline.bandcamp.com/album/draw-me-a-silence-part-i">Draw Me A Silence Part. I by Azu Tiwaline</a></iframe>'
      },
      {
       title: '[MONRHEA] - S P A C E through T I M E',
       description: '"Space through time" is, in the words of the artist [MONRHEA] themselves, an ambient meditative track. Listening to it, the sounds seem to gently break through all thought and allow the mind and the body to release.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=4126966007/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://monrhea.bandcamp.com/track/s-p-a-c-e-through-t-i-m-e">S P A C E through T I M E by [MONRHEA]</a></iframe>'
      },
      {
       title: 'Purple Hurt - Postcards from the Sun',
       description: "The beginning of this song starts with the sunrise. \"Postcards from the Sun\" reminds me of Icarus as they fly towards the sun with a painful outburst as it's getting too hot and finally ending on a peaceful note, as they accept their death and plummet into the ocean.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2637358034/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://purplehurt.bandcamp.com/album/postcards-from-the-sun">Postcards from the Sun by Purple Hurt</a></iframe>'
      },
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'AYBEE',
     description: "I am AYBEE. Chief Alchemist of <a href=\"http://deepblakmusic.bandcamp.com/\" target=\"_blank\">Deepblak Recordings</a>.",
     links: [
      {
       title: 'AFTA-1 - Cosmic Snap',
       description: "Always on the lookout for this Brother’s work. There is a tranquil transcendence to what he does. He had been quiet for a time, but recently dropped a new project. A perfect counter melody to the frenetic nature of 2020.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=692190634/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=314550686/transparent=true/" seamless><a href="https://afta1.bandcamp.com/album/103120">103120 by AFTA-1</a></iframe>'
      },
      {
       title: 'Afrikan Sciences - Survivors',
       description: 'Dizzy Gillespie once said of Charlie Parker "Know him..know me". I have traveled many roads with this cat, yet he ceases to amaze. Any release from Eric should be regarded as a decree of the highest order.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1637858673/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://afrikansciences.bandcamp.com/album/survivors">Survivors by Afrikan Sciences</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Somatic Rituals',
     description: 'DJs & producers (Kombé, Mafou & Mukuna) functioning out of Basel, Switzerland and running the Somatic Rituals collective.',
     links: [
      {
       title: 'Martyn Bootyspoon - Buss Down (Xzavier Stone Remix)',
       description: 'One of our favourite remixes by our friend Xzavier Stone. Definitely a club banger and an interesting combination of bouncy 2000 hip hop and a vicious acid line.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2622180351/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=2318337832/transparent=true/" seamless><a href="https://modelfuture.bandcamp.com/album/martyn-bootyspoon-no-1-crush-remixes">Martyn Bootyspoon NO. 1 CRUSH REMIXES by Martyn Bootyspoon</a></iframe>'
      },
      {
       title: 'Millia Rage - hopper7',
       description: 'The first track we heard of Millia Rage. The percussion fueled tune is right in our lane, and we’re looking forward to hearing more from the Chicago producer.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=4277216872/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://milliarage.bandcamp.com/track/hopper7">hopper7 by Millia Rage</a></iframe>'
      },
      {
       title: 'Lamin Fofana - And All the Birds Sing Bass',
       description: 'Just beautiful textures and feels. The whole EP is great.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3551512510/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3373823273/transparent=true/" seamless><a href="https://laminfofana.bandcamp.com/album/blues">Blues by Lamin Fofana</a></iframe>'
      },
      {
       title: 'Anz - Loos In Twos (NRG)',
       description: 'A straight up U.K. banger. Unfortunately we only had the chance to play this once in a club before Switzerland went into lockdown again. Nevertheless the track ripped the floor apart.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1285057197/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1285045693/transparent=true/" seamless><a href="https://anzdj.bandcamp.com/album/loos-in-twos-nrg">Loos In Twos (NRG) by Anz</a></iframe>'
      },
      {
       title: 'Hagan - FWD',
       description: 'This tune has such a nice build up. We\'ve been playing this track for some while now, but it never gets boring.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3488846892/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3516903845/transparent=true/" seamless><a href="https://pushandrunmusic.bandcamp.com/album/roots">Roots by Hagan</a></iframe>'
      },
     ]
    },
   ]
  },
  {
   type: "article",
   short_name: 'IDMAN IS HERE AND DOWN FOR IT',
   name: 'IDMAN IS HERE AND DOWN FOR IT',
   bandcamp_link: "https://idman.bandcamp.com/track/down-for-it",
   bandcamp_id: "862102097",
   isSingle: true,
   author: 'Lauryn Njeri',
   illus: 'articles/idman/idman.jpg',
   date: '12/11/2020',
   introduction: "Canadian-Somali singer, songwriter, <b>Idman</b> makes an impressive debut with their first ever release, \"<b>Down For It</b>\". Defining themselves as genreless, Idman brings us along on their raw journey of self discovery as an artist.<br><br>Their hush vocal tones ravelled in grasping penmanship see Idman dripping in authentic flavour while digging deep into their relationship with self doubt, affirming that they are boldly kicking down any hesitation that stands in their way. With the help of hard hitting bass lines and an infectious hook, we get to experience Idman’s delicate yet striking energy.<br><br>Black Bandcamp had a conversation with Idman about their debut release, their journey in music and what more we can expect from them.",
   questions: [
    {
     type: 'question',
     title: 'Who is Idman?',
     answer: "I would say I am Idman and I would say that's a really hard question for anyone to answer. I'd say I'm getting to know myself and I think that's what's really cool about doing music right now, is trying to understand the nuances and complexities of who I am through word and sound."
    },
    {
     type: 'question',
     title: 'What has an average day been like for you during the global lockdown?',
     answer: 'An average day nowadays is really different than how it was in the early days of lockdown for sure. Nowadays it includes a lot of emails, maybe a few zoom calls, maybe checking on the homies, I’ve got a lot of hobbies so maybe tapping into one of those. Doing something for myself at some point is usually much much much appreciated but yeah that’s usually what a day looks like.'
    },
    {
     type: 'question',
     title: "Has your musical journey always been deliberate, or did it gradually evolve to what it's become ?",
     answer : "The steps that it's taken me to get where I am right now have though unpredictable come super organically. But I will say that the vision in creating it and wanting to share has always been very deliberate and consistent, for sure."
    },
    {
     type: "image",
     path: "articles/idman/idman2.jpg",
    },
    {
     type: 'question',
     title: 'Who are some of the artists that have been influential in finding your sound?',
     answer: "I think some of the artists that have been super influential in finding my sound are artists that I know view music as being a sonic experience that is genreless. I think Janelle Monae for sure, Prince for sure, I think about Tiwa Savage, I think about Sauti Sol, Pac yeah, so many people. Also, I would add that I don't think that I have figured out what my sound is either. I think I'm figuring it out but the comfort that I have in figuring it out is probably tributed to those artists."
    },
    {
     type: 'question',
     title: 'The lyrics on this body of work are very raw and self affirming. Do you mind sharing what led to the creation of this track? ',
     answer: "I had the first line in my head for a little bit and the first line made me feel really terrified to say out loud and I felt affirmed by that in a weird way. I have social anxiety, diagnosed and I think that something that makes me feel really grounded and in my body is doing things that challenge me and facing my fears head on and yeah, I think I feel like oh my god if I make this song I'll feel like a cornball but Imma be honest. I'm committed to doing the things that challenge those parts of me for sure."
    },
    {
     type: "image",
     path: "articles/idman/idman3.jpg",
    },
    {
     type: 'question',
     title: 'Being your debut release, this single carries a very intentional message. What else can we expect to hear on your upcoming EP "Risk"?',
     answer: "Expect to not have one cohesive sound for sure. I think that this body of work is me presenting to the world, I wouldn't necessarily say my rough drafts, but my current process for sure. I think it was an opportunity for me to figure out what I liked and what I wanted to listen to myself and I think it 's super different. No one song sounds like the other and I'm okay with that fact."
    },
    {
     type: 'question',
     title: 'When you create music, what would you like your listeners to take away from it?',
     answer: "I just aim for resonation. I feel like there’s something about music that feels like a shared experience. I think that if we didn't feel like that we’ d all be singing in our rooms and there’ s something to be said about wanting to do this thing and present it to folks and have this back and forth and I think my number one goal is resonation and positive resonation to be exact."
    }
   ],
   footer_links: [
    {
     name: 'Purchase on Bandcamp here',
     url: 'https://idman.bandcamp.com/track/down-for-it'
    },
    {
     name: 'Follow Idman here',
     url: 'https://www.instagram.com/idman.a/'
    },
    {
     name: 'Follow Lauryn Njeri here',
     url: 'https://www.instagram.com/laurynlikethehills_/'
    }
   ]
  },
  {
   type: "article",
   short_name: 'BUILDING A QUEER NATION: A RETROSPECTIVE',
   name: 'BUILDING A QUEER NATION: A RETROSPECTIVE',
   author: 'Deborah Findlater',
   date: 'TBA/12/2020',
   illus: 'articles/queernation/queernation.jpeg',
   credit_illu_all: "All photos by Luke Howard",
   introduction: "Moving together, breathing together, being together. All things many of us have missed in a year of club and rave closures. The importance of such, particularly for Black queer folks, is acutely felt; whether for wellbeing, income, community and much more. Although venue closures and the ever-expanding monster of gentrification have had an impact, London still remains home to a thriving Black queer nightlife scene with parties such as: Queer Bruk, Bootylicious, Let’s Have a Kiki, Nite Dykez and Faggamuffin; and collectives like Black Obsidian Soundsystem and BBZ, alongside a host of DJ’s playing at club nights across the city, notably Femmi-erect, 079me and Pxssy Palace. This stems from a rich legacy laid down by nights such as Precious Brown, Blessence, Liberté and Queer Nation, as recalled by DJ and sound artist, Ain Bailey, and artist, archivist and community organiser Ego Ahaiwe Sowinski. In this pivotal moment of breaking down harmful structures and coming together to build a more equitable future, what seeds have been planted that point us towards a better way of being? Through interviews with a selection of the Black DJ’s and ravers present at the parties, we reflect on seminal London club night Queer Nation and its impact.<br><br>\
          It was through a trip to San Francisco that founder Patrick Lilley came up with the name Queer Nation, after the infamous LGBTQ activist group. First founded in March 1990 in New York City by a group of activists who were also part of HIV/AIDS advocacy organisation, ACT UP, branches soon spread across the U.S. including to where Lilley visited friends who told him of the organisation. Due to the reclamation of a term that was still widely seen as derogatory and their direct-action tactics, Queer Nation caused a necessary stir in light of increasing homophobic violence. One particular action the San Francisco chapter undertook was a Halloween protest against two visiting fundamental Christian ministers who intended to carry out an ‘exorcism’ in the city, even forming the wittily named focus group, GHOST (Grand Homosexual Outrage at Sickening Televangelists). Inspired by this D.I.Y. punk approach, Lilley created the logo for the club night in a similar Xerox style.<br><br>\
          As well as the attitude, Lilley was influenced by another product from the States: the music. House formed the musical foundation of Queer Nation, something greatly intentional given how impacted Lilley had been by the renowned Paradise Garage in NYC with artists like Frankie Knuckles and Larry Levan. Previously in the late 1980’s, Lilley had run the club High on Hope in Camden with DJ Norman Jay focusing on a sound geared more towards soul, featuring prestigious guests such as Chaka Khan, Loleatta Holloway, Gwen Guthrie and En Vogue. The increase in tempo that came with 90’s led to a new stage in the evolution of house music and required a new, explicitly queer space to accommodate it.<br><br>\
          Opening in December 1990, Queer Nation first begun its life at The Gardening Club, Covent Garden. For the next 7 years it held down a regular Sunday night spot amassing a legion of loyal attendees. The Sunday session has all but ceased to exist in London with clubs like Plastic People closing, however it offered a unique experience and space. After it moved to a Saturday night, taking place at a variety clubs notably Substation South in Brixton, Union and Barcode both in Vauxhall up until 2018 giving it an impressive 28-year lifespan. During this time resident DJ’s Princess Julia, Supadon, Luke Howard and Jeffrey Hinton became infamous for consistently setting the musical tone of the night and maintaining its unique character. Its duration is one of the many reasons why it stands out as special. From it being a rare Queer night that centred on soulful house, to it drawing in renowned DJ’s and artists such as Little Louie Vega and Ultra Nate to many attendees finding lifelong friends, Queer Nation holds an iconic legacy. Creating a space that was intimate yet an experience that was expansive it deserves to be remembered and celebrated. <br><br>\
          We speak to DJ Paulette, Robert Shaw and Paul McLennon, who were all part of the Queer Nation community, gathering their cherished memories and experiences of the night.<br><br>\
          DJ Paulette first attended Queer Nation in 1994 after moving down to London from Manchester. Having known original line up DJ, Princess Julia from their time playing at the iconic Hacienda, their relationship deepened as well as with Luke Howard and Patrick Lilley, resulting in DJ Paulette playing the party herself a few years later. As both a raver and a DJ, she offers a unique perspective on the night. ",
   questions: [
    {
     type: 'question',
     title: '',
     answer: '<br><br>DJ Paulette: Queer Nation was about Black music. Songs, voices and dancing. It was about the dance floor. The uplifting vibe and environment.'
    },
    {
     type: "image",
     credit: "<i>Photo was taken with a phone provided by Paul Allard.<br> In order of appearance: Elliot Pinkett, DJ Harvey, Paul McLennon, Paul Allard</i>",
     path: "articles/queernation/queernation8.jpeg",
    },
    {
     type: 'question',
     title: 'Deborah: I\'m really just thinking about how it originally was on a Sunday, and just how spiritual house is.',
     answer: 'DJ Paulette: Totally. I feel like that about house because a lot of the house music that you listen to is gospel. Listen to the lyrics and they\'re coming from gospel. You know, the singers, whether it\'s Bebe and Cece Winans or Michael Procter, Michael Watford, even Barbara Tucker, Jocelyn Brown, they\'re all church singers, and they\'re bringing that kind of spiritual experience to play with their lyrics and their songs and their vocal delivery for house music. Sharon Pass who worked with J.M. Silk. All the original house. Frankie Knuckles, Robert Owens and Darryl D’Bonneau, singers like that. It was like mixing gospel church with house and so doing it on this Sunday was definitely that kind of religious experience without the church.'
    },
    {
     type: "image",
     path: "articles/queernation/queernation2.jpeg",
    },
    {
     type: 'question',
     title: "Deborah: I feel like the club is often a space for Black and queer people to experience that kind of congregation. And it's a very transcendental experience. It's very much like you're purging as well.",
     answer: "DJ Paulette: Totally! That’s dancing, the sweat, the purge, the expression, the release, the tension and release. You can watch black people dancing, like properly dancing to house music and there will be a point where you will raise your hands. It's like, am I receiving or am I releasing? Because in that position, you've got the two ways you're open, even just in like spiritual terms, like you said, transcendental. You're open. Your crown is open. Elevation- by Blaze, if you go listen to that song and he's saying the beauty of Elevation is that you can literally fly above the galaxy. I think they even had Blaze play at Queer Nation as well as Josh Milan and Kevin Hedges. That was the ilk of the DJ’s that were playing."
    },
    {
     type: 'question',
     title: "Deborah: I'm really struck by the feeling of it because obviously in this period of time where we can't rave, you realise how vital it is for your nourishment as a person. How did you feel afterwards? Like going into the week? Because it was a weekly night",
     answer: "DJ Paulette: Yeah, it was every Sunday. Because of licencing being different anyway, your Sunday clubbing always finishes by midnight and it never goes on super, super late, so you can be at work on Monday morning no problem. I don't go to church. I'm not a church person. I have my own church. Music is very much my thing. Whenever I went to Queer Nation and then later it was Lazy Dog or Faith or Sunday Sonic or one of those Sunday clubs for soulful house music, I always felt like I had this big release and sometimes a revelation if I've heard this new tune and I've got down and I've surprised myself with a move or a jump or spin or something, and I've gone like, yeah! I actually did get into it so deep that I lost myself for a moment in the music. And I love that. And I really did feel Sunday clubbing and Queer Nation set me up for the week."
    },
    {
     type: "image",
     path: "articles/queernation/queernation3.jpeg",
    },
    {
     type: 'question',
     title: "Deborah: It's so good to talk about dancing and congregation and movement with you, because I feel like that space is so essential for us as Black people because, Monday to Friday, you're going through whatever you're going through, you’re in work etc. and you need this release, this receiving. With phones and social media, we’re in our heads a lot but nothing beats movement and what you can actually do with your body in a space.",
     answer: "DJ Paulette: Going through lockdown and I'm kind of looking at my body, how it's changed in the last few months and I'm wondering why it's changed then I thought it's because I'm not dancing. And dancing is key, and that brings it back very nicely to the Queer Nation experience, because dancing was the centrepin. I used to really always enjoy connecting with anybody on that dance floor that could match my steps and that could do better because it always encourages you to do better, to go further. It’s a whole other conversation when you start to dance with somebody, it’s a whole way of communicating. [As a DJ] I'd spend the week going through records, thinking what will have the best and most desired effect. It’d generally be the records - I always had my two best Queer Nation clubbing friends, Sean and Alex in my head - that would make them jump. We had a way of being very coordinated on the dancefloor.",
    },
    {
     type: 'question',
     title: 'Deborah: Dancing like that is very call and response, referring back to the church',
    },
    {
     type: "image",
     path: "articles/queernation/queernation4.jpeg",
    },
    {
     type: 'question',
     answer: "<br><br>Robert Shaw is a long standing friend of DJ Paulette, having met at seminal gay night Flesh at the Hacienda. As a raver and regular attendee across venues, he holds the night close to his heart, having a number of memorable experiences of it.<br><br>",
    },
    {
     type: 'question',
     title: 'Deborah: What made Queer Nation stand out as a club night for you?',
     answer: 'Robert: The music! The DJ’s really knew their stuff and the music was excellent every time. I can’t think of another gay club that was playing the same genre of house music they played as other clubs tended to play much harder house. Even when the Queer Nation DJ’s played at other venues their music changed which for me made Queer Nation more special and unique. I had so many good nights, the music, the crowd all helped to keep it special for as long as it was.'
    },
    {
     type: "image",
     path: "articles/queernation/queernation5.jpeg",
    },
    {
     type: 'question',
     title: 'Deborah: Why was it so important to you and the other Black ravers?',
     answer: 'Robert: I think Queer Nation became more important to Black ravers when it went to Substation South from the Gardening Club in Convent Garden. When it was at the Gardening Club it was on a Sunday night, and my recollection was the audience wasn’t predominately Black. This changed when it moved to Substation South, as it was on a Saturday in Brixton before the area became gentrified, so it was easy to access for many Black ravers who lived in or close to the area. If truth be told, Substation South was a dive, but it was unpretentious which set it apart from some of the other clubs at the time, especially those in the west end. There was also Black door staff which helped Black ravers feel more welcome than other clubs.'
    },
    {
     type: "image",
     path: "articles/queernation/queernation6.jpeg",
    },
    {
     type: 'question',
     answer: "<br><br>For Paul McLennon a friend of one of the party’s resident DJs, his Queer Nation journey began in 90/91. Despite not living in London at the time, the night would be an absolute must on weekend visits.<br><br>"
    },
    {
     type: 'question',
     title: '',
     answer: "Paul: It was a whole kind of new experience for me. It was a small intimate space and it was populated by people who really loved the music. A really fabulous, all-inclusive sound. They were more interested in pushing forward that community spirit and just wanted people to have a great time.\
         I have made friends who I'm still in contact with. It was a fresh outlook, a way to drive into the week and give you some kind of inspiration. Yeah, inspirational. The night was inspirational. That's the word!"
    },
    {
     type: 'question',
     title: 'Deborah: Is there anything that you think from that time people could take forward for queer nights?',
     answer: "Paul: Just a spirit of being together and oneness, looking out for your fellow human beings. And being gracious to whoever's around you and realising that people are actually suffering and kind of trying to bring them up."
    },
    {
     type: "image",
     path: "articles/queernation/queernation7.jpeg",
    },
    {
     type: 'question',
     answer: "<i>Deborah Findlater is an artist, filmmaker, writer and DJ from London. Her work explores issues surrounding working class Blackness in Britain, Black Womxnhood and queerness. Under her DJ moniker, Pepper Coast, she is committed to playing dance, electronic, bass & drum heavy sounds from across the African diaspora. She is a part of London based QTIBPOC soundsystem and collective Black Obsidian Soundsystem (B.O.S.S.).</i>"
    }
   ],
   footer_links: [
    {
     name: 'Follow Deborah Findlater',
     url: 'https://www.instagram.com/pepper_coast/'
    }
   ]
  },
  {
   type: "article",
   short_name: 'BLACK BANDCAMP FEBRUARY PICKS: TANZANIA',
   name: 'BLACK BANDCAMP FEBRUARY PICKS: TANZANIA',
   bandcamp_link: "",
   bandcamp_id: "",
   credit: null,
   author: null,
   date: '08/07/2020',
   illus: 'articles/jan2021/jan2021.jpg',
   top_desc: "For this month's Bandcamp Friday, we hit up creatives in Tanzania to find out who their top Black Bandcamp discoveries and picks of the month are.",
   links: [
   ],
   questions: [
    {
     type: 'bandcamp_picks',
     title: 'MVNSA',
     description: "I'm an artist, producer, and model from Niger that grew up in Tanzania. ",
     links: [
      {
       title: 'Fatoumata Diawara - Makoun Oumou',
       description: "From the first few guitar notes Fatoumata perfectly set's the tone of this buttery smooth song. Her vocals continue to enhance the experience by introducing emotion and soul to the instrumental. The quality of production on this song makes it easily digestible, and it can quickly put the listener in a trance.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=1924703697/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://vamusic2.bandcamp.com/track/fatoumata-diawara-makoun-oumou">Fatoumata Diawara - Makoun Oumou by Fatoumata Diawara</a></iframe>'
      },
      {
       title: 'Salif Keita - Barayé',
       description: "On this song the golden voice of Africa continues to live up to his name by delivering a sound only he is capable of creating. Barayé is rich in instruments, each one contributing its own element to making Barayé the groovy, psychedelic experience that it is. Salif Keita's voice effortlessly elevates the song by delivering pain through his vocal tone and delivery.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=1275754003/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://salifkeita.bandcamp.com/track/baray">BARAYÉ by Salif Keita</a></iframe>'
      },
      {
       title: 'Wizkid - No stress',
       description: "The great vibes of this song are immediately introduced from the very first chord. Once the percussion starts it's almost impossible to resist wanting to get up and dance. This song is like an imaginary vehicle that takes me to the beach, with a silk shirt on catching a whine.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2382973502/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3110376684/transparent=true/" seamless><a href="https://wizkidmusic.bandcamp.com/album/made-in-lagos-explicit">Made In Lagos [Explicit] by WizKid</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Salma Munde',
     description: "I am a Musician and Graffiti Artist from Tanzania. I create music for the unapologetically afro futuristic person of the 21 century.",
     links: [
      {
       title: 'To Li - Jojo Abot',
       description: 'Jojo Abot is an all time favorite of mine, not only is she creating amazing electronic and alternative music but she makes sure it is unmistakably African in the process and that is very admirable.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3926583073/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=397180995/transparent=true/" seamless><a href="https://jojoabot.bandcamp.com/album/fyfya-woto">Fyfya Woto by Jojo Abot</a></iframe>'
      },
      {
       title: 'Diplomatic - OSHUN',
       description: "I have chosen this track because it celebrates sisterhood by emphasizing our ally ship with each other while also paying tribute to Femi Kuti's 'Water Got No Enemy' reimagined and modernized.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2179572092/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1249785346/transparent=true/" seamless><a href="https://oshuniverse.bandcamp.com/album/afahye">AFAHYE by OSHUN</a></iframe>'
      },
      {
       title: 'Sunny Duet ft. theMIND - No Name',
       description: 'I love this song, the overlapping melodies and harmonies make it feel so well rounded and creates what feels like an entire orchestra coexisting with Hip-hop . It is such a wonderful experience hearing storytelling made so smooth.',
       embed: ' <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1599515291/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=2653206599/transparent=true/" seamless><a href="https://nonameraps.bandcamp.com/album/telefone">Telefone by Noname</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Arafa (they/them)',
     description: "A non-binary, multidisciplinary artist working in Tanzania and Kenya. They work in the realms of 3D design, graphic design, sculpture, architecture and sound, creating work that aims to provoke their visitors into considering their daily realities.",
     links: [
      {
       title: 'Be Nice - Janice Iche & Fvzzkill',
       description: 'Somehow, I feel like Janice Iche brings the moods she expresses in her visual artwork into her music, because she creates such wonderful songs that seem to express both the joys and difficulties of just being. In this song in particular, I especially adore the contrast between the relatable lyrics and the production, how it’s an invitation to jam while also presenting seemingly aloof characters.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=3886136015/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://janiceiche.bandcamp.com/track/be-nice">Be Nice by Janice Iche</a></iframe>'
      },
      {
       title: 'Dem Go Know - Bakhita',
       description: "This was my favourite track from Bakhita’s new EP, CHAMOMILE:PYE. Lemi’s production on this song reminds me of vibes similar to those on Solange’s most recent releases, where it’s playful and such short goodness that you wish there was much more of it. Good thing is, Bakhita carries this funk all through her EP and I encourage you all to listen to the whole project.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1733537500/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1147257649/transparent=true/" seamless><a href="https://bakhita.bandcamp.com/album/chamo-mile-pye">CHAMO MILE:PYE by BAKHITA</a></iframe>'
      },
      {
       title: 'Honey Bee - EA WAVE & Wanja Wahoro',
       description: "This is one of my favourite tracks from last year, and an unexpectedly beautiful combination of Wanja Wahoro’s lyricism and EA Wave’s experimental production. ‘Honey Bee’ is part of a two part collaboration between the artists, and it's the kind of song that instantly gives me a sense of hope and brightness. Whenever I put it on, I immediately imagine sunshine and sunflowers, and the bouncy production always immediately gets me off my feet.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3102286723/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=2598506062/transparent=true/" seamless><a href="https://eawave.bandcamp.com/album/honey">Honey by EA Wave &amp; Wanja Wohoro</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Mario',
     description: "Singer from Kiwalani, Dar es Salaam who has been making music across various genres for a decade. Currently making Singeli with my producer DJ Silla. Passionate about representing new emerging sounds from across Africa, especially Tanzania.",
     links: [
      {
       title: 'Jamaica Mnanda - Maskini Naye Tu',
       description: "There is so much great music in Tanzania that doesn't get repped enough. This track represents the authentic sound of Dar es Salaam. Jamaica Mnanda debut release in the distinctive Mchiriku style mixes complex rhythmic patterns, poetic lyrics and killer keyboards. The footwork/juke remixes of the track slap hard.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2531594905/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=2097955022/transparent=true/" seamless><a href="https://jamaica.bandcamp.com/album/masikini-naye-mtu-the-poor-are-also-people">Masikini Naye Mtu (The Poor are Also People) by Jamaica Mnanda</a></iframe>'
      },
      {
       title: 'Siti Muharam - Nyuki',
       description: "Recorded by the Great Grand Daughter of legendary Taarab singer Siti Binti Saad this is an example of the classical Taarab style. Everyone in Dar es Salaam grew up listening to modern Taarab and it's great to hear the classical style being recorded again. This is music which embodies the Swahili Coast mixing Arabic and African influences.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3772336838/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3271742551/transparent=true/" seamless><a href="https://sitimuharam.bandcamp.com/album/siti-of-unguja-romance-revolution-on-zanzibar">Siti of Unguja (Romance Revolution On Zanzibar) by Siti Muharam</a></iframe>'
      },
      {
       title: 'Mzee wa Bwax - Mshamba Video Mste',
       description: 'Nyege Nyege Tapes was the first label to take Singeli outside of Tanzania. So as a Singeli artist this compilation has an important place in my heart. The sound of Mzee wa Bwax is an example of what Singeli sounded like at that time, raw, frenetic and fun.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1483155390/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=2371798749/transparent=true/" seamless><a href="https://nyegenyegetapes.bandcamp.com/album/sounds-of-sisso">Sounds of Sisso by Mzee wa Bwax</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Tofa Jaxx',
     description: "A singer/songwriter, live performer and producer from Tanzania. I love telling stories through music and making stuff that moves me.",
     links: [
      {
       title: 'Jay Mitta - Tatizo Pesa',
       description: "I stumbled upon Jay Mitta's singeli track 'Tatizo Pesa' I love it so much as it's very reminiscent of busy sunny Dar. That's the type of music you hear when running around Dar Es Salaam’s streets.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=4027928840/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=2414592509/transparent=true/" seamless><a href="https://nyegenyegetapes.bandcamp.com/album/tatizo-pesa">Tatizo Pesa by Jay Mitta</a></iframe>'
      },
      {
       title: 'Siti Muharam - Sikitiko',
       description: "I love film and cinema. Before anything else I had wanted to become a filmmaker. And Siti Muharam's 'Sikitiko' is very cinematic. Makes me want to plan a holiday trip to Zanzibar.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3772336838/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3523396614/transparent=true/" seamless><a href="https://sitimuharam.bandcamp.com/album/siti-of-unguja-romance-revolution-on-zanzibar">Siti of Unguja (Romance Revolution On Zanzibar) by Siti Muharam</a></iframe>'
      },
      {
       title: 'Abdu Ali - Fiyah',
       description: "I also just stumbled upon Abdu Ali the avant garde electronic musician, well his music is quite odd. But very unapologetic. I would listen to 'Fiyah' before heading out the house just so I have my unapologetic demeanor on.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=454092736/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://abdualibmore.bandcamp.com/album/fiyah">FIYAH!!! by Abdu Ali</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Turunesh',
     description: "A truly multifaceted artist. The Tanzanian singer, songwriter, and creative director is becoming a leading voice amongst her peers in the realm of East African music. Her unique sensual sound and lyrical suave has solidified her as a feminist, Pan-African artist on the rise.",
     links: [
      {
       title: 'Nailah Hunter - Basin Bleu',
       description: "I love Nialah hunter's 'Basin Bleu'. The intro transports me to a place where colors and textures are in abundance. It’s the cover art to be true. It makes me think of old photos of my mom and auntie. I feel at home but nostalgically far away at the same time. There are no words and so the song tells whatever story I want or need to at the time I listen. I’m grateful for this track.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=605429135/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://nailahhunter.bandcamp.com/track/bassin-bleu">Bassin Bleu by Nailah Hunter</a></iframe>'
      },
      {
       title: 'Afriqua - Noir',
       description: "I was drawn to 'noir' because of its name. I love the beautiful contrast (or perhaps the parallelism) between the sound of the song and the societal connotations of ‘noir’. The song is delicate, tender, smooth, and shy. The sound of the water is so calming and meditative. We often do not think of these things when we think of darkness. The song makes me want to find my inner peace, my noir.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2226738195/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=151475501/transparent=true/" seamless><a href="https://afriqua.bandcamp.com/album/colored">Colored by Afriqua</a></iframe>'
      },
      {
       title: 'Jamila woods - Holy',
       description: "Jamila's song holy is special. It has inspired me to write music in the past and for that I will forever be grateful. She takes the cliche words “I’m not lonely , I’m alone '' and makes them totally refreshing with the following lyrics “I’m holy, on my own”. Accepting that we’re alone is doable, but accepting how powerful and great you are can be a difficult truth for many of us. I believe many of us live and die without this reaching this realization. Having her audience sing along, declaring aloneness and holiness simultaneously is powerful. She’s an amazing songwriter.",
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1165059544/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://jamilawoodsmusic.bandcamp.com/album/holy">Holy by Jamila Woods</a></iframe>'
      }
     ]
    },
    {
     type: 'bandcamp_picks',
     title: 'Mim Suleiman',
     description: "I am a Singer Songwriter, Musician, Performer, Artist, Composer, Designer, Authour, Cultural conservationist and Protagonist.",
     links: [
      {
       title: 'Zawose & Brook - Awuno Mganga Ndeje',
       description: 'Amazing sounds. The master of gogo sounds. I could listen to them all day. The sounds the instrument makes and plays. The vocals acrobats. It takes my body and my mind away in a good way.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2817587697/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=646427404/transparent=true/" seamless><a href="https://zawosebrook.bandcamp.com/album/assembly">Assembly by Zawose &amp; Brook</a></iframe>'
      },
      {
       title: 'International Orch Safari Sound - Marashi ya Pemba',
       description: 'This song brings back only the fun memories of the cloves seasons in Zanzibar Islands. Especially Pemba island, the minute you step on the land, you can smell the cloves. I am never tired of this song. I just enjoy it more and more every day. Marashi ya pemba - The perfume of Pemba.',
       embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3917774925/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1830757627/transparent=true/" seamless><a href="https://africancream.bandcamp.com/album/the-great-east-african-trip">The Great East African Trip by International Orch Safari Sound (Tanzania)</a></iframe>'
      },
      {
       title: 'Bi Kidude - Kijiti',
       description: "I love this song because it says Zanzibar to me. The ocean, the tropical presence and amazing scale and music to indulge with. Sang in Swahili language. It is one of those songs that just shows just how important the Arts of music is education and promoting awareness to the community. I salute Bi Siti.\
        Originally sung by Siti Binti Saad. The first female artist, recorded artist to record from Zanzibar. For the last 50 years, her legacy has been kept alive by the Legendary Bi Kidude. Now Bi Kidude has left the biggest hole in Zanzibar art and culture history and traditions. The master drummer with a voice of Powerfire.\
        Kijiti is the name of a lady. It is a song about a young lady who was abused, murdered and then abandoned. The story goes to say that the one that found the body and reported it to the police is the one who got blamed for the offence, but clearly the person who did it got away to this day. Rumour has it the person who did the horrible acts was allowed to get away with it.",
       embfed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=28805883/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=641880105/transparent=true/" seamless><a href="https://ouchrecords.bandcamp.com/album/zanzibara-volume-n-1">Zanzibara / Volume Nº1 by Bi Kidude</a></iframe>'
      }
     ]
    }
   ]
  },
  {
    short_name: "XADI’S NOSTALGIC REMINISCE ‘MOVIES’",
    name: "XADI’S NOSTALGIC REMINISCE ‘MOVIES’",
    bandcamp_link: "https://xadi.bandcamp.com/track/movies",
    isSingle: true,
    bandcamp_id: "109155119",
    author: "Lauryn Njeri",
    date: '02/19/2021',
    illus: 'articles/xadi/xadi.jpg',
    credit_illu: 'Peter O’Sullivan',
    introduction: "West London based artist, Xadi proves to be one to keep an eye out for this year. After the release of ‘Mañana‘, a tranquil hit alongside Manchester’s Nina Cobham, Xadi continues to build his reputation as incredibly multifaceted with ‘Movies’.<br> \
      Pairing contemplative lyrics with delicate production, Movies is a candid, honest portrait depicting feelings of nostalgia from bygone relationships. “Watching movies in the cinema feels like a timestamp to me, so the song had to be a reminiscent one. ‘Movies’ is a reflection on some of the lesser experiences I've had with people as well as the way I have gone about processing them” explains Xadi.<br> \
      Soothing melodies, lush flows and grasping penmanship are just some of the specs of casual magic that Xadi brings to the table with this tender introspective tune which seizes you at the first chord and lingers long after you've experienced it.<br>\
      The singer, rapper and producer is a  legend yet to be recognised as he only seems to get better with each release. We had a chat with Xadi about his transition to music, his latest release and a lot more.",
    questions: [
    {
      type: 'question',
      title: 'Can you tell us a little bit about yourself?',
      answer: "My name is Xadi. West London is where I'm from, in Hounslow. I'm a singer, rapper and a music producer I would say. I take a very DIY attitude towards everything  so far in my music career. I produce all my music, mix it and master it.<br>\
        For this song I've actually made the video as  well...I don't have any desire to go further down that. It was so long but because lockdown came and it wasn't really easy to shoot a video, I just try and if stuff is not available, I tend to just do it myself.  In terms of what my music is like it's probably somewhere between Hip Hop and R&B, somewhere there."
      },
    {
      type: 'question',
      title: 'How is the new year treating you so far after such unprecedented times in 2020?',
      answer: "It's been quite busy actually but just because I've been preparing that video. Because I don't know how to make a video so I had to do a lot of learning on YouTube so i was doing that quite a lot.<br>\
        I do sort of,  like I act. So I was doing a couple of auditions, but it's not like...Basically I did a performance at Edinburgh Fringe in 2019 and then I got an acting agent at the beginning of 2020 because they saw the show and so they'd just send me auditions but I haven’t actually been in anything yet. I'm not very good at acting either hahaha, I'm just taking the opportunities as they come.<br>\
      Other than that, to be fair the lockdown - because i make all my stuff in my bedroom anyway and I'm quite regimented - it didn't affect me a huge amount but i think towards the end of the first ones I started getting a bit stir crazy so it was nice to have a bit of a break. I'm trying just to make sure 2021 starts right and I look up to myself."
    },
    {
      type: 'question',
      title: 'I understand that you are a Physics graduate from the University of Cambridge. Is that something you still pursue or are you fully transitioned into music now?',
      answer: "Yeah, I teach some children science and maths, so it kinda helps me in that way that I could always have a steady source of income from it. But it's not something...It really came from proving kind of a point that i wasn’t dumb do you know what I mean?<br>\
        I went to a normal state school in Hounslow and I wasn't really that type of student that would go there. I thought I wanted to do medicine at one point and there was such pushback in the past because of being a little bit of a troublesome student and I wasn't really into academics. \
        So they were like ‘you candid't get into medicine’, so I got really fixated on trying to prove that point wrong.<br>\
        So I think that whole journey of my life was like a detour that was based on me trying to be like ‘I can do whatever, it doesn't matter if you say I can't do it!’ So it's not something immediately I want to go any further down. I don't know, maybe if i'm like 60 I'll return to it but I don't know."
    },
    {
      type: 'question',
      title: 'What fueled your decision to make the transition?',
      answer: "I fell in love with music when i was 13 or something. I'm not gonna lie like that kind of age, that's when I learned to play guitar and I was playing in an indie rock band. I started writing songs and I think that's when it got my heart and then that's kind of what made the detour. So then when i finished I was like I have to give this a try in a serious way, so that's what it was really."
    },
    {
      type: 'question',
      title: 'Your most recent single ‘Mañana’ is quite the masterpiece. Can you talk about your experience working with Nina Cobham?',
      answer: "It was an absolute pleasure, It was lovely. We still work quite a lot actually. I think we've just got quite a very similar taste in music. We literally met because I did this freestyle that Koje Radical reposted and we got talking and since then we've just vibed a lot so we'd be sending each other music and she was down in London so we’d go to the studio. It was great, it was a very special kind of musical relationship I say with Nina."
    },
    {
      type: 'question',
      title: 'You wear many hats as an artist, producer, director & editor. You creatively produce most of your projects. How is that?',
      answer: "It's a lot of work! haha but at the same time I'm quite fixated on how I want it to be so I feel like it's very difficult for me to let go. Videos, I would like someone else to do but everything else I'm quite particular about how I want it to be so it's a lot of work but I also like working a lot anyway so it's kind of alright. I like it really, deep down."
    },
    {
      type: 'question',
      title: 'Tell us a little bit about your upcoming release, Movies.',
      answer: "Movies, yeah so this is a track I started to write I think in like September or something like that. I really like starting to write songs on the guitar so I was just messing around and I found these two chords that I really liked.<br>\
        Before I even wrote the hook, I'd put in that old movie sound ticking because it just had some kind of nostalgic feeling to it. And then I just started to write about how experiences I've had in the past, not as strong as betrayal but just like people doing your wrong, and the way you can go about processing those kinds of emotions, not in the most constructive way."
    },
    {
      type: 'question',
      title: 'What was the vision when you created the visuals for this track and can you touch on what the whole process of bringing it to life was like?',
      answer: "So my initial vision that i wanted to have was I wanted to recreate different movie scenes but obviously that was a little bit tricky.<br>\
        The opening scene is actually like a recreation of this scene from this film called knives out, I don't know if you've heard of it. It's like some kind of murder mystery film thats got Daniel Craig in it, it's sick! Because of obviously the lockdown, I was just at home watching a film on New Years Eve with my mom so then that was the film and it just gave me inspiration for it.<br>\
        It felt like a song that was in slow motion as well so that's why I wanted to present that. The visuals are more of just an accompaniment, something to look at that gets you into the vibe rather than something that's got a big vision behind it because obviously there’s circumstances to it.<br>\
        Just before the lockdown stuff was happening, I went down to Seven Sisters, which I just googled it and it looked quite pretty and it was 2 hours away so we drove down at sunrise and I was just trying to get shots and then put them together against how I felt they matched the song and that was it really."
    },
    {
      type: 'question',
      title: 'I noticed that you always have a cup of tea in your music videos, care to tell us what that is about?',
      answer: "I can't talk too much about the tea haha. There’s an element of mystery there because I think I've been quite enjoying - like I've had people with their theories  in my Dms about the tea and stuff like that so I can't share too much about the tea yet but it will come at some point."
    },
    {
      type: 'question',
      title: 'If you could collaborate with any artist right now, who would it be and why?',
      answer: "There's a couple that I'd like to work with. But I'd say recently I would love to work with Kojey Radical because the art he makes is so unique and I really see him as a pioneer for the UK in making something that's just so different so I'd love to work with him but it varies. I mean I'd like to work with Drake as well, they're different ends of the spectrum which is literally crazy but I'm such a huge fan so yeah. But I'd say Kojey..."
    },
    {
      type: 'question',
      title: "What's one thing about you that no one would expect?",
      answer: "Okay, I really like...ice skating, that's one of my favourite things"
      },
    ],
    footer_links: [
      {
        name: 'Purchase on Bandcamp here',
        url: 'https://xadi.bandcamp.com/track/movies'
      },
      {
        name: 'Follow Xadi',
        url: 'https://www.instagram.com/xadiboi/'
      },
      {
        name: 'Follow Lauryn Njeri',
        url: 'https://www.instagram.com/laurynlikethehills_/'
      }]
  },
  {
    type: "article",
    short_name: 'BLACK BANDCAMP MARCH PICKS: WASHINGTON DC',
    name: 'BLACK BANDCAMP MARCH PICKS: WASHINGTON DC',
    bandcamp_link: "",
    bandcamp_id: "",
    credit: null,
    author: null,
    date: '08/07/2020',
    illus: 'articles/march2021/march2021.jpg',
    top_desc: "For this month's Bandcamp Friday, we hit up creatives in Washington DC to find out who their top Black Bandcamp discoveries and picks of the month are.",
    links: [
    ],
    questions: [
      {
       type: 'bandcamp_picks',
       title: "James Bangura",
       description: "Hello, My name is James Bangura, and I’m a DJ and Producer residing in the city of Washington D.C. I also run a small label called PercussionFunctions.",
       links: [
        {
         title: "Brother Aten",
         description: "You Have Never Belonged EP | Track- Know Here<br><br>Brother Aten is an experimental artist who currently resides in Berlin. I’ve known Brother Aten for a few years now and he honestly never ceases to amaze me. The track “Know Here” is an example of this. I picked this track from his most recent project because it seems to catch the sort of melancholy but also has a groove  that makes you want to keep moving.",
         embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2119544160/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=882451521/transparent=true/" seamless><a href="https://brotheraten.bandcamp.com/album/you-have-never-belonged">You Have Never Belonged by Brother Aten</a></iframe>',
        },
        {
         title: "Corey King",
         description: "A Loveless Sunken Sun | Track- Fertility Filter<br><br>\
          Corey King is a singer-songwriter / Composer / Multi-Instrumentalist hailing from New York City. \
          I found Corey’s music just recently through BlackBandCamp and his track Fertility Filter\
          really drew me in. Having a background as a break dancer, this track took me back to simpler times. Not in the sense of the lyrics but with the composition itself. This is definitely something I have in constant rotation these days.",
         embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=631818444/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://corey-king.bandcamp.com/album/a-loveless-sunken-sun">A Loveless Sunken Sun by Corey King</a></iframe>',
        },
         {
         title: "Boofy",
         description: "EP – IMRV021_Boofy | Track – Ledge<br><br>\
         Boofy is a Dubstep Producer hailing from Bristol, UK. Dubstep is a genre that heavily influences my writing as a producer. The sparseness, the textures, the use of space, etc. This is an older release from Boofy but his track Ledge is definitely not a slouch and I guarantee it would flex some speakers to their limit. Boofy also maintains the legacy sound that hails from one of the cities that are considered one of the original hotspots for the genre.",
         embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2702607120/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3970736391/transparent=true/" seamless><a href="https://innamindrecordings.bandcamp.com/album/imrv021-boofy">IMRV021 - Boofy by Innamind Recordings</a></iframe>',
        },
       ]
      },
      {
       type: 'bandcamp_picks',
       title: "DJ Nativesun",
       description: "DJ Nativesun is a melodic archivist DJ and producer, co-host for Eaton Radio’s UNSEEN Radio : exploring underground cultural sounds locally and globally.",
       links: [
        {
         title: "Scratchclart & KG - Baga DMs",
         description: "This track automatically draws me in with it’s magical chords and chants in the background. Feels like this track is preparing me to step into some otherly world dance circle with my ancestors.",
         embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2058784746/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3642968912/transparent=true/" seamless><a href="https://scratchadva.bandcamp.com/album/baga-man">&amp; Baga Man by Scratchclart</a></iframe>',
        },
        {
         title: "Lokowat - Perdido No Amazonas",
         description: "When I hear this I just want to run into the club and play it just to see how hard the people dance. It makes me think of closing my eyes and sweating on the dance floor.",
         embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3981838614/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1613410831/transparent=true/" seamless><a href="https://devagar.bandcamp.com/album/dev-a-gar-vol-3">DEV.A.GAR VOL 3 by Devagar</a></iframe>',
        },
         {
         title: "The Impossible - JSPORT Edit",
         description: "I just feel like every DJ needs this! Never can you go wrong with a lush Mariah Carey edit like this one. Soon as the kick comes in you can’t help but get lost in this track.",
         embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=3971471155/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://jsport.bandcamp.com/track/the-impossible-jsport-edit">The Impossible - JSPORT Edit by JSPORT</a></iframe>',
        },
       ]
      },
      {
       type: 'bandcamp_picks',
       title: "Amal",
       description: "Peace, my name is Amal, I’m a musician and founder of HOCHIRUNS.",
       links: [
        {
         title: "JWords",
         description: "I wanted to start off by highlighting the prolific years Jwords has had. With 6 plus releases it was hard not to catch her music. JWords to me is a perfect example of modern day experimental hip hop music. From her duo with rapper Masaai to some ambient modular pieces you never know what to expect. I would recommend listening to her Sonic Liberation project, which is very reminiscent of early Klipmode / Ras G. Notable track being “Fed Up”.",
         embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3609189749/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://jwords.bandcamp.com/album/sonic-liberation">Sonic Liberation by JWords</a></iframe>',
        },
        {
         title: "ANKHLEJOHN",
         description: "There’s so many Ankhlejohn projects that it's almost hard to choose one. The Shaap Records founder “Drill Scott Heron” EP is a very classy approach to a gritty street sound. I really love the duality of this project. Much respect to Ankh for his beat selection. From John’s sly mafioso raps over gritty gliding 808’s. Notable track being “TELFAR””. Do make sure to check out Raheem Supreme and the rest of the “Shaap records” bandcamp below!",
         embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1866894663/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://shaaprecords.bandcamp.com/album/drill-scott-heron-pieces-hittin">DRILL SCOTT-HERON (PIECES HITTIN) by SHAAP RECORDS</a></iframe>',
        },
         {
         title: "Nappy Nappa",
         description: "Nappa, a longtime friend of mine, has been pushing the boundaries of experimental rap music for years now. I’ve never met anyone else who embodies the energy of our city.As  ½ of the duo Model Home with musician Pat Cain, Nappa’s raw vocal work on their project Model Home x Pure Rave reminds of block parties, Gogo’s and raves but in 2020. Notable song being. An intermediate arrangement of patterns and rhythmic sonic collage",
         embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3176549901/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://modelhomedc.bandcamp.com/album/model-home-x-pure-rave">Model Home x Pure Rave by model home</a></iframe>',
        },
       ]
      },
      {
       type: 'bandcamp_picks',
       title: "Djoser",
       description: "I’m a Producer/DJ based in Washington, DC and part of the L.E.N.G. collective, I’m also an artist under 3024.",
       links: [
        {
         title: "Loxy",
         description: "Loxy is one of my favorite Drum & Bass Producers/Djs. His massive catalog goes back to the late 90s. Still today he manages to produce quality tracks on his own and with collaborations with other artists like Resound, Ena, and Genotype. The track I picked from his latest release on Cylon Recordings (his label) titled “Singularity” is from a collaboration he did with Resound. The track is a fast pace energized work out that's sub bass and percussive heavy. One of my favorite elements in the track is the use of percussion in a melodic way, along with the breakdown which gives you a chance to breathe from the intensity of the track.",
         embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3095269354/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1633897576/transparent=true/" seamless><a href="https://cylonrecordings.bandcamp.com/album/loxy-resound-straight-1s-singularity">Loxy &amp; Resound -  Straight 1&#39;s / Singularity by Loxy &amp; Resound</a></iframe>',
        },
        {
         title: "E L U C I D",
         description: "The track I picked from New York rapper E L U C I D is from an album called “An Unknown Infinite” by AMANI + KING VISION ULTRA (out now on PTP). E L U C I D was the Featured artist in the track titled “Scrapes”. The only way I could interpret my feelings for this track is that it's a great winter track. The almost beatless instrumental in the background is very stripped back and warm sounding and it gives room for E L U C I D’s words that pierce through the track to create balance. This is a track that I always tend to listen to multiple times in the row.",
         embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3943499932/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1638935951/transparent=true/" seamless><a href="https://purpletapepedigree.bandcamp.com/album/an-unknown-infinite">An Unknown Infinite by AMANI + KING VISION ULTRA</a></iframe>',
        },
         {
         title: "Jossy Mistu",
         description: "Jossy Mistu is a phenomenal London based producer/Dj that I've been following for the past few years. Her Rinse FM show is one the few shows that I never miss, covering a wide spectrum of different sounds. The track I picked from her latest EP (out now on Astral black) is called “Ø “. The track is a perfect mixture of space and percussion, while also managing to add dark melodic elements throughout the track and deep sub bass to fill the void.",
         embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1310531337/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=4276734884/transparent=true/" seamless><a href="https://astralblack.bandcamp.com/album/planet-j">Planet J by Jossy Mitsu</a></iframe>',
        },
       ]
      },
      {
       type: 'bandcamp_picks',
       title: "soso tharpa",
       description: "Yo what’s up? I go by the name of soso tharpa and I make music based out of Washington D.C. Oh and I DJ sometimes ;).",
       links: [
        {
         title: "KMRU",
         description: "I was introduced to KMRU by a good friend of mine recently and my life hasn’t been the same since. I’ve sort of gone down a KMRU rabbit hole if you will. The track I chose is called “Degree of Change” from his Jar EP. This track is like putting on the most silkiest white robe while being fed Belgian chocolate, it’s that good. Then you have tracks like “Space of Uncertainty”; a track adorned with bells and texture that always leaves me entranced and begging for more. An overall very solid EP.",
         embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1944326644/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://seilrecords.bandcamp.com/album/jar">Jar by KMRU</a></iframe>',
        },
        {
         title: "Nazar",
         description: "For my second choice I chose the “Supplies EP” by Nazar; Pausado - good lord. I first stumbled upon this EP while stalking a friends Bandcamp and was completely blown away. Pausado is the literal definition of “go dumb” music that I really would like to hear in a club setting one day.",
         embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=538663836/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://nazar.bandcamp.com/album/supplies-ep">Supplies EP by Nazar</a></iframe>',
        },
         {
         title: "Tim Reaper",
         description: "Lastly we make our way to who I consider to be a shining light in the DnB/Jungle scene right now. Tim Reaper’s Hoover Sound EP is amazing. With an airy Shogun esque atmosphere coupled with drums that remind me of past greats like Remarc, Tim Reaper captured the essence of a drum and bass sound that I have loved for a long time. My favorite track has to be his remix of Special Request’s “Quiet Storm”. Whenever I listen to that song I close my eyes and become an old guy from London recounting the good old days of raving and proper pre’s - only to open my eyes and realize that I’m actually from Washington D.C. Highly recommended.",
         embed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=220406601/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://hooversoundrecordings.bandcamp.com/album/hooversound-presents-special-request-x-tim-reaper">HOOVERSOUND PRESENTS: SPECIAL REQUEST X TIM REAPER by Special Request x Tim Reaper</a></iframe>',
        },
        ]
      }
    ]
  }
  ]))
  state.current = state.list[payload - 1]
 }
}

export default {
 namespaced: true,
 state,
 mutations
}
