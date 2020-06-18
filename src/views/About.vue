<template>
<div class="page">
  <div class="about container">
    <h1 class="mt-4 mb-4">About</h1>
    <div class="text-left">
      <p>This site aims to provide an easy way to filter and sort the <a href="https://docs.google.com/spreadsheets/d/1OIUBp4kFxmpWJihhq6WLwJQR1Am4DsD59bEYlJZxeGY/edit#gid=0" target="_blank">2000+ Black Producers / Artists / Labels for Bandcamp Day</a> spreadsheet. The goal of the sheet is to support Black artists, producers and labels through their Bandcamp links.</p>
      <p>The data is a work-in-progress  (non-exhaustive) and administered by a group of volunteers — any additions are very welcome via the <router-link to="/add">Add Submission Page</router-link>. All submissions will be reviewed. </p>
      <p>Edits / feedback / comments can be emailed to <a href="mailto:collectivedatavol@gmail.com">collectivedatavol@gmail.com</a>. Please only suggest Black producers / artists or Black-owned labels. If you don't want to be included on the sheet, we respect that — feel free to email us. </p>
      <p>This site is not directly affiliated with Bandcamp.</p>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.page {
  @media (prefers-color-scheme: dark) {
    a { color: white; }
  }
  // border-top:#1DA0C3 100px solid;
}
</style>
