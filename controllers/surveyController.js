'use strict';
const Survey = require('../models/surveyModel');

exports.survey_list_get = () => {
    return Survey.find().then((survey) => {
        return survey;
    }).catch((err) => {
        console.log(err);
        return err;
    })
}

exports.survey_list_post = (data) => {
    console.log(data);
    return Survey.create(data).then((item) => {
        Survey.create({
            schoolname: req.body.name,
            schoolclass: req.body.class,
            description: req.body.comment
        })
        return {status: 'Save OK: ' + item.id}
    }).catch((err) => {
        console.log(err);
        return err;
    })
}

exports.survey_number_get = () => {
    return Survey.find().exec().then((surveys) => {
        console.log(surveys.length);
        return surveys.length;
    }).catch((err) => {
        console.log(err);
        return err;
    })
}