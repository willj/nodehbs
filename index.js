const fs = require("fs");
const hbs = require("Handlebars");
const md = require("markdown-it")({ html: true });

//console.log(hbs);

var model = { name: "will", colour: "red" };

// compile the template in to a js function, named template
var template = hbs.compile("{{ name }} likes the colour {{ colour }}");

// give the template function a model, which runs it, and returns the result
var result = template(model);

console.log(result);

var fileTemplate = fs.readFileSync("src/template/index.hbs", "utf8");

regPartial("src/template/partials/footer.hbs");
regPartial("src/template/partials/header.hbs");
regPartial("src/template/partials/menu.hbs");

//var template2 = hbs.compile(fileTemplate);

//console.log(template2(model));

function regPartial(fileName){
    if (!fs.statSync(fileName).isFile()){
        console.log("Partial " + fileName + " not found!");
        return;
    }

    var partialName = fileName.split("/").slice(-1)[0].replace(".hbs","");
    var partialContent = fs.readFileSync(fileName, "utf8");

    hbs.registerPartial(partialName, partialContent);
}

var pageContent = fs.readFileSync("src/index.md", "utf8");

var indexPage = md.render(pageContent);

//console.log(index);

var fileTemplateWithBody = fileTemplate.replace("<!-- display_body -->", indexPage);

var template3 = hbs.compile(fileTemplateWithBody);

var indexPageOutput = template3(model);


fs.writeFile("index.html", indexPageOutput, (err) => {
  console.log("It's saved!");
});