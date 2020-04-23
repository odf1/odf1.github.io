/* Copyright 2020 CFEC */
//Owen Fielding
async function showInfo(){
    let response = await fetch("https://odf1.github.io/csce242/json/info.json");
    let infoJSON = await response.json();
    let infoDiv = document.getElementById("info-section");
    
    //  Loop through the list of shoes from the JSON file
    for(i in infoJSON) {
        let info = infoJSON[i];
        infoDiv.append(getResearchItem(info));
    }
  }

  //  Filter system
  //  Written with the help of Portia Plante
  function getFilterList(filterName){
    let filters = [];
    let filterBoxes = document.getElementsByClassName(filterName);
    for(i in filterBoxes) {
      if(filterBoxes[i].checked ) {
        filters.push(filterBoxes[i].value);
      }
    }
    return filters;
  }
  function showAllPapers(){
    let filteredPapers = document.querySelectorAll(`.paper`);
    for(i in filteredPapers) {
      if(filteredPapers[i].classList == null) continue;
      filteredPapers[i].classList.remove("hidden");
      return;
    }
  }
  function hideAllPapers(){
    let filteredPapers = document.querySelectorAll(`.paper`);
    for(i in filteredPapers) {
      if(filteredPapers[i].classList == null) continue;
      filteredPapers[i].classList.add("hidden");
    }
  }
  function populatePaperList(){
    let filteredPapers = document.querySelectorAll(`.paper`);
    for(i in filteredPapers) {
      filteredList.push(filteredPapers[i]);
    }
  }
  function filterBy(filters){
    let filteredPapers = document.querySelectorAll(`.paper`);
    if(filters.length == 0){
      console.log("empty");
      return false;
    }
    for(i in filteredPapers) {
      if(filteredPapers[i].classList == null) continue;
      for(j in filters) {
        console.log(filters[j]);
        if(!filteredPapers[i].classList.contains(filters[j])){
          
          let index = filteredList.indexOf(filteredPapers[i]);
          if(index != -1){
          filteredList.splice(index,1)
          console.log("filtering for" + filters[j]);
          }
          if(index ==-1) console.log("index is -1");
        }
      }
    }
  }
  let filteredList = [];
  
  function showFilteredData() {
    filteredList = [];
    let filters = getFilterList("filter");
    let categories = getFilterList("categories");
    let population = getFilterList("population");
    let researchMethods = getFilterList("research");

    
    //  querry selector returns all divs with .paper
    let filteredPapers = document.querySelectorAll(`.paper`);
    //  if there is no filter show all papers

    //All Filters == 0
    if(filters.length == 0 && categories.length == 0 && population.length == 0 && researchMethods.length == 0) {
     showAllPapers();
     console.log("im here");
     return;
    }
    console.log(population);
    hideAllPapers();
    populatePaperList();
    filterBy(filters);
    filterBy(categories);
    filterBy(population);
    filterBy(researchMethods);
    console.log(filteredList.length + " # of items");
    for(i in filteredList){
      if(filteredList[i].classList == null) continue;
      filteredList[i].classList.remove("hidden");
    }
   
    /*
    //GOOD CODE DONT TOUCH
    if(filters.length == 0) {
      console.log("in");
      for(i in filteredPapers) {
        if(filteredPapers[i].classList == null) continue;
        filteredPapers[i].classList.add("hidden");
        for(j in categories) {
          if(filteredPapers[i].classList.contains(categories[j])) {
            filteredPapers[i].classList.remove("hidden");
          }
        }
      }
      return;
    }

    // go through papers and show them if the filter applies
    for(i in filteredPapers) {
      if(filteredPapers[i].classList == null) continue;
      filteredPapers[i].classList.add("hidden");
      
      for(j in filters) {
        if(filteredPapers[i].classList.contains(filters[j])){
          if(categories.length == 0){
            console.log("noCats");
            filteredPapers[i].classList.remove("hidden");
          }
          for(k in categories){
            if(filteredPapers[i].classList.contains(categories[j])){
              filteredPapers[i].classList.remove("hidden");
              
            }
          }
        }
      }
    }*/
  }


    
  
function threeTest(filteredPapers, testArr,arr1,arr2,arr3){
  if(arr1.length == 0 && arr2.length == 0 && arr3.length == 0) {
    console.log("in function");
    for(i in filteredPapers) {
      if(filteredPapers[i].classList == null) continue;
      filteredPapers[i].classList.add("hidden");
      for(j in testArr) {
        if(filteredPapers[i].classList.contains(testArr[j])) {
          filteredPapers[i].classList.remove("hidden");
        }
      }
    }
    return;
  }

}





  function buildCheckBoxesArticle(){
    let container = document.getElementById("article-type");
    
    let articleDiv = document.createElement("div");
    let articleType = [
      "Research Study",
      "Literature Review",
      "Meta-Analysis"
  ];
    let articleValue = [
      "research",
      "literature-review",
      "Meta-Analysis"
    ]
    for(let i in articleType){
      let cb = document.createElement("input");
      cb.name = articleType[i];
      cb.value = articleValue[i];
      cb.type = "checkbox";
      cb.classList.add("filter");
      let label = document.createElement("label");
      label.innerText = articleType[i];
      label.append(cb);
      articleDiv.append(label);
    }
    container.append(articleDiv);
  }

  function buildCheckBoxesResearch(){
    let container = document.getElementById("research-method-type");
    
    let researchDiv = document.createElement("div");
    let researchType = [
      "Qualitative",
      "Longitudinal",
      "Case Study",
      "Cross Sectional",
      "Quasi-Experimental",
      "Qualitative- Ethnographic Study",
      "Quantitative",
      "Randomized Control Design",
      "Thematic analysis",
      "Ethnographic",
      "Randomized Control Trial"
  ];
    let researchValue = [
      "Qualitative",
      "Longitudinal",
      "Case-Study",
      "Cross-Sectional",
      "Quasi-Experimental",
      "Qualitative-Ethnographic-Study",
      "Quantitative",
      "Randomized-Control-Design",
      "Thematic-analysis",
      "Ethnographic",
      "Randomized-Control-Trial"
    ]
    for(let i in researchType){
      let cb = document.createElement("input");
      cb.onclick = showFilteredData;
      cb.name = researchType[i];
      cb.value = researchValue[i];
      cb.type = "checkbox";
      cb.classList.add("research");
      let label = document.createElement("label");
      label.innerText = researchType[i];
      label.append(cb);
      researchDiv.append(label);
    }
    container.append(researchDiv);
  }

  function buildCheckBoxesPopulation(){
    let container = document.getElementById("population-type");
    
    let populationDiv = document.createElement("div");
    let populationList = ["School Personnel",
    "Preschool Students", 
    "Low Income Families",
    "Kindergarten Students",
    "Latino Families",
    "Same Sex Parents",
    "Students in Other Nations", 
    "Elementary School Students",
    "African American Families",
    "Mixed Race Families",
    "Middle School Students",
    "Families in Urban Areas",
    "Students of Minority Groups",
    "High School Students",
    "Students with Learning, Behavioral, or Emotional Difficulties",
    "Families of Minority Groups",
    "Immigrant Families",
    "Adolescent Students",
    "Early Childhood",
    "Foster Families",
    "Disadvantaged Students"
  ];
    let populationValue = [
    "School-Personnel",
    "Preschool-Students", 
    "Low-Income-Families",
    "Kindergarten-Students",
    "Latino-Families",
    "Same-Sex-Parents",
    "Students-in-Other-Nations", 
    "Elementary-School-Students",
    "African-American-Families",
    "Mixed-Race-Families",
    "Middle-School-Students",
    "Families-in-Urban-Areas",
    "Students-of-Minority-Groups",
    "High-School-Students",
    "Students-with-Learning-Behavioral-or-Emotional-Difficulties",
    "Families-of-Minority-Groups",
    "Immigrant-Families",
    "Adolescent-Students",
    "Early-Childhood",
    "Foster-Families",
    "Disadvantaged-Students"
    ]
    for(let i in populationList){
      let cb = document.createElement("input");
      cb.onclick = showFilteredData;
      cb.name = populationList[i];
      cb.value = populationValue[i];
      cb.type = "checkbox";
      cb.classList.add("population");
      let label = document.createElement("label");
      label.innerText = populationList[i];
      label.append(cb);
      populationDiv.append(label);
    }
    container.append(populationDiv);
  }
  function buildCheckBoxesCat(){
    let container = document.getElementById("category-filter");
    
    let categoryDiv = document.createElement("div");
    let categoryType = [
      "Models for Engagement",
      "Community Partnerships",
      "Early Intervention Programs",
      "Interpersonal Relationships",
      "Early Literacy Skills",
      "Parental Involvement at School",
      "Understanding Cultural Diversities",
      "Types of Parental Involvement",
      "School Climate",
      "Families of Minority Groups",
      "Social, Emotional, Behavioral, and Learning Difficulties",
      "Student Motivation",
      "Addressing the Achievement Gap",
      "Barriers and facilitators to parental involvement in student's schools among urban city parents",
      "Programs for Parents",
      "Parental Involvement versus Engagement",
      "Increasing Parental Engagement",
      "Academic Socialization",
      "Teacher Attitudes",
      "Parental Values",
      "Teacher Attitudes",
      "Defining Parental Involvement",
      "Barriers to parental involvement",
      "Parental Engagement Versus Involvement", 
      "Middle School Students",
      "Parenting Style",
      "Adolescent Students",
      "Students with Learning, Behavioral, or Emotional Difficulties",
  ];
    let categoryValue = [
      "models",
      "com-part",
      "early-p",
      "int-rel",
      "early-lit",
      "parent-involvment",
      "understanding-culture",
      "types-parental",
      "school-climate",
      "family-of-minority",
      "C-sebl",
      "student-motivation",
      "addressing-achivemeint",
      "barriers",
      "programs-for-parents",
      "parental-involvment-vs",
      "increasing-parental-engagment",
      "academic-socialization",
      "teacher-attitudes",
      "defining-parental-involvement",
      "barriers-to-parental-involvment",
      "parrental-engagment-vs-involvment",
      "middle-school-students",
      "parenting-style",
      "adolescent-students",
      "students-with-learning",
     
    ]
    for(let i in categoryType){
      let cb = document.createElement("input");
      cb.onclick = showFilteredData;
      cb.name = categoryType[i];
      cb.value = categoryValue[i];
      cb.type = "checkbox";
      cb.classList.add("categories");
      let label = document.createElement("label");
      label.innerText = categoryType[i];
      label.append(cb);
      categoryDiv.append(label);
    }
    container.append(categoryDiv);
  }


  /*function showFilteredData2() {
    console.log("test234");
    let filters = [];
    let filterBoxes = document.getElementsByClassName("filter2");
    for(i in filterBoxes) {
      if(filterBoxes[i].checked) {
        filters.push(filterBoxes[i].value);
      }
    }
    let filteredPapers = document.querySelectorAll(`.paper`);
    //  if there is no filter show all papers
    if(filters.length == 0) {
      //console.log("test in if statement");
      for(i in filteredPapers) {
        if(filteredPapers[i].classList == null) continue;
        //console.log("after continue");
        filteredPapers[i].classList.remove("hidden");
        return;
    }
  }
  let count = 0;
    // go through papers and show them if the filter applies
    for(i in filteredPapers) {
      if(filteredPapers[i].classList == null) continue;
      filteredPapers[i].classList.add("hidden");
      
      for(j in filters) {
        
        if(filteredPapers[i].classList.contains(filters[j])) {
          count++;
          
          filteredPapers[i].classList.remove("hidden");
        }
      }
      
    }
    console.log(count);
  }*/

  function getResearchItem(info){
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

  let populationList = ["School Personnel",
    "Preschool Students", 
    "Low Income Families",
   " Kindergarten Students",
    "Latino Families",
    "Same Sex Parents",
    "Students in Other Nations", 
    "Elementary School Students",
    "African American Families",
    "Mixed Race Families",
    "Middle School Students",
    "Families in Urban Areas",
    "Students of Minority Groups",
   "High School Students",
   "Students with Learning, Behavioral, or Emotional Difficulties",
    "Families of Minority Groups",
    "Immigrant Families",
    "Adolescent Students",
    "Early Childhood",
   "Foster Families",
   "Disadvantaged Students",
  ];

  let catagoryList = [
    "Models for Engagement",
    "Community Partnerships",
    "Early Intervention Programs",
    "Interpersonal Relationships",
    "Early Literacy Skills",
    "Parental Involvement at School",
    "Understanding Cultural Diversities",
    "Types of Parental Involvement",
    "School Climate",
    "Families of Minority Groups",
    "Social, Emotional, Behavioral, and Learning Difficulties",
    "Student Motivation",
    "Addressing the Achievement Gap",
    "Barriers and facilitators to parental involvement in student's schools among urban city parents",
    "Programs for Parents",
    "Parental Involvement versus Engagement",
    "Increasing Parental Engagement",
    "Academic Socialization",
    "Teacher Attitudes",
    "Parental Values",
    "Teacher Attitudes",
    "Defining Parental Involvement",
    "Barriers to parental involvement",
    "Parental Engagement Versus Involvement", 
    "Middle School Students",
    "Parenting Style",
    "Adolescent Students",
    "Students with Learning, Behavioral, or Emotional Difficulties",
  ];

 
  let researchMethodologyList = [
      "qualitative-ethnographic",
      "narrative",
      "case-study",
      "quantitative-descriptive",
      "quasi-experimental",
      "mixed methods-triangulation",
      "embedded",
      "exploratory",
      "quantitative"
  ];
    let infoSection = document.createElement("section");
    //  Filtering Section
    //  Done by different section as per JSON file
    // For next developer please put these in a for loop
    // Article Type
    infoSection.classList.add("paper");
    if(info.ArticleType.includes("Research Study"))
      infoSection.classList.add("research");
    if(info.ArticleType.includes("Literature Review"))
      infoSection.classList.add("literature-review");
    if(info.ArticleType.includes("Meta-Analysis"))
      infoSection.classList.add("Meta-Analysis");
  
    
    if(info.Category.includes("Early Literacy Skills"))
      infoSection.classList.add("early-lit");
    if(info.Category.includes("Models for Engagement"))
      infoSection.classList.add("models");
    if(info.Category.includes("Community Partnerships"))
      infoSection.classList.add("com-part");
    if(info.Category.includes("Early Intervention Programs"))
      infoSection.classList.add("early-p");
    if(info.Category.includes("Interpersonal Relationships"))
      infoSection.classList.add("int-rel");
    if(info.Category.includes("Parental Involvement at School"))
      infoSection.classList.add("parent-involvment");
    if(info.Category.includes("Understanding Cultural Diversities"))
      infoSection.classList.add("understanding-culture");
    if(info.Category.includes("Types of Parental Involvement"))
      infoSection.classList.add("types-parental");
    if(info.Category.includes("School Climate"))
      infoSection.classList.add("school-climate");
    if(info.Category.includes("Families of Minority Groups"))
      infoSection.classList.add("family-of-minority");
    if(info.Category.includes("Social, Emotional, Behavioral, and Learning Difficulties"))
      infoSection.classList.add("C-sebl");
    if(info.Category.includes("Student Motivation"))
      infoSection.classList.add("student-motivation");
    if(info.Category.includes("Addressing the Achievement Gap"))
      infoSection.classList.add("addressing-achivemeint");
    if(info.Category.includes("Barriers and facilitators to parental involvement in student's schools among urban city parents"))
      infoSection.classList.add("barriers");
    if(info.Category.includes("Programs for Parents"))
      infoSection.classList.add("programs-for-parents");
    if(info.Category.includes("Parental Involvement versus Engagement"))
      infoSection.classList.add("parental-involvment-vs");
    if(info.Category.includes("Increasing Parental Engagement"))
      infoSection.classList.add("increasing-parental-engagment");
    if(info.Category.includes("Academic Socialization"))
      infoSection.classList.add("academic-socialization");
    if(info.Category.includes("Teacher Attitudes"))
      infoSection.classList.add("teacher-attitudes");
    if(info.Category.includes("Parental Values"))
      infoSection.classList.add("parenting-style");///needs to change
    if(info.Category.includes("Defining Parental Involvement"))
      infoSection.classList.add("defining-parental-involvement");
    if(info.Category.includes("Barriers to parental involvement"))
      infoSection.classList.add("barriers-to-parental-involvment");
    if(info.Category.includes("Parental Engagement Versus Involvement"))
      infoSection.classList.add("parrental-engagment-vs-involvment");
    if(info.Category.includes("Middle School Students"))
      infoSection.classList.add("middle-school-students");
    if(info.Category.includes("Parenting Style"))
      infoSection.classList.add("parenting-style");
    if(info.Category.includes("Adolescent Students"))
      infoSection.classList.add("adolescent-students");
    if(info.Category.includes("Students with Learning, Behavioral, or Emotional Difficulties"))
      infoSection.classList.add("students-with-learning");
     
   
    // Population
    
    if(info.Population.includes("School Personnel"))
      infoSection.classList.add("School-Personnel");
    if(info.Population.includes("Preschool Students"))
      infoSection.classList.add("Preschool-Students");
    if(info.Population.includes("Low Income Families"))
      infoSection.classList.add("Low-Income-Families");
    if(info.Population.includes("Kindergarten Students"))
      infoSection.classList.add("Kindergarten-Students");
    if(info.Population.includes("Latino Families"))
      infoSection.classList.add("Latino-Families");
    if(info.Population.includes("Same Sex Parents"))
      infoSection.classList.add("Same-Sex-Parents");
    if(info.Population.includes("Students in Other Nations"))
      infoSection.classList.add("Students-in-Other-Nations");
    if(info.Population.includes("Elementary School Students"))
      infoSection.classList.add("Elementary-School-Students");
    if(info.Population.includes("African American Families"))
      infoSection.classList.add("African-American-Families");
    if(info.Population.includes("Mixed Race Families"))
      infoSection.classList.add("Mixed-Race-Families");
    if(info.Population.includes("Middle School Students"))
      infoSection.classList.add("Middle-School-Students");
    if(info.Population.includes("Families inUrban Areas"))
      infoSection.classList.add("Families-in-Urban-Areas");
    if(info.Population.includes("Students of Minority Groups"))
      infoSection.classList.add("Students-of-Minority-Groups");
    if(info.Population.includes("Immigrant Families"))
      infoSection.classList.add("Immigrant-Families");
    if(info.Population.includes("Adolescent Students"))
      infoSection.classList.add("Adolescent-Students");
    if(info.Population.includes("Early Childhood"))
      infoSection.classList.add("Early-Childhood");
    if(info.Population.includes("Foster Families"))
      infoSection.classList.add("Foster-Families");
    if(info.Population.includes("Disadvantaged Students"))
      infoSection.classList.add("Disadvantaged-Students");
    if(info.Population.includes("Students with Learning, Behavioral, or Emotional Difficulties"))
      infoSection.classList.add("Students-with-Learning-Behavioral-Emotional-Difficulties");
    if(info.Population.includes("High School Students"))
      infoSection.classList.add("High-School-Students");
    
    //  Research Methodology
   
    
    if(info.ResearchMethodology.includes("Qualitative"))
      infoSection.classList.add("Qualitative");
    if(info.ResearchMethodology.includes("Longitudinal"))
      infoSection.classList.add("Longitudinal");
    if(info.ResearchMethodology.includes("Case Study"))
      infoSection.classList.add("Case-Study");
    if(info.ResearchMethodology.includes("Quasi-Experimental"))
      infoSection.classList.add("Quasi-Experimental");
    if(info.ResearchMethodology.includes("Qualitative- Ethnographic Study"))
      infoSection.classList.add("Qualitative-Ethnographic-Study");
    if(info.ResearchMethodology.includes("Quantitative"))
      infoSection.classList.add("Quantitative");
    if(info.ResearchMethodology.includes("Randomized Control Design"))
      infoSection.classList.add("Randomized-Control-Design");
    if(info.ResearchMethodology.includes("Thematic analysis"))
      infoSection.classList.add("Thematic-analysis");
    if(info.ResearchMethodology.includes("Ethnographic"))
      infoSection.classList.add("Ethnographic");
    if(info.ResearchMethodology.includes("Ethnographic"))
      infoSection.classList.add("Ethnographic");
  
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
    buildCheckBoxesArticle();
    buildCheckBoxesCat();
    buildCheckBoxesPopulation();
    buildCheckBoxesResearch();
    
    let filterBoxes = document.getElementsByClassName("filter");
    let filterBoxes2 = document.getElementsByClassName("filter2");
    for(i in filterBoxes){
      filterBoxes[i].onclick = showFilteredData;
     // for(j in filterBoxes2){
     // filterBoxes[i].onclick = showFilteredData32;
    }
    //}
  //for(i in filterBoxes2){
  //}
  
    this.showInfo();
  }