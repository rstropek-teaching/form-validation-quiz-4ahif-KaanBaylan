"use strict";
//Prüfvariablen
var fnC;
var lnC;
var nlC;
var emC;
$(function () {
    var fn;
    var ln;
    var em;
    var mc;
    fnC = false;
    lnC = false;
    nlC = false;
    emC = true;
    $("#emailMandatory").hide();
    $("#otherMediaChannel").prop("disabled", true);
    $("#button").prop("disabled", true);
    $("#firstName").on("change paste keyup", function () {
        fn = $("#firstName").val();
        if (fn.length > 0) {
            fnC = true;
        }
        else {
            fnC = false;
        }
        if (fnC) {
            $("#firstNameMandatory").hide();
        }
        else {
            $("#firstNameMandatory").show();
        }
        if (fnC && lnC && emC) {
            $("#button").prop("disabled", false);
        }
        else {
            $("#button").prop("disabled", true);
        }
    });
    $("#lastName").on("change paste keyup", function () {
        ln = $("#lastName").val();
        if (ln.length > 0) {
            lnC = true;
        }
        else {
            lnC = false;
        }
        if (lnC) {
            $("#lastNameMandatory").hide();
        }
        else {
            $("#lastNameMandatory").show();
        }
        if (fnC && lnC && emC) {
            $("#button").prop("disabled", false);
        }
        else {
            $("#button").prop("disabled", true);
        }
    });
    $('#newsletter').click(function () {
        if (nlC) {
            nlC = false;
            $("#emailMandatory").hide();
        }
        else {
            nlC = true;
            em = $("#email").val();
            if (em.length == 0) {
                $("#emailMandatory").show();
            }
        }
        if (fnC && lnC && emC) {
            $("#button").prop("disabled", false);
        }
        else {
            $("#button").prop("disabled", true);
        }
    });
    $("#email").on("change paste keyup", function () {
        if (nlC) {
            em = $("#email").val();
            if (em.length > 0) {
                emC = true;
            }
            else {
                emC = false;
            }
            if (emC) {
                $("#emailMandatory").hide();
            }
            else {
                $("#emailMandatory").show();
            }
        }
        else {
            $("#emailMandatory").hide();
        }
        if (fnC && lnC && emC) {
            $("#button").prop("disabled", false);
        }
        else {
            $("#button").prop("disabled", true);
        }
    });
    $("#mediaChannelSelect").on("change keyup keydown", function () {
        mc = $("#mediaChannelSelect option:selected").text();
        if (mc == "Other") {
            $("#otherMediaChannel").prop("disabled", false);
        }
        else {
            $("#otherMediaChannel").prop("disabled", true);
        }
    });
});
