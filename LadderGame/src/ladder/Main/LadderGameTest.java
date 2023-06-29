package ladder.Main;

import java.util.Scanner;

import ladder.Ladder;
import ladder.Message;

public class LadderGameTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		int numberOfUsers; // 플레이어 수
		int selectWinPlayer; // 당첨 수 정하기
		
		Scanner scan = new Scanner(System.in);

		Message message = new Message();
		message.startMessage();	// 게임 시작 메세지
		
		try {
			numberOfUsers = Integer.parseInt(scan.nextLine());
			
			if (numberOfUsers > 20) {
				message.lineMessage();
				System.out.println("20초과로 인해 플레이어 2로 고정입니다.");
				numberOfUsers = 2;
				message.lineMessage();
			}
		} catch (Exception e) { // 오류일시일시  플레이어 2명으로 고정
			numberOfUsers = 2;
			message.lineMessage(); 
			System.out.println("숫자가 아닌 입력값으로 2로 고정합니다.");
			message.lineMessage();
		}
		
		
		Ladder ladder = new Ladder(numberOfUsers); // 플레이할 인원수 입력 받기
		
		message.selectWinPlayerMessage(); 	// 당첨 인원 고르라는 메세지
		
		
		try {		// 입력받은 인원수만큼 당첨 인원 저장
			selectWinPlayer = Integer.parseInt(scan.nextLine());
			ladder.selectWinPlayer(selectWinPlayer); 
		} catch (Exception e) {	// 잘못 입력하면 1로 고정
			message.lineMessage();
			System.out.println("잘못 입력하셔서 당첨인원은 1로 됩니다.");
			message.lineMessage();
			ladder.selectWinPlayer(1);
		}
		
		
		ladder.showLadder(); // 완성된 사다리 출력

		scan.close();
	}
}
