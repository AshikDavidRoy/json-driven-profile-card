async function loadProfileData() {
  const response = await fetch("data.json");
  if (!response.ok) {
    throw new Error("Failed to load profile data");
  }
  return response.json();
}

function renderProfile(data) {
  const { profile, sections } = data;

  document.getElementById("cardCover").style.backgroundImage =
    `url('${profile.coverImage}')`;
  document.getElementById("cardAvatar").src = profile.avatar;
  document.getElementById("cardName").textContent = profile.name;
  document.getElementById("cardJobTitle").textContent = profile.jobTitle;

  document.getElementById("aboutTitle").textContent = sections.about.title;
  document.getElementById("aboutContent").textContent = sections.about.content;

  renderSocialLinks(sections.about.social);
  renderTimeline(sections.experience.timeline);
  renderContact(sections.contact.info);
  renderNavButtons(sections);
}

function renderSocialLinks(social) {
  const container = document.getElementById("socialLinks");
  container.innerHTML = "";
  social.forEach(item => {
    const a = document.createElement("a");
    a.href = item.url;
    a.innerHTML = `<i class="${item.icon}"></i>`;
    container.appendChild(a);
  });
}

function renderTimeline(timeline) {
  const container = document.getElementById("timelineContainer");
  container.innerHTML = "";
  timeline.forEach(item => {
    const div = document.createElement("div");
    div.className = "card-item";
    div.setAttribute("data-year", item.year);
    div.innerHTML = `
      <div class="card-item-title">${item.title}</div>
      <div class="card-item-desc">${item.description}</div>
    `;
    container.appendChild(div);
  });
}

function renderContact(info) {
  const container = document.getElementById("contactContainer");
  container.innerHTML = "";
  info.forEach(item => {
    const div = document.createElement("div");
    div.className = "card-contact";
    div.textContent = item.text;
    container.appendChild(div);
  });
}

function renderNavButtons(sections) {
  const container = document.getElementById("navButtons");
  container.innerHTML = "";
  Object.keys(sections).forEach((key, index) => {
    const btn = document.createElement("button");
    btn.textContent = sections[key].title;
    btn.dataset.section = `#${key}`;
    if (index === 0) btn.classList.add("is-active");
    btn.addEventListener("click", handleNavClick);
    container.appendChild(btn);
  });
}

function handleNavClick(e) {
  const target = e.target.dataset.section;
  const card = document.querySelector(".card");

  document.querySelectorAll(".card-section").forEach(s =>
    s.classList.remove("is-active")
  );
  document.querySelectorAll(".card-buttons button").forEach(b =>
    b.classList.remove("is-active")
  );

  document.querySelector(target).classList.add("is-active");
  e.target.classList.add("is-active");

  card.setAttribute("data-state", target);
  target === "#about"
    ? card.classList.remove("is-active")
    : card.classList.add("is-active");
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const data = await loadProfileData();
    renderProfile(data);
  } catch (err) {
    console.error(err);
  }
});
