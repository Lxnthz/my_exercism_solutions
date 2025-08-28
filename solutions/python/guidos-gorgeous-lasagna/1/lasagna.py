"""Functions used in preparing Guido's gorgeous lasagna.

Learn about Guido, the creator of the Python language:
https://en.wikipedia.org/wiki/Guido_van_Rossum

This is a module docstring, used to describe the functionality
of a module and its functions and/or classes.
"""

#TODO: define the 'EXPECTED_BAKE_TIME' constant.
EXPECTED_BAKE_TIME = 40

def bake_time_remaining(time):
    """
    Calculate the remaining bake time based on the elapsed time.

    Parameters:
    - time (int): The elapsed time in minutes.

    Returns:
    int: The remaining bake time.
    """
    return EXPECTED_BAKE_TIME - time
    
def preparation_time_in_minutes(layers):
    """
    Calculate the total preparation time based on the number of layers.

    Parameters:
    - layers (int): The number of lasagna layers.

    Returns:
    int: The total preparation time in minutes.
    """
    return layers * 2

def elapsed_time_in_minutes(layers, elapsed):
    """
    Calculate the total elapsed time based on the number of layers and the elapsed time.

    Parameters:
    - layers (int): The number of lasagna layers.
    - elapsed (int): The elapsed time in minutes.

    Returns:
    int: The total elapsed time in minutes.
    """
    return (layers * 2) + elapsed
