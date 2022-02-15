
let data = {
  "name": "James Bond",
  "address": "28 - Oliver Street, London , UK",
  "email": "james123bond@gmail.com",
  "summary": "The professional summary for a resume is a brief statement highlighting your work experience, achievements and skills. It should be placed in the top section of your resume. The purpose of a professional resume summary is to entice the hiring manager to read the rest of the resume.",
  "projects": [
    {
      "project_title": "Project_1",
      "project_des_1": "lorem ipsum",
      "project_des_2": "lorem ipsum",
      "project_des_3": "lorem ipsum",
    },
    {
      "project_title": "Project_2",
      "project_des_1": "lorem ipsum",
      "project_des_2": "lorem ipsum",
      "project_des_3": "lorem ipsum",
    }
  ],
  "experience": [
    {
      "company_name": "Company_1",
      "designation": "Designation",
      "period": "",
    },
    {
      "company_name": "Company_2",
      "designation": "Designation",
      "period": "",
    },
  ],
  "education": [
    {
      "degree": "Degree_name",
      "insitute": "Insitute_name",
      "period": "",
    },
    {
      "degree": "Degree_name",
      "insitute": "Insitute_name",
      "period": "",
    },
  ],
};

$(".resume-block").click(function (e) {
  $(".resume-block.selected").removeClass("selected");
  $(this).addClass("selected");
  $(".info-div").empty();
});

$(".name-block").click(function (e) {
  let box = $(`<div class="box-container">
              <div class="name-text">Name</div>
              <div class="name-input input" contenteditable="true">${data["name"]}</div>
              <div class="address-text">Address</div>
              <div class="address-input input" contenteditable="true">${data["address"]}</div>
              <div class="email-text">Email</div>
              <div class="email-input input" contenteditable="true">${data["email"]}</div>
            </div>`);
  $(".info-div").append(box);
  
  $(".name-input").on('input', function (e) {
    data["name"] = $(".name-input").text();
    changeHeaders();
  });
  $(".address-input").on('input', function (e) {
    data["address"] = $(".address-input").text();
    changeHeaders();
  });
  $(".email-input").on('input', function (e) {
    data["email"] = $(".email-input").text();
    changeHeaders();
  });
});

$(".summary").click(function (e) {
  let box = $(` <div class="box-container">
                  <div class="summary-1-text">Summary</div>
                  <div class="summary-1-input" contenteditable="true">${data["summary"]}</div>
                </div>`);
  $(".info-div").append(box);
  $(".summary-1-input").on('input', function (e) {
    data["summary"] = $(".summary-1-input").text();
    changeHeaders();
  });
});

$(".projects").click(function(e){
  let box = $(`<div class="bigbox-container">
  <div class="project-details">
  <div class="project-1-text">Project-1 Title</div>
  <div class="bigbox-input" id="project-1-name" contenteditable="true">${data["projects"][0]["project_title"]}</div>
  <div class="project-des des-1" contenteditable="true">${data["projects"][0]["project_des_1"]}</div>
  <div class="project-des des-2" contenteditable="true">${data["projects"][0]["project_des_2"]}</div>
  <div class="project-des des-3" contenteditable="true">${data["projects"][0]["project_des_3"]}</div>
</div>
<div class="project-details">
  <div class="project-2-text">Project-2 Title</div>
  <div class="bigbox-input" id="project-2-name" contenteditable="true">${data["projects"][1]["project_title"]}</div>
  <div class="project-des des-4" contenteditable="true">${data["projects"][1]["project_des_1"]}</div>
  <div class="project-des des-5" contenteditable="true">${data["projects"][1]["project_des_2"]}</div>
  <div class="project-des des-6" contenteditable="true">${data["projects"][1]["project_des_3"]}</div>
</div>
</div>`);
$(".info-div").append(box);

for(let i=1;i<=2;i++){

  $(`#project-${i}-name`).on('input', function (e) { 
  data["projects"][i-1]["project_title"] = $(`#project-${i}-name`).text();
  changeHeaders();
});

}

for(let i=0;i<=5;i++)
{
  $(`.des-${i+1}`).on('input', function (e) {
    data["projects"][`${Math.floor(i/3)}`][`project_des_${getVal(i+1)}`] = $(`.des-${i+1}`).text();
    changeHeaders();
  });
}

});

$(".experience").click(function(e){
    let box = $(`<div class="bigbox-container">
                  <div class="company-details">
                  <div class="details-1-text">Company-1 Details</div>
                  <div class="bigbox-input" id="company-1-name" contenteditable="true">${data["experience"][0]["company_name"]}</div>
                  <div class="company-des-1 bigbox-input" contenteditable="true">${data["experience"][0]["designation"]}</div>
                  <div class="exp-period-1 bigbox-input" contenteditable="true">${data["experience"][0]["period"]}</div>
                </div>
                <div class="company-details">
                  <div class="details-2-text">Company-2 Details</div>
                  <div class="bigbox-input" id="company-2-name" contenteditable="true">${data["experience"][1]["company_name"]}</div>
                  <div class="company-des-2 bigbox-input" contenteditable="true">${data["experience"][1]["designation"]}</div>
                  <div class="exp-period-2 bigbox-input" contenteditable="true">${data["experience"][1]["period"]}</div>
                </div>
                </div>`);
    $(".info-div").append(box);
    $("#company-1-name").on('input', function (e) {
      data["experience"][0]["company_name"] = $("#company-1-name").text();
      changeHeaders();
    });
    $(".company-des-1").on('input', function (e) {
      data["experience"][0]["designation"] = $(".company-des-1").text();
      changeHeaders();
    });
    $(".exp-period-1").on('input', function (e) {
      data["experience"][0]["period"] = $(".exp-period-1").text();
      changeHeaders();
    });
    $("#company-2-name").on('input', function (e) {
      data["experience"][1]["company_name"] = $("#company-2-name").text();
      changeHeaders();
    });
    $(".company-des-2").on('input', function (e) {
      data["experience"][1]["designation"] = $(".company-des-2").text();
      changeHeaders();
    });
    $(".exp-period-2").on('input', function (e) {
      data["experience"][1]["period"] = $(".exp-period-2").text();
      changeHeaders();
    });
});

$(".education").click(function(e){
   let box = $(`<div class="bigbox-container">
                <div class="education-details">
                <div class="details-1-text">Education Details-1</div>
                <div class="bigbox-input" id="degree-1-name" contenteditable="true">${data["education"][0]["degree"]}</div>
                <div class="insitute-1 bigbox-input" contenteditable="true">${data["education"][0]["insitute"]}</div>
                <div class="edu-period-1 bigbox-input" contenteditable="true">${data["education"][0]["period"]}</div>
              </div>
              <div class="education-details">
                <div class="details-1-text">Education Details-2</div>
                <div class="bigbox-input" id="degree-2-name" contenteditable="true">${data["education"][1]["degree"]}</div>
                <div class="insitute-2 bigbox-input" contenteditable="true">${data["education"][1]["insitute"]}</div>
                <div class="edu-period-2 bigbox-input" contenteditable="true">${data["education"][1]["period"]}</div>
              </div>
              </div>`);
    $(".info-div").append(box);
    $("#degree-1-name").on('input', function (e) {
      data["education"][0]["degree"] = $("#degree-1-name").text();
      changeHeaders();
    });
    $(".insitute-1").on('input', function (e) {
      data["education"][0]["insitute"] = $(".insitute-1").text();
      changeHeaders();
    });
    $(".edu-period-1").on('input', function (e) {
      data["education"][0]["period"] = $(".edu-period-1").text();
      changeHeaders();
    });
    $("#degree-2-name").on('input', function (e) {
      data["education"][1]["degree"] = $("#degree-2-name").text();
      changeHeaders();
    });
    $(".insitute-2").on('input', function (e) {
      data["education"][1]["insitute"] = $(".insitute-2").text();
      changeHeaders();
    });
    $(".edu-period-2").on('input', function (e) {
      data["education"][1]["period"] = $(".edu-period-2").text();
      changeHeaders();
    });
   
});


function getVal(val){
  if(val % 3 == 0){
     return 3;
  }else{
     return val % 3;
  }
}

function changeHeaders() {
  $(".name").text(data["name"]);
  $(".address").text(data["address"]);
  $(".email").text(data["email"]);
  $(".summary-text").text(data["summary"]);
  $(".title-1").text(data["projects"][0]["project_title"]);
  $(".title-2").text(data["projects"][1]["project_title"]);
  for(let i=1;i<=3;i++){
  $(`#des-${i}`).text(data["projects"][0][`project_des_${i}`]);
  }
  for(let i=1;i<=3;i++){
    $(`#des-${i+3}`).text(data["projects"][1][`project_des_${i}`]);
  }
  for(let i=0;i<=1;i++){
    $(`.company-name-${i+1}`).text(data["experience"][i]["company_name"]);
    $(`.designation-${i+1}`).text(data["experience"][i]["designation"]);
    $(`.time-period-${i+1}`).text(data["experience"][i]["period"]);
  }
  for(let i=0;i<=1;i++){
    $(`.d-${i+1}`).text(data["education"][i]["degree"]);
    $(`.i-${i+1}`).text(data["education"][i]["insitute"]);
    $(`.p-${i+1}`).text(data["education"][i]["period"]);
  }
}

$(".input").click(function (e) {
  $(this).focus();
});

function CreatePDFfromHTML() {
  $(".resume-block.selected").removeClass("selected");
  $(".resume-div").css("height","135vh");
  var HTML_Width = $(".resume-div").width();
  var HTML_Height = $(".resume-div").height();
  var top_left_margin = 5;
  var PDF_Width = HTML_Width + (top_left_margin * 2);
  var PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
  var canvas_image_width = HTML_Width;
  var canvas_image_height = HTML_Height;

  var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;
  html2canvas($(".resume-div")[0]).then(function (canvas) {
      var imgData = canvas.toDataURL("image/jpeg", 1.0);
      var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
      pdf.addImage(imgData, 'PDF', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
      for (var i = 1; i <= totalPDFPages; i++) { 
          pdf.addPage(PDF_Width, PDF_Height);
          pdf.addImage(imgData, 'PDF', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
      }
      pdf.save(`${data["name"]}_resume.pdf`);
  });
  $(".resume-div").css("height","100vh");
}

$(".download-button").click(function(e){
  if($(window).width() < 700){
    alert("Download not available in Mobile Version");
    return;
  }
  CreatePDFfromHTML();
})

$(document).ready(function(e){
  if($(window).width() < 900){
    $(".main-container").empty();
    $(".download-button").remove();
    let errDiv = $(`<div style="display:flex; align-items:center";>
    <div class="box" style="color:red; font-size : 20px ; font-family:Comic Sans Ms; ">
      Kindly Switch to Desktop to view the page.
    </div>
    </div>`);
    $(".main-container").append(errDiv);
    alert("Webpage only available in Desktop");
    return;
  }
})