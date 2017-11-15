export default {
  retrieveSpots,
  retrieveSpotsConnections
}

async function retrieveSpotsConnections () {
  return new Promise((resolve) => {
    resolve(
      [
        {
          id: 1,
          name: 'taxi',
          spots: [ 1, 9 ]
        },
        {
          id: 2,
          name: 'taxi',
          spots: [ 1, 8 ]
        },
        {
          id: 3,
          name: 'taxi',
          spots: [ 8, 18 ]
        },
        {
          id: 3,
          name: 'taxi',
          spots: [ 8, 19 ]
        },
        {
          id: 4,
          name: 'metro',
          spots: [ 1, 46 ]
        },
        {
          id: 5,
          name: 'bus',
          spots: [ 1, 58 ]
        },
        {
          id: 6,
          name: 'taxi',
          spots: [ 9, 20 ]
        },
        {
          id: 7,
          name: 'taxi',
          spots: [ 20, 33 ]
        },
        {
          id: 8,
          name: 'taxi',
          spots: [ 33, 46 ]
        },
        {
          id: 9,
          name: 'taxi',
          spots: [ 45, 46 ]
        },
        {
          id: 10,
          name: 'taxi',
          spots: [ 58, 45 ]
        },
        {
          id: 11,
          name: 'bus',
          spots: [ 58, 46 ]
        },
        {
          id: 12,
          name: 'taxi',
          spots: [ 57, 58 ]
        },
        {
          id: 13,
          name: 'taxi',
          spots: [ 43, 57 ]
        },
        {
          id: 14,
          name: 'taxi',
          spots: [ 9, 19 ]
        },
        {
          id: 15,
          name: 'taxi',
          spots: [ 19, 32 ]
        },
        {
          id: 16,
          name: 'taxi',
          spots: [ 32, 33 ]
        },
        {
          id: 17,
          name: 'taxi',
          spots: [ 32, 44 ]
        },
        {
          id: 18,
          name: 'taxi',
          spots: [ 32, 45 ]
        },
        {
          id: 19,
          name: 'taxi',
          spots: [ 18, 31 ]
        },
        {
          id: 20,
          name: 'taxi',
          spots: [ 18, 43 ]
        },
        {
          id: 21,
          name: 'taxi',
          spots: [ 31, 44 ]
        },
        {
          id: 22,
          name: 'taxi',
          spots: [ 31, 43 ]
        },
        {
          id: 22,
          name: 'taxi',
          spots: [ 44, 58 ]
        }
      ]
    )
  })
}

async function retrieveSpots () {
  return new Promise((resolve) => {
    resolve(
      [
        {
          number: 1,
          position: { x: 500, y: 100 },
          status: { taxi: true, bus: true, metro: true },
          possibleRoute: [
            { spot: 8, type: 'taxi' }, { spot: 9, type: 'taxi' }, { spot: 58, type: 'bus' }
          ]
        },
        {
          number: 8,
          position: { x: 350, y: 250 },
          status: { taxi: true, bus: false, metro: false },
          possibleRoute: [ 1, 19, 18 ]
        },
        {
          number: 9,
          position: { x: 650, y: 250 },
          status: { taxi: true, bus: false, metro: false },
          possibleRoute: [ 1, 20, 19 ]
        },
        {
          number: 18,
          position: { x: 220, y: 380 },
          status: { taxi: true, bus: false, metro: false },
          possibleRoute: [ 8, 31, 43 ]
        },
        {
          number: 19,
          position: { x: 460, y: 420 },
          status: { taxi: true, bus: false, metro: false },
          possibleRoute: [ 8, 9, 32 ]
        },
        {
          number: 20,
          position: { x: 800, y: 320 },
          status: { taxi: true, bus: false, metro: false },
          possibleRoute: [ 9, 33 ]
        },
        {
          number: 31,
          position: { x: 300, y: 480 },
          status: { taxi: true, bus: false, metro: false },
          possibleRoute: [ 18, 43, 44 ]
        },
        {
          number: 32,
          position: { x: 670, y: 550 },
          status: { taxi: true, bus: false, metro: false },
          possibleRoute: [
            { spot: 19, type: 'taxi' },
            { spot: 33, type: 'taxi' },
            { spot: 44, type: 'taxi' },
            { spot: 45, type: 'taxi' } ]
        },
        {
          number: 33,
          position: { x: 1000, y: 530 },
          status: { taxi: true, bus: false, metro: false },
          possibleRoute: [ 46, 32, 20 ]
        },
        {
          number: 43,
          position: { x: 150, y: 600 },
          status: { taxi: true, bus: false, metro: false },
          possibleRoute: [ 18, 31, 57 ]
        },
        {
          number: 44,
          position: { x: 500, y: 650 },
          status: { taxi: true, bus: false, metro: false },
          possibleRoute: [ 31, 32, 58 ]
        },
        {
          number: 45,
          position: { x: 770, y: 750 },
          status: { taxi: true, bus: false, metro: false },
          possibleRoute: [
            { spot: 32, type: 'taxi' },
            { spot: 58, type: 'taxi' },
            { spot: 46, type: 'taxi' }
          ]
        },
        {
          number: 46,
          position: { x: 1050, y: 650 },
          status: { taxi: true, bus: true, metro: true },
          possibleRoute: [ 1, 33, 45 ]
        },
        {
          number: 57,
          position: { x: 220, y: 750 },
          status: { taxi: true, bus: false, metro: false },
          possibleRoute: [ 43, 58 ]
        },
        {
          number: 58,
          position: { x: 600, y: 800 },
          status: { taxi: true, bus: true, metro: false },
          possibleRoute: [ 1, 44, 46, 45, 57 ]
        }
      ]
    )
  })
}
