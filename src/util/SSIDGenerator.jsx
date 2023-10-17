export default class SSIDGenerator {
    static generateSSID() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        const ssidLength = 8;

        let ssid = '';
        for (let i = 0; i < ssidLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            ssid += characters.charAt(randomIndex);
        }

        return ssid;
    }
}