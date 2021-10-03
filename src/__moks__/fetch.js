const mockResponse = {
    "res": {
        definitions: [
        {definition: 'a colourless liquid', type: "noun"}
    ],
    pronunciation : "ˈwôdər",
    word: "water"
    }
    
}


export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}
