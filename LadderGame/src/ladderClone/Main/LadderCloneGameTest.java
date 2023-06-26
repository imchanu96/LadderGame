package ladderClone.Main;

import java.util.Scanner;

import ladder.Ladder;
import ladder.Message;

public class LadderCloneGameTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		int numberOfUsers; // 플레이어 수
		int selectWinPlayer; // 당첨 수 정하기
		
		Scanner scan = new Scanner(System.in);

		Message message = new Message();
		message.startMessage(); 						// 게임 시작 메세지
		
		try {
			numberOfUsers = Integer.parseInt(scan.nextLine());
		} catch (Exception e) {
			numberOfUsers = 2;							// 문자열일시 2로 고정
			System.out.println("숫자가 아닌 입력값으로 2로 고정합니다.");
		}
		
		
		Ladder ladder = new Ladder(numberOfUsers); 		// 플레이할 인원수 입력 받기
		
		message.selectWinPlayerMessage(); 				// 당첨 인원 고르라는 메세지
		
		
		try {											// 입력받은 인원수만큼 당첨 인원 저장
			selectWinPlayer = Integer.parseInt(scan.nextLine());
			ladder.selectWinPlayer(selectWinPlayer); 
		} catch (Exception e) {							// 잘못 입력하면 1로 고정
			System.out.println("잘못 입력하셔서 당첨인원은 1로 됩니다.");
			ladder.selectWinPlayer(1);
		}
		
		
		ladder.showLadder();

		scan.close();
	}
}