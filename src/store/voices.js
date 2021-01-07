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
      short_name: "VOICES: DJ PAULETTE",
      top_desc:"PART 1",
      name: "VOICES: DJ PAULETTE",
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
    }
    ]))
    state.current = payload
  },
  set_current_by_id(state, payload) {
    state.list = JSON.parse(JSON.stringify([
    {
      short_name: "VOICES: DJ PAULETTE",
      top_desc:"PART 1",
      name: "VOICES: DJ PAULETTE",
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
