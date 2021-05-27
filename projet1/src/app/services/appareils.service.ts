export class AppareilsService {
    appareils = [
        {
            titre: 'Ordinateur',
            status: 'Allumé',
            date: 'Tue May 25 2021 10:40:00'
        },
        {
            titre: 'Télévision',
            status: 'Eteint',
            date: 'Tue May 25 2021 10:40:00'
        },
        {
            titre: 'Ecran',
            status: 'Allumé',
            date: 'Tue May 25 2021 10:40:00'
        }
    ]
    
    switchOnAll() {
        for(let appareil of this.appareils) {
            appareil.status = 'Allumé';
        }
    }

    switchOffAll() {
        for(let appareil of this.appareils) {
            appareil.status = 'Eteint';
        }
    }
}