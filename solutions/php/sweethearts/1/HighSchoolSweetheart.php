<?php

class HighSchoolSweetheart
{
    public function firstLetter(string $name): string
    {
        return substr(ltrim($name), 0, 1);
    }

    public function initial(string $name): string
    {
        return strtoupper(substr(ltrim($name), 0, 1)) . ".";
    }

    public function initials(string $name): string
    {
        $names = preg_split('/\s+/', $name, -1, PREG_SPLIT_NO_EMPTY);
        $initialsArray = array_map(function ($word) {
            return strtoupper($word[0]) . '.';
        }, $names);
        return implode(' ', $initialsArray);
    }

    public function pair(string $sweetheart_a, string $sweetheart_b): string
    {
        $initials_a = $this->initials($sweetheart_a);
        $initials_b = $this->initials($sweetheart_b);

        $center_content = $initials_a . "  +  " . $initials_b;
        $padded_center = str_pad($center_content, 25, ' ', STR_PAD_BOTH);

        $lines = [
            '     ******       ******',
            '   **      **   **      **',
            ' **         ** **         **',
            '**            *            **',
            '**                         **',
            '**'   . $padded_center .  '**',
            ' **                       **',
            '   **                   **',
            '     **               **',
            '       **           **',
            '         **       **',
            '           **   **',
            '             ***',
            '              *',
        ]; // THIS ANNOYED ME SO MUCH

        return implode("\n", $lines);
    }
}
