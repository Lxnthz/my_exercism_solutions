def exchange_money(budget, exchange_rate):
    return budget / exchange_rate

def get_change(budget, exchanging_value):
    return budget - exchanging_value

def get_value_of_bills(denomination, number_of_bills):
    return denomination * number_of_bills

def get_number_of_bills(amount, denomination):
    return int(amount // denomination)
    # :int() -> to format number as integer
    # :// -> floor division

def get_leftover_of_bills(amount, denomination):
    return amount % denomination
    # :% -> modulo or remainder operand

def exchangeable_value(budget, exchange_rate, spread, denomination):
    actual_rate = exchange_rate * (1 + spread / 100)
    # 1.00 EUR == 1.20 USD :: before spread
    # 1.00 EUR == 1.32 USD :: after spread, because 10% of 1.20 is 0.12 == 1.20 + 0.12 -> 1.32
    return int((exchange_money(budget, actual_rate) // denomination) * denomination)