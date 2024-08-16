// Example
function getUserSettings(userSettings) {
    const settings = {
        theme: userSettings.theme || 'light',   // Se não definido, usa 'light'
        language: userSettings.language || 'en',    // Se não definido, usa 'en'
        showNotifications: userSettings.showNotifications !== undefined ? userSettings.showNotifications : true // Se não definido, usa true
    };
    return settings;
}

const userSettings = {
    theme: 'dark',
    language: '',
    showNotifications: false,
};

console.log(getUserSettings(userSettings));
// Resultado: { theme: 'dark', language: 'en', showNotifications: false }
