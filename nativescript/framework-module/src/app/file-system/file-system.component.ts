import {Component, OnInit} from '@angular/core';
import {knownFolders, File, Folder, path} from "tns-core-modules/file-system";

@Component({
    selector: 'ns-file-system',
    templateUrl: './file-system.component.html',
    styleUrls: ['./file-system.component.css'],
    moduleId: module.id,
})
export class FileSystemComponent implements OnInit {

    folderName: string;
    fileName: string;
    fileConent: string;
    isItemVisible: boolean = true;
    public successMessage: string;
    writtenContent: string;

    file: File;
    folder: Folder;


    constructor() {
    }

    ngOnInit() {
        console.log("Oninit ");
        let documentFolder = knownFolders.documents();
        let currentAppFolder = knownFolders.currentApp();
        let tempFolder = knownFolders.temp();

        let testPath = "///test.txt";

        // let documents = path.normalize(documentFolder.path+testPath);
        // let currentApp = path.normalize(currentAppFolder.path+testPath);
        // let temp = path.normalize(tempFolder.path+testPath);

        let docFolder = documentFolder.getFolder("Pp");
        console.log("1 ", docFolder.path);
        let docFile = docFolder.getFile("kk.txt");
        console.log("2 ", docFile.path);
        console.log("exist ? ", File.exists(docFile.path));
        console.log("locked ? ", docFile.isLocked);

        docFile.readText().then((result) => {
                console.log("file Content, ", result)
            },
            (error) => {
                   console.log("", error);
            })


    }

    public onCreateFile(): void {

        let documents = knownFolders.documents();
        this.folder = documents.getFolder(this.folderName || 'testFolder');
        this.file = this.folder.getFile((this.fileName || 'testFile') + '.txt');

        this.file.writeText(this.fileConent || 'Some Content')

            .then(result => {
                this.file.readText().then(
                    res => {

                        this.successMessage = "Succeffuly saved  in" + this.file.path;
                        this.writtenContent = res;
                        this.isItemVisible = true;

                        console.log('path ', this.file.path)
                    }
                )
            }).catch(err => {
            console.log(err);
        });
    }
}
