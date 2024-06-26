class Project {
	constructor(title, fw, progLang, pltf, image, repo, download) {
		this.title = title;
		this.fw = fw;
		this.progLang = progLang;
		this.pltf = pltf;
		this.image = image;
		this.repo = repo;
		this.download = download;
	}
}

var projects = [
	new Project(
		"GongYun - Campus Helper for HBUT",
		"Jetpack Compose",
		"Kotlin",
		"Android",
		"assets/gong_yun.png",
		"https://github.com/founchoo/GongYun-for-Android",
		"https://play.google.com/store/apps/details?id=com.dart.campushelper"
	),
	new Project(
		"Sudoku Parser",
		"UWP",
		"C#",
		"Windows",
		"assets/sp.png",
		null,
		"https://www.microsoft.com/store/productId/9N6R8ZJJQS5S"
	),
	new Project(
		"Hotel Management System",
		"SpringBoot",
		"Java",
		"Web",
		"assets/hms.png",
		null,
		null
	),
	new Project(
		"Car Rental Platform",
		"SpringBoot & Vite",
		"Java",
		"Web",
		"assets/crp.png",
		"https://github.com/founchoo/CarRentalPlatform.Frontend",
		null
	),
	new Project(
		"Study Abroad Service Center",
		"SpringBoot",
		"Java",
		"Web",
		"assets/sasc.png",
		"https://github.com/founchoo/Study-Aboard-Service-Center",
		null
	),
	new Project(
		"Echo - A language learning tool for disabled people",
		"SpringBoot",
		"Java",
		"Web",
		null,
		"https://github.com/founchoo/echo",
		null
	),
	new Project(
		"Sentiment Analysis",
		"Flutter",
		"Dart",
		"All",
		null,
		"https://github.com/founchoo/sentiment_analysis",
		null
	),
	new Project(
		"Oil Level Supervisor - Oil level gas detection system for oil-immersed power transformer",
		"WindowsAppSDK & WinUI3",
		"C#",
		"Windows",
		"assets/or.ico",
		null,
		null
	),
	new Project(
		"Magic Remover - Image inpainter & remover",
		"PyQt",
		"Python",
		"Windows",
		"assets/mr.png",
		null,
		null
	),
];

function getResolvedTemplate(project) {
	var template =
		`<div class="col-md-auto">
			<div class="card my-3">
				<div class="row g-0">
					${project.image == null ? "" : `<div class="col-md-2 d-flex align-items-center justify-content-center"><img src="${project.image}" alt="..." class="img-fluid rounded-7 card-img-scale" />
					</div>`}
					<div class="col-md-10">
						<div class="card-body">
							<h5 class="card-title">${project.title}</h5>
							<p class="card-text">
								<span class="badge badge-primary">${project.fw}</span>
								<span class="badge badge-primary">${project.progLang}</span>
								<span class="badge badge-primary">${project.pltf}</span>
							</p>
							<div class="col">
								${project.repo == null ? "" : `<a href="${project.repo}" target="_blank"
								class="btn btn-secondary">Go to repository</a>`}
								${project.download == null ? "" : `<a href="${project.download}"
								target="_blank" class="btn btn-light">Download from
								${project.download.startsWith("https://play.google.com") ? `Play Store` : (project.download.startsWith("https://www.microsoft.com") ? `Microsoft Store` : `Here`)}</a>`}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>`;
	return template;
}

window.onscroll = function () {
	var indicator = document.getElementById("go-up-indicator");
	if (document.documentElement.scrollTop == 0) {
		indicator.classList.remove('animate__fadeIn');
		indicator.classList.add('animate__fadeOut');
	} else {
		indicator.classList.remove('animate__fadeOut');
		indicator.classList.add('animate__fadeIn');
	}
}

window.onload = function () {
	var projectContainer = document.getElementById("project-container");
	projects.forEach(project => {
		projectContainer.innerHTML += getResolvedTemplate(project);
	});
}