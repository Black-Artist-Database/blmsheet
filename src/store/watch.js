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
      type: "livestream",
      short_name: "JUNCTION2 : PARTYING IN A PANDEMIC",
      name: "JUNCTION2 : PARTYING IN A PANDEMIC",
      url: '<iframe width="560" height="315" src="https://www.youtube.com/embed/bEdNbfxhp4A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      illus: "watch/junction2/junction2.jpg",
      introduction: "As part of their virtual festival - Junction 2: Connections - The Speaker's Corner programme includes Black Bandcamp co-founder Niks Delanancy, who will be joining a panel to explore the theme of 'Partying in a Pandemic'.<br><br>\
      On Saturday 9th January 2021, at 14:50 GMT, Marcus Barnes will moderate an open and frank discussion with some of the major players of the UK’s electronic music industry. Alongside Niks will sit speakers from Fabric, The Cause, Mixmag and more, to discuss the impacts of the closure of nightlife during the Covid-19 pandemic, both positive and negative, illegal raving, mental health, the vaccine, the outlook for 2021 and much more.<br><br>\
      Watch the live panel below.",
      footer_links: [
        {
          name: "Follow @blackbandcamp on Instagram and Twitter",
          url: "https://twitter.com/blackbandcamp"
        },
        {
          name: "Follow @niksdelanancy on Instagram and Twitter",
          url: "https://twitter.com/niksdelanancy"
        }
      ]
    }
    ]))
    state.current = payload
  },
  set_current_by_id(state, payload) {
    state.list = JSON.parse(JSON.stringify([
    {
      type: "livestream",
      short_name: "JUNCTION2 : PARTYING IN A PANDEMIC",
      name: "JUNCTION2 : PARTYING IN A PANDEMIC",
      url: '<iframe width="560" height="315" src="https://www.youtube.com/embed/bEdNbfxhp4A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      illus: "watch/junction2/junction2.jpg",
      introduction: "As part of their virtual festival - Junction 2: Connections - The Speaker's Corner programme includes Black Bandcamp co-founder Niks Delanancy, who will be joining a panel to explore the theme of 'Partying in a Pandemic'.<br><br>\
      On Saturday 9th January 2021, at 14:50 GMT, Marcus Barnes will moderate an open and frank discussion with some of the major players of the UK’s electronic music industry. Alongside Niks will sit speakers from Fabric, The Cause, Mixmag and more, to discuss the impacts of the closure of nightlife during the Covid-19 pandemic, both positive and negative, illegal raving, mental health, the vaccine, the outlook for 2021 and much more.<br><br>\
      Watch the live panel below.",
      footer_links: [
        {
          name: "Follow @blackbandcamp on Instagram and Twitter",
          url: "https://twitter.com/blackbandcamp"
        },
        {
          name: "Follow @niksdelanancy on Instagram and Twitter",
          url: "https://twitter.com/niksdelanancy"
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
