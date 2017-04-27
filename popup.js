// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Search the bookmarks when entering the search keyword.
$(function () {

  $('#searchForm').on('submit', function () {

    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      var url = tabs[0].url;
      var searchTerm = $('#search').val();

      if (url.indexOf('https://www.reddit.com/') > -1 && searchTerm.trim().length > 0) {
        googleQuery(searchTerm.trim(), url);
      } else {
        console.log('no query');
      }

    });
  });

  window.onload = function () {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      var url = tabs[0].url;
      if (url.indexOf('https://www.reddit.com/') > -1) {
        $('#searchDiv').show();
        $('#msgDiv').hide();
        $('#search').focus();
      } else {
        $('#searchDiv').hide();
        $('#msgDiv').show();
      }
    });
  };
});

function googleQuery(query, site) {
  openInNewTab('https://www.google.co.in/#newwindow=1&q=' + query + '+site:' + site);
}

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
