// Debug fancy slider and fix image display, console table

//forest search dile images dekhanor kotha but dekhachee na
//first e console e jabo
//kichu pele valo na pele abr forest likhe click krbo
//errror showing
//TypeError: Cannot read properties of undefined (reading 'forEach')
// at showImages (app.js:22:10)
// at app.js:34:19
//line 35 e error khaise tai okhane click korlam
//tohn source chole ashbe and pages er shob dekhabe bame and appjs er code dekhabe
//app35 e error dise but sheta app22 and app34 theke ashche
//22 no line e foreach e ki problem hoise ta janar jnno ekta break point dibo
//breakpoint diye abr search krbo forest
//prottekta property er upr mouse nibo f10 er age
//image ta undefined ashtese
//images undefined er karone foreach ke pache na
//showimages er modhe problem tai con+f diye showimages search krbo
//34 no line e show images e bp dibo
//22 e bp ekhno ache tao 34 e bp dibo
//34 e 3 ta select korar option ache showimages ke select korbo bp dewar jnno
//then ba shesh e dbo na
//pause debugger ke onk kore dbo and abr chalae dbo
//show images e break hoise and datay mouse nile hits show krtese
//hits e ki problem janar jnno esc te click krbo
//console e data dibo, data.hits dibo tahole array er modhe onk gula obj ache ta show hbe
//espand kore array er modhe onk gula je obj ache ta show hbe
//ami chaile console.table(data.hits) eta dibo tokhn table akare shob show hbe
//google korbo devtool console table - onk gula array er vitore je obj ache ta easily dekhar system
//console.table(data.hits, ['previewURL'])
//sudhu preview url er table dekhabe
//control f diye app.js e data.hits marlam dekhlam je hits er S  ta somehow boro hoye geche
//tai undefined ashche
//dane dekhe nibo kothae bp ache pore shegula ke proyojon onujai uncheck kore dbo
//ekhn dekha jabe shundor forest show hochee
//mountain dile mountain show hochee
//cat,dog,baby,mountain shob search diye kaj hochee