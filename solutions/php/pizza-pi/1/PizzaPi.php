<?php

class PizzaPi
{
    public function calculateDoughRequirement($pizza, $person)
    {
        return $pizza * (($person * 20) + 200);
    }

    public function calculateSauceRequirement($pizza, $can)
    {
        return $pizza * 125 / $can;
    }

    public function calculateCheeseCubeCoverage($size, $thick, $diameter)
    {
        return (int)(pow($size, 3) / ($thick * pi() * $diameter));
    }

    public function calculateLeftOverSlices($pizza, $person)
    {
        return ($pizza * 8) % $person;
    }
}
