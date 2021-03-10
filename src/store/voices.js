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
    }
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
