async function showInfo(){
  let response = await fetch("https://odf1.github.io/csce242/json/info.json");
  let infoJSON = await response.json();
  let infoDiv = document.getElementById("info-section");
  
  //loop through the list of shoes from the JSON file

  

  for(i in infoJSON){
      let info = infoJSON[i];
      infoDiv.append(getShoeItem(info));
      
  }
}
function showFilteredData() {
  let allPapers = document.querySelectorAll(`.paper`);
  for(i in allPapers){
    if(allPapers[i].classList == null) continue;
    allPapers[i].classList.remove("hidden");
   //console.log(filteredPapers[i].classList);
  }
  let filter = this.value;
  if(filter == "all") return;
  console.log(filter);
//let filteredPapers = document.querySelectorAll(".paper:not(.research)");
  let filteredPapers = document.querySelectorAll(`.paper:not(.${filter}`);
  for(i in filteredPapers){
    if(filteredPapers[i].classList == null) continue;
    filteredPapers[i].classList.add("hidden");
 //console.log(filteredPapers[i].classList);
  }
/*let filter2 = this.value;
let filteredPapers2 = document.querySelectorAll(`.paper:not(.${filter2}`);
for(i in filteredPapers2){
  if(filteredPapers2[i].classList == null) continue;
  filteredPapers2[i].classList.add("hidden");
 //console.log(filteredPapers[i].classList);
}*/


console.log(filteredPapers);
  
}


function getShoeItem(info){
  let infoSection = document.createElement("section");
  infoSection.classList.add("paper");
  if(info.ArticleType == "Research Study")
    infoSection.classList.add("research");
  
  if(info.ArticleType == "Meta-Analysis")
    infoSection.classList.add("article");

  if(info.Population == "School Personnel"){
    infoSection.classList.add("schoolP");
  }
  if(info.Category == "Early Literacy Skills"){
    infoSection.classList.add("early-lit");
  }

  let h3Elem = document.createElement("h3");
  h3Elem.innerText = info.Citation;
  infoSection.append(h3Elem);

  let ulElem = document.createElement("ul");
  infoSection.append(ulElem);

  let liAbstract = document.createElement("li");
  liAbstract.innerText = `Abstract: ${info.Abstract}`;
  ulElem.append(liAbstract);

  let liResearchQ = document.createElement("li");
  liResearchQ.innerText = `Research Question: ${info.ResearchQuestion}`;
  ulElem.append(liResearchQ);

  let liCat = document.createElement("li");
  liCat.innerText = `Category: ${info.Category}`;
  ulElem.append(liCat);
  
  let liHyp = document.createElement("li");
  liHyp.innerText = `Hypothesis: ${info.Hypothesis}`;
  ulElem.append(liHyp);
  
  let liPop = document.createElement("li");
  liPop.innerHTML = `Population: ${info.Population}`;
  ulElem.append(liPop);
  
  let liExtPop = document.createElement("li");
  liExtPop.innerText = `Extended Population Characteristics: ${info.ExtendedPopulationCharacteristics}`;
  ulElem.append(liExtPop);
  
  let liSet = document.createElement("li");
  liSet.innerText = `Setting: ${info.Setting}`;
  ulElem.append(liSet);
  
  let liSamp = document.createElement("li");
  liSamp.innerText = `Sample Size: ${info.SampleSize}`;
  ulElem.append(liSamp);
  
  let liArticle = document.createElement("li");
  liArticle.innerText = `Article Type: ${info.ArticleType}`;
  ulElem.append(liArticle);
  
  let liResearchM = document.createElement("li");
  liResearchM.innerText = `Research Methodology: ${info.ResearchMethodology}`;
  ulElem.append(liResearchM);
  
  let liTheoB = document.createElement("li");
  liTheoB.innerText = `Theoretical Basis: ${info.TheoreticalBasis}`;
  ulElem.append(liTheoB);
  
  let liDesc = document.createElement("li");
  liDesc.innerText = `Description: ${info.Description}`;
  ulElem.append(liDesc);
  
  let liAsse = document.createElement("li");
  liAsse.innerText = `Assessment: ${info.Assessment}`;
  ulElem.append(liAsse);
  
  let liRes = document.createElement("li");
  liRes.innerText = `Results: ${info.Results}`;
  ulElem.append(liRes);
  
  let liFin = document.createElement("li");
  liFin.innerText = `Findings: ${info.Findings}`;
  ulElem.append(liFin);
  
  let liFinC = document.createElement("li");
  liFinC.innerText = `Findings Continued: ${info.Findingscont}`;
  ulElem.append(liFinC);
  
  let liStuLim = document.createElement("li");
  liStuLim.innerText = `Study Limitations: ${info.StudyLimitations}`;
  ulElem.append(liStuLim);
  
  let liNotes = document.createElement("li");
  liNotes.innerText = `Notes: ${info.Notes}`;
  ulElem.append(liNotes);

  /*if(info.ArticleType != "Research Study"){
    infoSection.classList.add("hidden");
  }*/

 
  return infoSection;
}
//const test = "info.json



window.onload = function(){
  // const btn = document.getElementById("btn");
  const filterSelect = document.getElementById("filter");
  const filterSelect2 = document.getElementById("filter2");
  filterSelect.onchange = showFilteredData;
  filterSelect2.onchange = showFilteredData;
  // btn.onclick = showFilteredData;
  this.showInfo();
}