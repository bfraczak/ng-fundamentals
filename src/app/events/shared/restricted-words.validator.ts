import {FormControl} from "@angular/forms";

export function restrictedWords(words) {
  return (control: FormControl): { [key: string]: any } => {
    if (!words) return null;

    var invalidWors = words.map(w => control.value.includes(w) ? w : null).filter(w => w!=null);

    return invalidWors && invalidWors.length > 0
      ? {'restrictedWords': invalidWors.join(', ')}
      : null;
  }
}
