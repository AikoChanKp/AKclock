import time

def countdown(minutes):
    seconds = minutes * 60  # แปลงจากนาทีเป็นวินาที
    while seconds:
        mins, secs = divmod(seconds, 60)  # แปลงเป็นนาที:วินาที
        timer = f"{mins:02}:{secs:02}"
        print(timer, end="\r")  # พิมพ์เวลาบนบรรทัดเดียว
        time.sleep(1)
        seconds -= 1

    print("Time's up!")  # แสดงข้อความเมื่อหมดเวลา

# รับค่าจากผู้ใช้
try:
    minutes = int(input("Enter the countdown time in minutes: "))
    countdown(minutes)
except ValueError:
    print("Please enter a valid number.")
