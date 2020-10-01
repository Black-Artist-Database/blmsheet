const state = {
  list: [],
  current: null
}

const mutations = {
  reset (state) {
    state.list = null
  },
  set_current (state, payload) {
    state.list = JSON.parse(JSON.stringify([
    {
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
    },
    {
      short_name: 'BLACK BAND CAMP SEPTEMBER PICKS: LONDON',
      name: 'BLACK BAND CAMP SEPTEMBER PICKS: LONDON',
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
          answer: 'Frostbite was written three  years ago after a period of personal trauma that Ahya remembers being full of days spent in bed. "Frostbite came around as a way to speak to that feeling of isolation, when you don’t feel like you have people who care about you, or the people who care about you are out of your life," she says. It was after the death of two of her aunts, the end of a job, and her first time living alone that Ahya gave voice to the process of change and heartbreak.'
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
          answer: 'Wow! ‘Chamo Mile’ is something that I\'ve been contemplating and putting together unconsciously for some time. The title is a reflection of me, and how I’ve had to work towards certain things and even had to hide sometimes or disguise myself to be able maneuver this industry and get recognition or support. So this is kind of an ode to all of the sacrifices I\'ve had to make, and a celebration of me being able to now disguise myself from the evil while still staying true to me. Chamo means to hide in plain sight, camouflage my essence so that I can protect it from evildoers and leeches and all of that.<br><br>The title also reflects the entire journey of the creation of the songs. I started the songwriting process with ‘Upstairs’, ‘Funk’ and ‘Most Days’ before quarantine began. Already by that time I was exhausted by how our industry makes us feel; how people assume to know us without  taking the time to get to know us, and then try to project their assumptions of us as our reality which is crazy to me. I was in a space where I had to camouflage myself from people around me, from people in the industry and just recuperate and take time.<br><br>I also struggled a lot with mental health issues so \'Chamo Mile\' is an appreciation for the fact that I had to build and grow from a space of complete loneliness and sadness, as well as a celebration that I\'m able to be here fighting.<br><br>The other reason I wanted \'chamo\' and \'mile\' is that it\'s a reminder that it\'s a continuous fight. We’re all in constant motion, growing and changing. I\'m always finding ways to be better and I felt ‘Chamo Mile’ is a reflection of everything that\'s happened until now and I\'m appreciative to be able to share this with everyone.'
        },
        {
          type: 'question',
          title: 'Where do you draw your inspirations and musical influences from?',
          answer: 'This is a question that has always been difficult for me to answer, mostly because I draw a lot of my musical inspiration from things that aren\'t necessarily tangible - such as nature and the different sounds that we hear, the different movements and weather changes, or the moon and how we observe different astro events and how I believe they affect us. I get a lot of inspiration from things building around that.<br><br>Aside from nature and even animals, I get inspiration from my interactions with people. It could be something as easy as a conversation. If I feel like it\'s a conversation that has been echoing in my mind for some time and I wasn\'t able to really pinpoint, I find myself sitting and writing a song about that thought and it\'s really magical.<br><br>My biggest influence in making music has been my mental health. My ability to create has been very much affected by how well I am doing mentally, so it\'s taken a lot of reflection, shadow work and trauma work to uncover whatever sadness has been clouding my mind.<br><br>The artists that surround me are also a major motivation. I find that I really enjoy listening to music that hasn\'t been tainted by the mainstream media. I get inspired by listening to other artists who put their entire hearts into their music, and I feel a lot of that from unpopular music and artists around me who are also up-and-coming. They inspire me a lot because they give me a lot of faith in the universal consciousness. I always find out that we kind of have a similar message behind what we talk about, which is very encouraging and magical to experience.'
        },
        {
          type: 'quote',
          answer: '"We\'re all  in constant motion, growing and changing. So I\'m always finding ways to be better, and I felt \'Chamo Mile\' is a reflection of everything that\'s happened until now and I\'m appreciative to be able to share this with everyone."'
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
          answer: "For one, just sharing our work. People would be surprised but a repost, retweet or a share of a body of work is so powerful because the people around you see it and that causes a ripple effect. It's how the artists who are now ‘big leagues’ got established. I think a big part of it is through spreading the word, liking the videos, being present and following artists.<br><br>Another way that we could really get more support from society is by just keeping up with our work, doing the research when they hear about us and even media stations. They barely give any energy or time to up-and-coming artists because they don't want to take the risk of not satisfying their consumers when in reality the consumer is always looking for something new. Up-and-coming artists being able to package new experiences so well because we are new artists is something I really would urge the media to take advantage of.<br><br>Aside from the entertainment industry, I wish our government gave us grants and opportunities or ways for us to have a steady income. Especially as a growing artist, the chances of having a steady cash flow are so scarce and even if you do, it's very hard to  maintain because you might end up having to sacrifice your creation process to maintain this work. If we were given opportunities by the government, that would give us a lot more breathing room to just create and do better.<br><br>Another thing is to stop the assumption that Kenyan music has to sound a certain way and accept that as long as it's made in Kenya, it's Kenyan. However, I'm so glad to be up-and-coming in a time when this is a lot more possible, and I just hope that it continues to be taken more seriously."
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
      short_name: 'BLACK BAND CAMP SEPTEMBER PICKS: NAIROBI',
      name: 'BLACK BAND CAMP SEPTEMBER PICKS: NAIROBI',
      bandcamp_link: "",
      bandcamp_id: "",
      credit: null,
      author: null,
      date: '08/07/2020',
      illus: 'articles/oct2020/oct2020.jpg',
      top_desc: "For this month's Bandcamp Friday, our core team member KMRU hit up the DJs in his hometown of Nairobi to find out who their top Black Bandcamp discoveries and picks of the month are.",
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
              description: "Found her by total coincidence. Her cover art attracted me because I am an illustrator as well. The fusion and balance of smooth vocals, acoustic and electronic sounds is beautifully executed in her music.  Also being an orchestra nerd, I was excited to learn that she is a violinist as well and it features in her music.",
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
              title: 'Kampire -  Gatluak (Gan Gah, Cardi Monáe & Kampire Remix)',
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
              description: "I just think this tack is beautiful. Another example of well-blended African rhythms.",
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
              title: 'Nazaar',
              description: "My last pick is from a new favourite of 2020, Nazaar. I was led to his page by my love for Cooly G and the label that reps her, Hyperdub. Nazaar is a fresh inclusion to the label and his music is out of this world. I would put up a whole album here but since I'm only allowed a track I select 'Airstrike'.",
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
    }
    ]))
    state.current = payload
  },
  set_current_by_id(state, payload) {
    state.list = JSON.parse(JSON.stringify([
    {
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
    },
    {
      short_name: 'BLACK BAND CAMP SEPTEMBER PICKS: LONDON',
      name: 'BLACK BAND CAMP SEPTEMBER PICKS: LONDON',
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
        '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=1858466569/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://hlx-1.bandcamp.com/track/i-can-tell-you-can-f">I CAN TELL YOU CAN F*** by HLX-1</a></iframe>',
      ]
    },
    {
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
          answer: 'Frostbite was written three  years ago after a period of personal trauma that Ahya remembers being full of days spent in bed. "Frostbite came around as a way to speak to that feeling of isolation, when you don’t feel like you have people who care about you, or the people who care about you are out of your life," she says. It was after the death of two of her aunts, the end of a job, and her first time living alone that Ahya gave voice to the process of change and heartbreak.'
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
          answer: 'Wow! ‘Chamo Mile’ is something that I\'ve been contemplating and putting together unconsciously for some time. The title is a reflection of me, and how I’ve had to work towards certain things and even had to hide sometimes or disguise myself to be able maneuver this industry and get recognition or support. So this is kind of an ode to all of the sacrifices I\'ve had to make, and a celebration of me being able to now disguise myself from the evil while still staying true to me. Chamo means to hide in plain sight, camouflage my essence so that I can protect it from evildoers and leeches and all of that.<br><br>The title also reflects the entire journey of the creation of the songs. I started the songwriting process with ‘Upstairs’, ‘Funk’ and ‘Most Days’ before quarantine began. Already by that time I was exhausted by how our industry makes us feel; how people assume to know us without  taking the time to get to know us, and then try to project their assumptions of us as our reality which is crazy to me. I was in a space where I had to camouflage myself from people around me, from people in the industry and just recuperate and take time.<br><br>I also struggled a lot with mental health issues so \'Chamo Mile\' is an appreciation for the fact that I had to build and grow from a space of complete loneliness and sadness, as well as a celebration that I\'m able to be here fighting.<br><br>The other reason I wanted \'chamo\' and \'mile\' is that it\'s a reminder that it\'s a continuous fight. We’re all in constant motion, growing and changing. I\'m always finding ways to be better and I felt ‘Chamo Mile’ is a reflection of everything that\'s happened until now and I\'m appreciative to be able to share this with everyone.'
        },
        {
          type: 'question',
          title: 'Where do you draw your inspirations and musical influences from?',
          answer: 'This is a question that has always been difficult for me to answer, mostly because I draw a lot of my musical inspiration from things that aren\'t necessarily tangible - such as nature and the different sounds that we hear, the different movements and weather changes, or the moon and how we observe different astro events and how I believe they affect us. I get a lot of inspiration from things building around that.<br><br>Aside from nature and even animals, I get inspiration from my interactions with people. It could be something as easy as a conversation. If I feel like it\'s a conversation that has been echoing in my mind for some time and I wasn\'t able to really pinpoint, I find myself sitting and writing a song about that thought and it\'s really magical.<br><br>My biggest influence in making music has been my mental health. My ability to create has been very much affected by how well I am doing mentally, so it\'s taken a lot of reflection, shadow work and trauma work to uncover whatever sadness has been clouding my mind.<br><br>The artists that surround me are also a major motivation. I find that I really enjoy listening to music that hasn\'t been tainted by the mainstream media. I get inspired by listening to other artists who put their entire hearts into their music, and I feel a lot of that from unpopular music and artists around me who are also up-and-coming. They inspire me a lot because they give me a lot of faith in the universal consciousness. I always find out that we kind of have a similar message behind what we talk about, which is very encouraging and magical to experience.'
        },
        {
          type: 'quote',
          answer: '"We\'re all  in constant motion, growing and changing. So I\'m always finding ways to be better, and I felt \'Chamo Mile\' is a reflection of everything that\'s happened until now and I\'m appreciative to be able to share this with everyone."'
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
          answer: "For one, just sharing our work. People would be surprised but a repost, retweet or a share of a body of work is so powerful because the people around you see it and that causes a ripple effect. It's how the artists who are now ‘big leagues’ got established. I think a big part of it is through spreading the word, liking the videos, being present and following artists.<br><br>Another way that we could really get more support from society is by just keeping up with our work, doing the research when they hear about us and even media stations. They barely give any energy or time to up-and-coming artists because they don't want to take the risk of not satisfying their consumers when in reality the consumer is always looking for something new. Up-and-coming artists being able to package new experiences so well because we are new artists is something I really would urge the media to take advantage of.<br><br>Aside from the entertainment industry, I wish our government gave us grants and opportunities or ways for us to have a steady income. Especially as a growing artist, the chances of having a steady cash flow are so scarce and even if you do, it's very hard to  maintain because you might end up having to sacrifice your creation process to maintain this work. If we were given opportunities by the government, that would give us a lot more breathing room to just create and do better.<br><br>Another thing is to stop the assumption that Kenyan music has to sound a certain way and accept that as long as it's made in Kenya, it's Kenyan. However, I'm so glad to be up-and-coming in a time when this is a lot more possible, and I just hope that it continues to be taken more seriously."
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
      short_name: 'BLACK BAND CAMP SEPTEMBER PICKS: NAIROBI',
      name: 'BLACK BAND CAMP SEPTEMBER PICKS: NAIROBI',
      bandcamp_link: "",
      bandcamp_id: "",
      credit: null,
      author: null,
      date: '08/07/2020',
      illus: 'articles/oct2020/oct2020.jpg',
      top_desc: "For this month's Bandcamp Friday, our core team member KMRU hit up the DJs in his hometown of Nairobi to find out who their top Black Bandcamp discoveries and picks of the month are.",
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
              description: "Found her by total coincidence. Her cover art attracted me because I am an illustrator as well. The fusion and balance of smooth vocals, acoustic and electronic sounds is beautifully executed in her music.  Also being an orchestra nerd, I was excited to learn that she is a violinist as well and it features in her music.",
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
              title: 'Kampire -  Gatluak (Gan Gah, Cardi Monáe & Kampire Remix)',
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
              description: "I just think this tack is beautiful. Another example of well-blended African rhythms.",
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
              title: 'Nazaar',
              description: "My last pick is from a new favourite of 2020, Nazaar. I was led to his page by my love for Cooly G and the label that reps her, Hyperdub. Nazaar is a fresh inclusion to the label and his music is out of this world. I would put up a whole album here but since I'm only allowed a track I select 'Airstrike'.",
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
    }
    ]))
    state.current = state.list[payload - 1]
  }
}

export default  {
  namespaced: true,
  state,
  mutations
}
