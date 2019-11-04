
var MyObject = function () {

    // This is private because it is not being return
    var options = {
        url: 'https://api.feedbackly.com/v1/surveys',
        headers: {
            "Authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcGlfa2V5X2lkIjoiNWQ3ZjdhMWM1YWFjYTQ0YzI4ZTMyNDk0Iiwib3JnYW5pemF0aW9uX2lkIjoiNWJkMDZhMDgxYWQ1ODkxMjVmMzMxYmJlIiwidXNlcl9pZCI6IjVkN2Y3YTBlNWFhY2E0NjFiZWUzMjQ5MyIsImV4cGlyYXRpb25fZGF0ZSI6OTk5OTk5OTk5OTk5OX0.0zJYyx5RNW-6AXaM0Bafjr123Q7Lu3XpVPz4RDW0BEE"
        }
    };
    return options
}();

module.exports = MyObject;