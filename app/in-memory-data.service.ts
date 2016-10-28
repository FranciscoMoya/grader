import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let tasks = [
        {
            id: '11',
            title: 'Un titulito',
            description: 'Hacer y hacer',
            test: 'probar y probar'
        },
        {
            id: '12',
            title: 'Un doce',
            description: 'Hacer y hacer para 12',
            test: 'probar y probar 12'
        },
        {
            id: '13',
            title: 'Un trece',
            description: 'Hacer y hacer para 13',
            test: 'probar y probar 13'
        },
    ];
    return {tasks};
  }
}
