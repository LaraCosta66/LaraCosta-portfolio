async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/LaraCosta66/LaraCosta.github.io/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}