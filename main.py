Number_1 = 0

def on_button_pressed_a():
    global Number_1
    Stage = 0
    if Stage == 1:
        Number_1 += 1
        basic.show_number(Number_1)
input.on_button_pressed(Button.A, on_button_pressed_a)
