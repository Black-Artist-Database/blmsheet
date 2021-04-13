const state = {
  list: [],
  sort: 'newest',
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
      type: "interview",
      short_name: "VOICES: DJ PAULETTE (PART 1)",
      top_desc:"",
      name: "VOICES: DJ PAULETTE (PART 1)",
      mixcloud_url: "https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FBlackBandcamp%2Fvoices-dj-paulette%2F",
      credit_illu: "Charlie J Watts",
      author: "Kay Ferdinand",
      illus: "voices/djpaulette/part1.jpg",
      introduction: "Welcome to Voices by Black Bandcamp; a mixed media series of interviews with talented Black artists and music industry members, where we champion the voices of Black people within the global electronic music sphere.<br><br>\
        To kick off the series, we spend some time with the living legend that is DJ Paulette. In this podcast we explore her life as a musician, following her return to her hometown of Manchester, after stints in Paris and Ibiza, as well as looking at her award-winning PR work.<br><br>\
        This conversation was recorded 28th August 2020, and split into two parts. The second part will follow soon.<br><br>\
        Many thanks to Usher Lavelle for his work on editing the podcasts. (Twitter/IG: @usherlavelle)<br><br>\
        <i>Content warning: Racism & racist language, mention of homophobia, incidents of mistreatment in the workplace.<i>",
      footer_links: [
        {
          name: "Learn more about DJ Paulette on her website here",
          url: "http://djpaulette.co.uk"
        },
        {
          name: "You can follow DJ Paulette here",
          url: "https://www.instagram.com/dj_paulette1/"
        },
        {
          name: "You can follow Kay Ferdinand here",
          url: "https://www.instagram.com/_kafk/"
        }
      ]
    },
    {
      type: "interview",
      short_name: "VOICES: DJ PAULETTE (PART 2)",
      top_desc:"",
      name: "VOICES: DJ PAULETTE (PART 2)",
      mixcloud_url: "https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FBlackBandcamp%2Fvoices-dj-paulette-part-2%2F",
      credit_illu: "Charlie J Watts",
      author: "Kay Ferdinand",
      illus: "voices/djpaulette/part2.jpg",
      introduction: "Welcome to Voices by Black Bandcamp; a mixed media series of interviews with talented Black artists and music industry members, where we champion the voices of Black people within the global electronic music sphere.<br><br>\
        As promised, here is part 2 of our fascinating conversation with DJ Paulette (part 1 can be found <a href=\"https://blackbandcamp.info/#/voice/1\" target=\"_blank\">here</a>).<br><br>\
        Many thanks to Usher Lavelle for his work on editing the podcasts. (Twitter/IG: @usherlavelle)<br><br>\
        <i>Content warning: Racism & racist language, mention of homophobia, incidents of mistreatment in the workplace.<i>",
      footer_links: [
        {
          name: "Learn more about DJ Paulette on her website here",
          url: "http://djpaulette.co.uk"
        },
        {
          name: "You can follow DJ Paulette here",
          url: "https://www.instagram.com/dj_paulette1/"
        },
        {
          name: "You can follow Kay Ferdinand here",
          url: "https://www.instagram.com/_kafk/"
        }
      ]
    },
    {
      type: "interview",
      short_name: "VOICES: CHRIS INPERSPECTIVE",
      name: "VOICES: CHRIS INPERSPECTIVE",
      mixcloud_url: "https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FBlackBandcamp%2Fvoices-chris-inperspective%2F",
      credit_illu: "Chris Inperspective",
      author: "Kay Ferdinand",
      illus: "voices/chris/chris.jpg",
      introduction: "Welcome to Voices by Black Bandcamp; a mixed media series of interviews with talented Black artists and music industry members, where we champion the voices of Black people within the global electronic music sphere.<br><br>\
        For today’s iteration of the series, we have a conversation with Inperspective Records head, Black Junglist Alliance founder, DJ, producer, and music industry professional Chris Inperspective. Our conversation ranges from his early musical history to his current thoughts on the drum n bass industry, as well as clarity on his dealings with Hospital Records and an update on his own imprint.\
        This conversation was recorded 1st September 2020.<br><br>\
        Many thanks to Usher Lavelle for his work on editing the podcasts. (Twitter/IG: @usherlavelle)<br><br>\
        <i>Content warning: Racism & racist language, incidents of mistreatment in the workplace.<i>",
      footer_links: [
        {
          name: "Learn more about Chris Inperspective on the label’s website here",
          url: "https://inperspectiverecords.com/artists/chris-inperspective/"
        },
        {
          name: "You can follow Chris Inperspective here",
          url: "https://www.instagram.com/chris_inp/"
        },
        {
          name: "You can follow Kay Ferdinand here",
          url: "https://www.instagram.com/_kafk/"
        }
      ]
    },
    {
      type: "interview",
      short_name: "VOICES: RUSSELL E.L. BUTLER",
      name: "VOICES: RUSSELL E.L. BUTLER",
      mixcloud_url: "https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FBlackBandcamp%2Fvoices-russell-el-butler%2F",
      credit_illu: "",
      author: "Kay Ferdinand",
      illus: "voices/russel/russel.jpg",
      introduction: "Welcome to Voices by Black Bandcamp; a mixed media series of interviews with talented Black artists and music industry members, where we champion the voices of Black people within the global electronic music sphere.<br><br>\
        Next up in the series we have Russell Ellington Langston Butler, an artist hailing from Bermuda, and currently residing in New York. Known for their stripped back but emotionally charged music, Russell has released on various prestigious labels, as well as self-releasing a wealth of great music on Bandcamp. Tune in to our conversation with Rusell to explore a truly fascinating musical mind.<br><br>\
        This conversation was recorded 12th January 2021.<br><br>\
        Many thanks to Usher Lavelle for his work on editing the podcasts. (Twitter/IG: @usherlavelle)<br><br>\
        <i>Content warning: Racism, violence<i>",
      footer_links: [
        {
          name: "Learn more about Russell E.L. Butler on their website here",
          url: "https://russellelbutler.com"
        },
        {
          name: "You can follow Russell E.L. Butler here",
          url: "https://www.instagram.com/russellelbutler/"
        },
        {
          name: "You can follow Kay Ferdinand here",
          url: "https://www.instagram.com/_kafk/"
        }
      ]
    },
    {
      type: "interview",
      short_name: "VOICES: IFEOLUWA",
      name: "VOICES: IFEOLUWA",
      mixcloud_url: "https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FBlackBandcamp%2Fvoices-ifeoluwa%2F",
      mixcloud_bottom: true,
      credit_illu: "",
      author: "Kay Ferdinand",
      illus: "voices/ifeoluwa/ifeoluwa.jpg",
      introduction: "<h4>For the fourth interview in our Voices series, we talk to Ifeoluwa.</h4><br>\
      <i>Ifeoluwa is a multi talented DJ, label owner, radio host, multidisciplinary artist, writer, and founder of U.K. based  INTERVENTION. As if that wasn’t enough, they are beginning a PhD in race, non-linear time, multiple temporalities and the construction of the British-Nigerian identity.</i> <br><br>\
      <i>We first caught up with Ifeoluwa with a Q&A back in October 2020, and NIKS followed up with an interview in March 2021.</i> <br><br>\
      <i>Content warning: racism, misogynoir </i> <br><br><br>\
      <b>Who’s responsible for your first foray into electronic music? What did it entail?</b><br><br>\
      This is a big question! I always listened to dance music. Not in that pretentious ‘I heard this Omar S track when I was 3 years old’ kinda vibe, but garage, grime and house was always about in London. I would say labels like Black Acre, Night Slugs, Hessle Audio, Hemlock, Hyperdub and Planet Mu have had a huge huge influence on me but also YouTube. I don’t wanna shout them lot out though. <br><br>\
      <b>How did you make the jump into DJing?</b><br><br>\
      I always wanted to. At the afters, it was always a battle between me and the stush techno lads but I was made to feel so unwelcome that I didn’t until Siren, RIP I guess, asked me to play one of their shows at Rye Wax. It escalated from there. I already had records and tunes for days so it made sense and it’s like controlling the aux so I know some of my friends reading this are glad I did so I can shut up now lol.<br><br>\
      <b>How did you find the journey going from electronic music being a hobby to it being a career path? </b><br><br>\
      Madness. Pure madness. At every turn it’s just madness. But I was super super fortunate to be able to work at Black Acre as a label assistant and then at Idle Hands. I think that’s what saved me from quitting the industry. To be around people who just get it without having to explain your existence is really affirming and important. Also being around consistent bangers is my dream and I’m glad to say that even though the road has been bumpy in more ways than one, I’m glad I pursued music. It’s now an important part of my PhD research too. <br><br>\
      <b>What setbacks have you faced during your career? How has this affected you personally?</b><br><br>\
      People generally being clapped. There’s a huge disconnect between the origins of dance music and rave culture which is now a capitalist commodity. It’s so entwined with whiteness that structurally, I’m at a disadvantage at every facet of the industry relying on anti-blackness to be sustained. It’s weird because it’s so glaringly obvious that people refusing to acknowledge it results in gaslighting behaviour and if you challenge it, you’re automatically the bad person, the trouble maker. When you’re essentially just saying, ‘hey I like dance music and this is super important to me because just like the pioneers, I’m Black and we use this to express ourselves’. People are still not understanding how structural racism affects all of us and how it plays out. <br><br>\
      To be honest, not many people realise what racism looks like. I think one of the most distressing things was my treatment in Bristol. I love the city but it has a lot to really grapple with when it comes to removing the facade of a liberal city because it’s the opposite - it’s no different from any other cities in the U.K. Looking back, the treatment from Noods Radio and the general way they handled it and stayed quiet during the current BLM after publicly engaging in misogynoir sums up everything I hate about the industry currently. Cool lads commodifying Black culture, being racist and sexst then still being held as the standard when they’re lacking in vibes completely. Social clout is one hell of a drug. I’m baffled why instead of holding them to account and striving for change and this goes for other collectives and people who have caused me harm, it’s just pushed to the side. It’s pretty fucked. My mental health took a huge huge hit and I’m still trying to piece it back together. <br><br>\
      <b>Where did the inspiration come from for Intervention?</b> <br><br>\
      It was a pretty simple idea tbh. I just wanted people like me and other people who had been excluded to be able to express themselves behind the decks. It can be such a freeing experience that I thought we need to go back to basics and get the people who need dance music, dancing in general and DJing the most at the front and centre again!<br><br>\
      <b>How would you best describe the conditions, in a structural sense, that make Intervention, and projects like it, so necessary?</b><br><br>\
      This ties in a lot with what I’ve said above about setbacks but also venues, promoters and clubbers need to fix up too. It can’t be up to the marginalised to fix a problem they did not create and they’re harmed under. We’re now seeing tokenistic bookings, performative allyship and weird faux niceness - the British way of addressing anything. Even after BLM was worldwide this summer, nothing changed. You would have thought this would have shown how ingrained structural racism is but it only confirmed that we shouldn’t even dismantle or decolonise the industry but burn it and start again. <br><br>\
      <b>You’ve been a player in a few of the UK’s most reputed local scenes...do you see them as separate entities or is there a commonality that binds them together?</b> <br><br>\
      They’re all different but there is a general feeling of people wanting to let loose. Especially Black and People of Colour. You have to dig beneath the surface - you can’t expect to find the new sounds by going to the bait clubs. They all have experimental (whatever that even means these days) sub-scenes which I guess would be the commonality!<br><br>\
      <b>How did you come to found Ipaadi? Where does the inspiration behind it lie?</b><br><br>\
      There’s no deep answer to this one. I’ve always wanted to start a label so I did. I love the process of making a record and I get really excited when people send me music they’ve been working on. Then sending off for mastering and getting it back too then releasing it. It’s really exciting and I suppose I love that feeling. <br><br>\
      <b>Tell us about your PhD, what are you hoping to discover?</b><br><br>\
      Oh wow okay! I’m basically looking at multiple temporalities and nonlinear time in relation to the Middle Passage and the British - Nigerian diaspora. How water, sound and our perception constructs our Being and what it means to be. Human existence is proper mad so I’m hoping to find something that lessens the existential dread. How language exists in its different forms is integral too. <br><br>\
      <b>How does it relate to your work in the electronic music sphere?</b><br><br>\
      The use of drums from Nigeria, West African more widely, and how it’s been used by Black people in electronic music is the link between the two. It’s been important for me in contextualising why I feel so passionately about genres like techno and house, the connection I feel to dance music but also why I carry on trying to use INTERVENTION to help, connect and platform as many people as possible.<br><br>\
      <b>And finally, who should we be looking out for from the INTERVENTION camp?</b><br><br>\
      PMS Casualty, Ayla L, Meterman, Pet Bitch, Ayaya & Strayer.<br><br>",
      footer_links: [
        {
          name: "You can follow Ifeoluwa here",
          url: "https://www.instagram.com/ifeoluwa_1234/"
        },
        {
          name: "You can follow INTERVENTION here",
          url: "https://www.instagram.com/interventioncru/"
        },
        {
          name: "You can follow Kay Ferdinand here",
          url: "https://www.instagram.com/_kafk/"
        }
      ]
    },
    ]))
    state.current = payload
  },
  set_current_by_id(state, payload) {
    state.list = JSON.parse(JSON.stringify([
    {
      type: "interview",
      short_name: "VOICES: DJ PAULETTE (PART 1)",
      top_desc:"",
      name: "VOICES: DJ PAULETTE (PART 1)",
      mixcloud_url: "https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FBlackBandcamp%2Fvoices-dj-paulette%2F",
      credit_illu: "Charlie J Watts",
      author: "Kay Ferdinand",
      illus: "voices/djpaulette/part1.jpg",
      introduction: "Welcome to Voices by Black Bandcamp; a mixed media series of interviews with talented Black artists and music industry members, where we champion the voices of Black people within the global electronic music sphere.<br><br>\
        To kick off the series, we spend some time with the living legend that is DJ Paulette. In this podcast we explore her life as a musician, following her return to her hometown of Manchester, after stints in Paris and Ibiza, as well as looking at her award-winning PR work.<br><br>\
        This conversation was recorded 28th August 2020, and split into two parts. The second part will follow soon.<br><br>\
        Many thanks to Usher Lavelle for his work on editing the podcasts. (Twitter/IG: @usherlavelle)<br><br>\
        <i>Content warning: Racism & racist language, mention of homophobia, incidents of mistreatment in the workplace.<i>",
      footer_links: [
        {
          name: "Learn more about DJ Paulette on her website here",
          url: "http://djpaulette.co.uk"
        },
        {
          name: "You can follow DJ Paulette here",
          url: "https://www.instagram.com/dj_paulette1/"
        },
        {
          name: "You can follow Kay Ferdinand here",
          url: "https://www.instagram.com/_kafk/"
        }
      ]
    },
    {
      type: "interview",
      short_name: "VOICES: DJ PAULETTE (PART 2)",
      top_desc:"",
      name: "VOICES: DJ PAULETTE (PART 2)",
      mixcloud_url: "https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FBlackBandcamp%2Fvoices-dj-paulette-part-2%2F",
      credit_illu: "Charlie J Watts",
      author: "Kay Ferdinand",
      illus: "voices/djpaulette/part2.jpg",
      introduction: "Welcome to Voices by Black Bandcamp; a mixed media series of interviews with talented Black artists and music industry members, where we champion the voices of Black people within the global electronic music sphere.<br><br>\
        As promised, here is part 2 of our fascinating conversation with DJ Paulette (part 1 can be found <a href=\"https://blackbandcamp.info/#/voice/1\" target=\"_blank\">here</a>).<br><br>\
        Many thanks to Usher Lavelle for his work on editing the podcasts. (Twitter/IG: @usherlavelle)<br><br>\
        <i>Content warning: Racism & racist language, mention of homophobia, incidents of mistreatment in the workplace.<i>",
      footer_links: [
        {
          name: "Learn more about DJ Paulette on her website here",
          url: "http://djpaulette.co.uk"
        },
        {
          name: "You can follow DJ Paulette here",
          url: "https://www.instagram.com/dj_paulette1/"
        },
        {
          name: "You can follow Kay Ferdinand here",
          url: "https://www.instagram.com/_kafk/"
        }
      ]
    },
    {
      type: "interview",
      short_name: "VOICES: CHRIS INPERSPECTIVE",
      name: "VOICES: CHRIS INPERSPECTIVE",
      mixcloud_url: "https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FBlackBandcamp%2Fvoices-chris-inperspective%2F",
      credit_illu: "Chris Inperspective",
      author: "Kay Ferdinand",
      illus: "voices/chris/chris.jpg",
      introduction: "Welcome to Voices by Black Bandcamp; a mixed media series of interviews with talented Black artists and music industry members, where we champion the voices of Black people within the global electronic music sphere.<br><br>\
        For today’s iteration of the series, we have a conversation with Inperspective Records head, Black Junglist Alliance founder, DJ, producer, and music industry professional Chris Inperspective. Our conversation ranges from his early musical history to his current thoughts on the drum n bass industry, as well as clarity on his dealings with Hospital Records and an update on his own imprint.\
        This conversation was recorded 1st September 2020.<br><br>\
        Many thanks to Usher Lavelle for his work on editing the podcasts. (Twitter/IG: @usherlavelle)<br><br>\
        <i>Content warning: Racism & racist language, incidents of mistreatment in the workplace.<i>",
      footer_links: [
        {
          name: "Learn more about Chris Inperspective on the label’s website here",
          url: "https://inperspectiverecords.com/artists/chris-inperspective/"
        },
        {
          name: "You can follow Chris Inperspective here",
          url: "https://www.instagram.com/chris_inp/"
        },
        {
          name: "You can follow Kay Ferdinand here",
          url: "https://www.instagram.com/_kafk/"
        }
      ]
    },
    {
      type: "interview",
      short_name: "VOICES: RUSSELL E.L. BUTLER",
      name: "VOICES: RUSSELL E.L. BUTLER",
      mixcloud_url: "https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FBlackBandcamp%2Fvoices-russell-el-butler%2F",
      credit_illu: "",
      author: "Kay Ferdinand",
      illus: "voices/russel/russel.jpg",
      introduction: "Welcome to Voices by Black Bandcamp; a mixed media series of interviews with talented Black artists and music industry members, where we champion the voices of Black people within the global electronic music sphere.<br><br>\
        Next up in the series we have Russell Ellington Langston Butler, an artist hailing from Bermuda, and currently residing in New York. Known for their stripped back but emotionally charged music, Russell has released on various prestigious labels, as well as self-releasing a wealth of great music on Bandcamp. Tune in to our conversation with Rusell to explore a truly fascinating musical mind.<br><br>\
        This conversation was recorded 12th January 2021.<br><br>\
        Many thanks to Usher Lavelle for his work on editing the podcasts. (Twitter/IG: @usherlavelle)<br><br>\
        <i>Content warning: Racism, violence<i>",
      footer_links: [
        {
          name: "Learn more about Russell E.L. Butler on their website here",
          url: "https://russellelbutler.com"
        },
        {
          name: "You can follow Russell E.L. Butler here",
          url: "https://www.instagram.com/russellelbutler/"
        },
        {
          name: "You can follow Kay Ferdinand here",
          url: "https://www.instagram.com/_kafk/"
        }
      ]
    },
    {
      type: "interview",
      short_name: "VOICES: IFEOLUWA",
      name: "VOICES: IFEOLUWA",
      mixcloud_url: "https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FBlackBandcamp%2Fvoices-ifeoluwa%2F",
      mixcloud_bottom: true,
      credit_illu: "",
      author: "Kay Ferdinand",
      illus: "voices/ifeoluwa/ifeoluwa.jpg",
      introduction: "<h4>For the fourth interview in our Voices series, we talk to Ifeoluwa.</h4><br>\
      <i>Ifeoluwa is a multi talented DJ, label owner, radio host, multidisciplinary artist, writer, and founder of U.K. based  INTERVENTION. As if that wasn’t enough, they are beginning a PhD in race, non-linear time, multiple temporalities and the construction of the British-Nigerian identity.</i> <br><br>\
      <i>We first caught up with Ifeoluwa with a Q&A back in October 2020, and NIKS followed up with an interview in March 2021.</i> <br><br>\
      <i>Content warning: racism, misogynoir </i> <br><br><br>\
      <b>Who’s responsible for your first foray into electronic music? What did it entail?</b><br><br>\
      This is a big question! I always listened to dance music. Not in that pretentious ‘I heard this Omar S track when I was 3 years old’ kinda vibe, but garage, grime and house was always about in London. I would say labels like Black Acre, Night Slugs, Hessle Audio, Hemlock, Hyperdub and Planet Mu have had a huge huge influence on me but also YouTube. I don’t wanna shout them lot out though. <br><br>\
      <b>How did you make the jump into DJing?</b><br><br>\
      I always wanted to. At the afters, it was always a battle between me and the stush techno lads but I was made to feel so unwelcome that I didn’t until Siren, RIP I guess, asked me to play one of their shows at Rye Wax. It escalated from there. I already had records and tunes for days so it made sense and it’s like controlling the aux so I know some of my friends reading this are glad I did so I can shut up now lol.<br><br>\
      <b>How did you find the journey going from electronic music being a hobby to it being a career path? </b><br><br>\
      Madness. Pure madness. At every turn it’s just madness. But I was super super fortunate to be able to work at Black Acre as a label assistant and then at Idle Hands. I think that’s what saved me from quitting the industry. To be around people who just get it without having to explain your existence is really affirming and important. Also being around consistent bangers is my dream and I’m glad to say that even though the road has been bumpy in more ways than one, I’m glad I pursued music. It’s now an important part of my PhD research too. <br><br>\
      <b>What setbacks have you faced during your career? How has this affected you personally?</b><br><br>\
      People generally being clapped. There’s a huge disconnect between the origins of dance music and rave culture which is now a capitalist commodity. It’s so entwined with whiteness that structurally, I’m at a disadvantage at every facet of the industry relying on anti-blackness to be sustained. It’s weird because it’s so glaringly obvious that people refusing to acknowledge it results in gaslighting behaviour and if you challenge it, you’re automatically the bad person, the trouble maker. When you’re essentially just saying, ‘hey I like dance music and this is super important to me because just like the pioneers, I’m Black and we use this to express ourselves’. People are still not understanding how structural racism affects all of us and how it plays out. <br><br>\
      To be honest, not many people realise what racism looks like. I think one of the most distressing things was my treatment in Bristol. I love the city but it has a lot to really grapple with when it comes to removing the facade of a liberal city because it’s the opposite - it’s no different from any other cities in the U.K. Looking back, the treatment from Noods Radio and the general way they handled it and stayed quiet during the current BLM after publicly engaging in misogynoir sums up everything I hate about the industry currently. Cool lads commodifying Black culture, being racist and sexst then still being held as the standard when they’re lacking in vibes completely. Social clout is one hell of a drug. I’m baffled why instead of holding them to account and striving for change and this goes for other collectives and people who have caused me harm, it’s just pushed to the side. It’s pretty fucked. My mental health took a huge huge hit and I’m still trying to piece it back together. <br><br>\
      <b>Where did the inspiration come from for Intervention?</b> <br><br>\
      It was a pretty simple idea tbh. I just wanted people like me and other people who had been excluded to be able to express themselves behind the decks. It can be such a freeing experience that I thought we need to go back to basics and get the people who need dance music, dancing in general and DJing the most at the front and centre again!<br><br>\
      <b>How would you best describe the conditions, in a structural sense, that make Intervention, and projects like it, so necessary?</b><br><br>\
      This ties in a lot with what I’ve said above about setbacks but also venues, promoters and clubbers need to fix up too. It can’t be up to the marginalised to fix a problem they did not create and they’re harmed under. We’re now seeing tokenistic bookings, performative allyship and weird faux niceness - the British way of addressing anything. Even after BLM was worldwide this summer, nothing changed. You would have thought this would have shown how ingrained structural racism is but it only confirmed that we shouldn’t even dismantle or decolonise the industry but burn it and start again. <br><br>\
      <b>You’ve been a player in a few of the UK’s most reputed local scenes...do you see them as separate entities or is there a commonality that binds them together?</b> <br><br>\
      They’re all different but there is a general feeling of people wanting to let loose. Especially Black and People of Colour. You have to dig beneath the surface - you can’t expect to find the new sounds by going to the bait clubs. They all have experimental (whatever that even means these days) sub-scenes which I guess would be the commonality!<br><br>\
      <b>How did you come to found Ipaadi? Where does the inspiration behind it lie?</b><br><br>\
      There’s no deep answer to this one. I’ve always wanted to start a label so I did. I love the process of making a record and I get really excited when people send me music they’ve been working on. Then sending off for mastering and getting it back too then releasing it. It’s really exciting and I suppose I love that feeling. <br><br>\
      <b>Tell us about your PhD, what are you hoping to discover?</b><br><br>\
      Oh wow okay! I’m basically looking at multiple temporalities and nonlinear time in relation to the Middle Passage and the British - Nigerian diaspora. How water, sound and our perception constructs our Being and what it means to be. Human existence is proper mad so I’m hoping to find something that lessens the existential dread. How language exists in its different forms is integral too. <br><br>\
      <b>How does it relate to your work in the electronic music sphere?</b><br><br>\
      The use of drums from Nigeria, West African more widely, and how it’s been used by Black people in electronic music is the link between the two. It’s been important for me in contextualising why I feel so passionately about genres like techno and house, the connection I feel to dance music but also why I carry on trying to use INTERVENTION to help, connect and platform as many people as possible.<br><br>\
      <b>And finally, who should we be looking out for from the INTERVENTION camp?</b><br><br>\
      PMS Casualty, Ayla L, Meterman, Pet Bitch, Ayaya & Strayer.<br><br>",
      footer_links: [
        {
          name: "You can follow Ifeoluwa here",
          url: "https://www.instagram.com/ifeoluwa_1234/"
        },
        {
          name: "You can follow INTERVENTION here",
          url: "https://www.instagram.com/interventioncru/"
        },
        {
          name: "You can follow Kay Ferdinand here",
          url: "https://www.instagram.com/_kafk/"
        }
      ]
    },  
    ]))
    state.current = state.list[payload - 1]
  }
}

export default  {
  namespaced: true,
  state,
  mutations
}
