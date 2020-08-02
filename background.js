// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.commands.onCommand.addListener(function (command) {


        chrome.runtime.sendMessage({ greeting: 'ok' }, function (response) {
            console.log(response);
        });


    // var f = "function SelectText() { \
    //     try { \
    //         var selecter = window.getSelection().toString(); \
    //         if (selecter != null && selecter.trim() != '') { \
    //             return selecter; \
    //         } \
    //     } catch (err) { \
    //         var selecter = document.selection.createRange(); \
    //         var s = selecter.text; \
    //         if (s != null && s.trim() != '') { \
    //             return selecter; \
    //         } \
    //     } \
    //   }; SelectText();";

    // chrome.tabs.executeScript(null, { code: f }, function (res) {
    //     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    //         chrome.tabs.sendMessage(tabs[0].id, { greeting: res }, function (response) {
    //             console.log(response);
    //         });
    //     });
    // });

    // console.log('onCommand event received for message: ', f);
});

