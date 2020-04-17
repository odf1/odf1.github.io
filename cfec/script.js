/* Copyright 2020 CFEC */
//Owen Fielding
async function showInfo(){
  let response = await fetch("https://odf1.github.io/csce242/json/info.json");
  let infoJSON = await response.json();
  let infoDiv = document.getElementById("info-section");
  
  //  Loop through the list of shoes from the JSON file
  for(i in infoJSON){
      let info = infoJSON[i];
      infoDiv.append(getShoeItem(info));
  }
}
//  Function made by Portia Plante
function showFilteredData() {
  let allPapers = document.querySelectorAll(`.paper`);
  for(i in allPapers){
    if(allPapers[i].classList == null) continue;
    allPapers[i].classList.remove("hidden");
  }

  let filter = this.value;
  if(filter == "all") return;

  let filteredPapers = document.querySelectorAll(`.paper:not(.${filter}`);
  for(i in filteredPapers){
    if(filteredPapers[i].classList == null) continue;
    filteredPapers[i].classList.add("hidden");
  }
}
function showFilteredData2() {
  let allPapers = document.querySelectorAll(`.paper`);
  for(i in allPapers){
    if(allPapers[i].classList == null) continue;
  }
  let filter = this.value;
  let filteredPapers = document.querySelectorAll(`.paper:not(.${filter}`);
  for(i in filteredPapers){
    if(filteredPapers[i].classList == null) continue;
    filteredPapers[i].classList.add("hidden");
  }
}

function getShoeItem(info){
let list = ["Citation: ","Abstract: ",
"Research Question: ",
"Category: ",
"Hypothesis: ",
"Population: ",
"Extended Population Characteristics: ",
"Setting: ",
"SampleSize: ",
"ArticleType: ",
"Research Methodology: ",
"Theoretical Basis: ",
"Description: ",
"Assessment: ",
"Results: ",
"Findings: ",
"Findings Continued: ",
"Study Limitations: ",
"Notes: "];
  
  let infoSection = document.createElement("section");
  //  Filtering Section
  //  Done by different section as per JSON file

  // Article Type
  infoSection.classList.add("paper");
  if(info.ArticleType.includes("Research Study"))
    infoSection.classList.add("research");
  
  if(info.ArticleType.includes("Meta-Analysis"))
    infoSection.classList.add("article");

  //  Categories //
  if(info.Category.includes("Early Literacy Skills")){
    infoSection.classList.add("early-lit");
  }
  if(info.Category.includes("Models for Engagement")){
    infoSection.classList.add("models");
  }
  if(info.Category.includes("Community Partnerships")){
    infoSection.classList.add("com-part");
  }
  if(info.Category.includes("Early Intervention Programs")){
    infoSection.classList.add("early-p");
  }
  if(info.Category.includes("Community Partnerships")){
    infoSection.classList.add("com-part");
  }
  if(info.Category.includes("Interpersonal Relationships")){
    infoSection.classList.add("int-rel");
  }
 
 

  // Population
  if(info.Population.includes("School Personnel")){
    infoSection.classList.add("schoolP");
  }


  //  Add Elements By Title as per Excel SpreadSheet
  let h3Elem = document.createElement("h3");
  h3Elem.innerText = info.Citation;
  infoSection.append(h3Elem);

  // Starting List

  let ulElem = document.createElement("ul");
  infoSection.append(ulElem);

  //  Abstract
  let liAbstract = document.createElement("li");
  //let abs = "Abstract";
  liAbstract.innerHTML = list[1].bold()+`: ${info.Abstract}`;
  if(info.Abstract != "")
    ulElem.append(liAbstract);

  //  Research Question
  let liResearchQ = document.createElement("li");
  liResearchQ.innerHTML = list[2].bold()+`${info.ResearchQuestion}`;
  if(info.ResearchQuestion != "")
    ulElem.append(liResearchQ);

  // Category
  let liCat = document.createElement("li");
  liCat.innerHTML = list[3].bold()+`${info.Category}`;
  if(info.Category != "")
    ulElem.append(liCat);
  
  //Hypothesis
  let liHyp = document.createElement("li");
  liHyp.innerHTML = list[4].bold()+`${info.Hypothesis}`;
  if(info.Hypothesis != "")
    ulElem.append(liHyp);
  
  //  Population
  let liPop = document.createElement("li");
  liPop.innerHTML = list[5].bold()+`${info.Population}`;
  if(info.Population != "")
    ulElem.append(liPop);
  
  //  Extended Population Characteristics
  let liExtPop = document.createElement("li");
  liExtPop.innerHTML = list[6].bold()+`${info.ExtendedPopulationCharacteristics}`;
  if(info.ExtendedPopulationCharacteristics != "")
    ulElem.append(liExtPop);
  
  //  Setting
  let liSet = document.createElement("li");
  liSet.innerHTML = list[7].bold()+`${info.Setting}`;
  if(info.Setting != "")
    ulElem.append(liSet);
  
  // Sample Size
  let liSamp = document.createElement("li");
  liSamp.innerHTML = list[8].bold()+`${info.SampleSize}`;
  if(info.SampleSize !="")
    ulElem.append(liSamp);
  
  //Article Type
  let liArticle = document.createElement("li");
  liArticle.innerHTML = list[9].bold()+`${info.ArticleType}`;
  if(info.ArticleType != "")
    ulElem.append(liArticle);
  
  //  Research Methodology
  let liResearchM = document.createElement("li");
  liResearchM.innerHTML = list[10].bold()+`${info.ResearchMethodology}`;
  if(info.ResearchMethodology != "")
    ulElem.append(liResearchM);
  
  //  Theoretical Basis
  let liTheoB = document.createElement("li");
  liTheoB.innerHTML = list[11].bold()+`${info.TheoreticalBasis}`;
  if(info.TheoreticalBasis != "")
    ulElem.append(liTheoB);
  
  //  Description
  let liDesc = document.createElement("li");
  liDesc.innerHTML = list[12].bold()+`${info.Description}`;
  if(info.Description != "")
    ulElem.append(liDesc);
  
  //  Assessment
  let liAsse = document.createElement("li");
  liAsse.innerHTML = list[13].bold()+`${info.Assessment}`;
  if(info.Assessment != "")
    ulElem.append(liAsse);
  
  //  Results
  let liRes = document.createElement("li");
  liRes.innerHTML = list[14].bold()+`${info.Results}`;
  if(info.Results != "")
    ulElem.append(liRes);
  
  // Findings
  let liFin = document.createElement("li");
  liFin.innerHTML = list[15].bold()+`${info.Findings}`;
  if(info.Findings != "")
    ulElem.append(liFin);
  
  //  Findings Cont.
  let liFinC = document.createElement("li");
  liFinC.innerHTML = list[16].bold()+`${info.Findingscont}`;
  if(info.Findingscont != "")
    ulElem.append(liFinC);
  
  //  Study Limitations
  let liStuLim = document.createElement("li");
  liStuLim.innerHTML = list[17].bold()+`${info.StudyLimitations}`;
  if(info.StudyLimitations !="")
    ulElem.append(liStuLim);
  
  //  Notes
  let liNotes = document.createElement("li");
  liNotes.innerHTML = list[18].bold()+`${info.Notes}`;
  if(info.Notes != "")
    ulElem.append(liNotes);
  return infoSection;
}


window.onload = function(){
  const filterSelect = document.getElementById("filter");
  const filterSelect2 = document.getElementById("filter2");
  const btn = document.getElementById("testBtn");
  btn.onclick = showFilteredData;
  //const btnTest = document.getElementById("young-family");
 // btnTest.onclick = this.showFilteredData2;
  filterSelect.onchange = showFilteredData;
  filterSelect2.onchange = showFilteredData2;

  this.showInfo();
}