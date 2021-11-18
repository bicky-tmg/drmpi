const BACKEND_DOMAIN = "http://localhost:5000";

export async function getAllNotices() {
  const response = await fetch(`${BACKEND_DOMAIN}/api/v1/Notice/GetNoticeList`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch notices.");
  }

  return data;
}

export async function getSingleNotice(noticeId) {
  const response = await fetch(
    `${BACKEND_DOMAIN}/api/v1/Notice/GetNoticeById/${noticeId}`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch the requested notices.");
  }

  return data;
}

export async function getMainContentUI() {
  const response = await fetch(
    `${BACKEND_DOMAIN}/api/v1/Home/GetMainContent_UI`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch the content for slider.");
  }

  return data;
}

export async function getShortTermPrograms() {
  const response = await fetch(
    `${BACKEND_DOMAIN}/api/v1/ShortTermProgram/GetShortTermProgramContent_UI`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Could not fetch the content for Short Term Programs."
    );
  }

  return data;
}

export async function getAcademicPrograms() {
  const response = await fetch(
    `${BACKEND_DOMAIN}/api/v1/Courses/GetCoursesContent_UI`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Could not fetch the content for Academic Programs."
    );
  }

  return data;
}

export async function getSingleAcademicPrograms(courseId) {
  const response = await fetch(
    `${BACKEND_DOMAIN}/api/v1/Courses/GetCourseById/${courseId}`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error.message(
      data.message || "Could not fetch the requested course."
    );
  }

  return data;
}

export async function getWelcomeMsg() {
  const response = await fetch(
    `${BACKEND_DOMAIN}/api/v1/WelcomeMsg/GetWelcomeMsgContent_UI`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error.message(data.message || "Welcome to DRMPI.");
  }

  return data;
}

export async function getScholarship() {
  const response = await fetch(
    `${BACKEND_DOMAIN}/api/v1/Scholarship/GetScholarshipContent_UI`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch scholarships.");
  }

  return data;
}

export async function getDownloads() {
  const response = await fetch(
    `${BACKEND_DOMAIN}/api/v1/Download/GetDownloadFilesList_UI`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch the downloads.");
  }

  return data;
}

export async function getSingleDownloads(downloadId) {
  const response = await fetch(
    `${BACKEND_DOMAIN}/api/v1/Download/GetDownloadFileById/${downloadId}`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error.message(
      data.message || "Could not fetch the requested file."
    );
  }

  return data;
}

export async function getResults() {
  const response = await fetch(
    `${BACKEND_DOMAIN}/api/v1/Results/GetResultsList_UI`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch the results.");
  }

  return data;
}

export async function getVacancy() {
  const response = await fetch(
    `${BACKEND_DOMAIN}/api/v1/Vaccancy/GetVaccancyList`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch the vacancy list.");
  }

  return data;
}

export async function getSingleVacancy(vacancyId) {
  const response = await fetch(
    `${BACKEND_DOMAIN}/api/v1/Vaccancy/GetVaccancyById/${vacancyId}`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error.message(
      data.message || "Could not fetch the requested vacancy."
    );
  }

  return data;
}

export async function getSingleShortTermProgram(shortTermProgramsId) {
  const response = await fetch(
    `${BACKEND_DOMAIN}/api/v1/ShortTermProgram/GetShortTermProgramById/${shortTermProgramsId}`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error.message(
      data.message || "Could not fetch the requested program."
    );
  }

  return data;
}

export async function addEnquiry(enquiryData) {
  const response = await fetch(`${BACKEND_DOMAIN}/api/v1/ContactUs/Send`, {
    method: "POST",
    body: JSON.stringify(enquiryData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not send the message.");
  }

  return null;
}
