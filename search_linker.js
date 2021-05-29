// var obj = JSON.parse()

// FIRST: read JSON files
// SECOND: parse it to readable javascript string data
// THIRD: Load all data into a separate javascript file
//        and dictionary for fast lookup

// FIRST
var fs = require("fs");

fs.readFile('./JSON_data/test_crawl14.json', function (err, data) 
{
    var json_string = ""
    var js_string = "var questions_dict = {\n";

    var questions_list = []
    var answers_list = []
    // fs.writeFile('input.txt', 'SEGA!', function(err){
    //     if (err) 
    //     {
    //         return console.error(err);
    //     }
    //     console.log("Data written successfully!");
    //     console.log("Let's read newly written data");
    //     // Read the newly written file and print all of its content on the console
    //     fs.readFile('input.txt', function (err, data) {
    //         if (err) {
    //             return console.error(err)
    //         }
    //         console.log("Asynchronous read: " + data.toString());
    //     });
    // });

    if (err) 
    {
        return console.error(err);
    }

    json_string += data.toString()

    const obj = JSON.parse(json_string);
    // console.log(obj.a.length);

    var i;
    for (i = 0; i < 500; i++) 
    {
        if (Object.keys(obj.a[i])[0] == 'q_id') {
        // console.log(obj.a[i]);
            questions_list.push(obj.a[i]);
        }

        else if (Object.keys(obj.a[i])[0] == 'a_id') 
        {
            answers_list.push(obj.a[i]);
        }
    }

    for (i = 0; i < questions_list.length - 1; i++) 
    {
        var q_id = String(questions_list[i].q_id);
        delete questions_list[i].q_id;
        js_string += "\t" + q_id + " : " + JSON.stringify(questions_list[i]) + ",\n";
    }

    var q_id = String(questions_list[questions_list.length - 1].q_id);
    delete questions_list[questions_list.length - 1].q_id;
    js_string += "\t" + q_id + " : " + JSON.stringify(questions_list[questions_list.length - 1]) + "\n";

    // insert all answers here
    js_string += "}\n\nvar answers_dict = {\n"
    for (i = 0; i < answers_list.length - 1; i++) 
    {
        var a_id = String(answers_list[i].a_id);
        delete answers_list[i].a_id;
        js_string += "\t" + a_id + " : " + JSON.stringify(answers_list[i]) + ",\n";
    }

    var a_id = String(answers_list[answers_list.length - 1].a_id);
    delete answers_list[answers_list.length - 1].a_id;
    js_string += "\t" + a_id + " : " + JSON.stringify(answers_list[answers_list.length - 1]) + "\n";

    js_string += "}"

    fs.writeFile('JSON_data/crawl14.js', js_string, function(err) 
    {
        if (err) 
        {
            return console.error(err);
        }

        console.log("Data written successfully!")
    });

});