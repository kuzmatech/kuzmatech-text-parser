describe('Parser', () => {
    var prs = require('../lib/parser');
    var newParser
    beforeEach(() => {
        newParser = prs();
    });
        
    describe('parser results with markdown', function() {
        
        it('should return a h1', () => {
            expect(newParser.render('# Test')).toEqual('<h1>Test</h1>')
        });
        
        it('should return a h2', () => {
            expect(newParser.render('## Test')).toEqual('<h2>Test</h2>')
        });

        
        it('should return a h3', () => {
            expect(newParser.render('### Test')).toEqual('<h3>Test</h3>')
        });
            
    });
        
});
    