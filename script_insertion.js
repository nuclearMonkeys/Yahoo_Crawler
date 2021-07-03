var id_list = [1, 2, 3, 4, 51]
var script_obj_list = []
var script_list = []

for (var i = 0; i < id_list.length; i++) 
{
    const script = document.createElement("script");
    script.src = './js_dictionaries/questions/questions_' + Math.floor(id_list[i]/ 50) + '.js'
    script.type = "text/javascript";
    script.defer = true;

    script_list.push(script);

    script_obj_list.push(document.head.appendChild(script));

    console.log(i)
}