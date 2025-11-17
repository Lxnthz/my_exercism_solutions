<?php

class Lasagna
{
    public function expectedCookTime()
    {
        return $cook_time = 40;
    }

    public function remainingCookTime($elapsed_minutes)
    {
        return 40 - $elapsed_minutes;
    }

    public function totalPreparationTime($layers_to_prep)
    {
        return $layers_to_prep * 2;
    }

    public function totalElapsedTime($layers_to_prep, $elapsed_minutes)
    {
        return $elapsed_minutes + ($layers_to_prep * 2);
    }

    public function alarm()
    {
        return "Ding!";
    }
}
