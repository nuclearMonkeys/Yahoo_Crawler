var fs = require("fs");
var directory_name = './js_dictionaries/answers/';
var files = fs.readdirSync('./js_dictionaries/answers/');

number_list = [];

for (i = 0; i < files.length; i++) 
{
    fs.readFile(directory_name + files[i], function (err, data) 
    {
        eval(data.toString());

        keys = Object.keys(answers_dict)

        number_list.push(keys[keys.length - 1]);
        
        // console.log(number_list[number_list.length - 1]);
        // console.log(number_list);
        answers_dict = null;
    });
    break;
}