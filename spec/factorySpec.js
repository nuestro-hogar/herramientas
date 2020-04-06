const Factory = imports.factory;
const File = imports.helpers.file.File;
const Matcher = imports.matcher;

describe("object factory service", function() {

    beforeEach(function () {
       jasmine.addMatchers(Matcher.ObjectMatchers);
    });

    it("creates file object from path", function () {
        var file = Factory.AbstractFactory.create('file', {}, '/path/to/a/file');
        expect(file).toBeInstanceOf(File);
    });
});
