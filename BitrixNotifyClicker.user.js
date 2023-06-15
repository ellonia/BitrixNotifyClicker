// ==UserScript==
// @name         Bitrix Notify Clicker
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       You
// @match        https://corp.oktoprint.ru/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nami.ru
// @grant        none
// ==/UserScript==

var notifyBtnId = "blog-f6AhYa-btn";
var timer = 5; // Seconds
var cliker = null;

function CreateDashboard(){
    let dash = document.createElement('div');
    let switcher = document.createElement('div');
    let title = document.createElement('div');

    switcher.innerHTML = '<label class="toggle"><input class="toggle-checkbox" type="checkbox" id="switcherCheckBox"><div class="toggle-switch"></div><span class="toggle-label" id="switcherInfo" >Выкл</span></label>';
    title.innerHTML = "Bitrix Clicker";
    title.className = "sw-title";

    dash.className = "dashBtnBlock";
    dash.appendChild(title);
    dash.appendChild(switcher);
    document.body.appendChild(dash);

    let info = document.getElementById("switcherInfo");
    let swBtn = document.getElementById("switcherCheckBox");

    swBtn.onchange = (event) => {validate();};

    function validate() {
        if (swBtn.checked) {
            console.log("Checked YES");
            info.innerHTML = "Вкл";
            StartClicker();
        } else {
            console.log("Checked NO");
            info.innerHTML = "Выкл";
            StopClicker();
        }
    }
}

function AddGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

function AddDashboardStyles(){
    AddGlobalStyle('.dashBtnBlock { position: absolute; top: 10px; right: 10px; box-shadow: inset 0 -3em 3em rgba(0,0,0,0.1),0 0  0 2px rgb(255,255,255),0.3em 0.3em 1em rgba(0,0,0,0.3); }');
    AddGlobalStyle('.dashBtnBlock { background: #fff; border-radius: 8px; padding: 8px;}');
    AddGlobalStyle('.dashBtnBlock { width: 120px}');

    AddGlobalStyle('.toggle { cursor: pointer;  display: inline-block;}');
    AddGlobalStyle('.toggle-switch {  display: inline-block;  background: #ccc;  border-radius: 16px;  width: 58px;  height: 32px;  position: relative;  vertical-align: middle;  transition: background 0.25s;}');
    AddGlobalStyle('.toggle-switch:before, .toggle-switch:after {  content: "";}');
    AddGlobalStyle('.toggle-switch:before {  display: block;  background: linear-gradient(to bottom, #fff 0%, #eee 100%);  border-radius: 50%;  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);  width: 24px;  height: 24px;  position: absolute;  top: 4px;  left: 4px;  transition: left 0.25s;}');
    AddGlobalStyle('.toggle:hover .toggle-switch:before {  background: linear-gradient(to bottom, #fff 0%, #fff 100%);  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);}');
    AddGlobalStyle('.toggle-checkbox:checked + .toggle-switch {  background: #56c080;}');
    AddGlobalStyle('.toggle-checkbox:checked + .toggle-switch:before {  left: 30px;}');
    AddGlobalStyle('.toggle-checkbox {  position: absolute;  visibility: hidden;}');
    AddGlobalStyle('.toggle-label {  margin-left: 5px;  position: relative;  top: 2px;}');

    AddGlobalStyle('.sw-title { text-align: center; color: #ef5f17; font-weight: 700;}');
}

function findNotifyButton(){
    let btn = document.getElementById(notifyBtnId);
    if (typeof(btn) != 'undefined' && btn != null)
    {
        btn.click();
    }
}

function StartClicker(){
    cliker = setInterval(function() {
        findNotifyButton();
    }, timer * 1000);
}

function StopClicker(){
    clearInterval(cliker);
}

(function() {
    'use strict';

    // Your code here...
    AddDashboardStyles();
    CreateDashboard();
})();
