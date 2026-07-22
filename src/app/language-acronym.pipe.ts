import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'languageAcronymPipe',
    standalone: true
})
export class LanguageAcronymPipe implements PipeTransform {
    transform(acronym: string): string {
        switch (acronym) {
            case 'en': return "English";
            case 'es': return "Spanish";
            case 'fr': return "French";
            case 'it': return "Italian";
            case 'pt': return "Portuguese";
            default: return "";
        }
    }
}